import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_MAX = 3; // max submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // per 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

// Escape HTML to prevent injection in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Validate phone format (optional field, but if provided must be reasonable)
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // optional field
  const phoneRegex = /^[+]?[\d\s\-()]{6,20}$/;
  return phoneRegex.test(phone);
}

// Allowed service values
const ALLOWED_SERVICES = ["setup", "discord", "both", "corporate", "other"];

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Твърде много заявки. Моля, опитайте отново по-късно." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message, website } = body;

    // Honeypot check — if "website" field is filled, it's a bot
    if (website) {
      // Silently accept to not tip off bots, but don't send email
      return NextResponse.json(
        { success: true, message: "Съобщението е изпратено успешно!" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Моля, попълнете всички задължителни полета." },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Името е твърде дълго (макс. 100 символа)." },
        { status: 400 }
      );
    }
    if (email.length > 254) {
      return NextResponse.json(
        { error: "Невалиден имейл адрес." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Съобщението е твърде дълго (макс. 5000 символа)." },
        { status: 400 }
      );
    }
    if (phone && phone.length > 20) {
      return NextResponse.json(
        { error: "Невалиден телефонен номер." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Моля, въведете валиден имейл адрес." },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Моля, въведете валиден телефонен номер." },
        { status: 400 }
      );
    }

    // Validate service value
    if (!ALLOWED_SERVICES.includes(service)) {
      return NextResponse.json(
        { error: "Невалидна услуга." },
        { status: 400 }
      );
    }

    // Sanitize all inputs for email HTML
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml((phone || "").trim());
    const safeMessage = escapeHtml(message.trim());

    // Service labels in Bulgarian
    const serviceLabels: Record<string, string> = {
      setup: "Инсталация и настройка (200 лв)",
      discord: "Discord абонамент (20 лв/мес)",
      both: "Инсталация + Discord",
      corporate: "Корпоративно решение",
      other: "Друго / Въпрос",
    };

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to the business (notification of new inquiry)
    await transporter.sendMail({
      from: `"ailqkai Контакт Форма" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: safeEmail,
      subject: `📩 Ново запитване от ${safeName} — ${serviceLabels[service] || service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #6C3AED, #8B5CF6); padding: 20px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">📩 Ново запитване от ailqkai.com</h1>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">👤 Име:</td>
                <td style="padding: 8px 0; color: #1f2937;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">📧 Имейл:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">📱 Телефон:</td>
                <td style="padding: 8px 0; color: #1f2937;">${safePhone || "Не е посочен"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">🎯 Услуга:</td>
                <td style="padding: 8px 0; color: #1f2937;">${serviceLabels[service] || service}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">💬 Съобщение:</p>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1f2937; line-height: 1.6;">
              ${safeMessage.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to the customer
    await transporter.sendMail({
      from: `"ailqkai" <${process.env.EMAIL_USER}>`,
      to: safeEmail,
      subject: "✅ Получихме вашето запитване — ailqkai",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #6C3AED, #8B5CF6); padding: 20px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Благодарим ви, ${safeName}! 🎉</h1>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Получихме вашето запитване и ще се свържем с вас <strong>до 1 час</strong>.
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Междувременно, ако имате допълнителни въпроси, просто отговорете на този имейл.
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="color: #6b7280; font-size: 14px;">
              С уважение,<br>
              <strong>Екипът на ailqkai</strong><br>
              🌐 <a href="https://ailqkai.com" style="color: #6C3AED;">ailqkai.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Съобщението е изпратено успешно!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Възникна грешка при изпращането. Моля, опитайте отново." },
      { status: 500 }
    );
  }
}
