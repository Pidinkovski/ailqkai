"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "setup",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", service: "setup", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Свържете се с нас
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Разкажете ни за вашите нужди и ще се свържем с вас до 1 час.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                  Попълнете формата
                </h2>

                {status === "sent" ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                      Съобщението е изпратено!
                    </h3>
                    <p className="text-[#64748B]">
                      Ще се свържем с вас възможно най-бързо. Очаквайте отговор до 1 час.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Вашето име *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-[#0F172A]"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Имейл *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-[#0F172A]"
                          placeholder="ivan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Телефон (незадължително)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-[#0F172A]"
                          placeholder="+359 88 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Интересувам се от *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-[#0F172A] bg-white"
                        >
                          <option value="setup">Инсталация и настройка (200 лв)</option>
                          <option value="discord">Discord абонамент (20 лв/мес)</option>
                          <option value="both">И двете</option>
                          <option value="corporate">Корпоративно решение</option>
                          <option value="other">Друго / Въпрос</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        Съобщение *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-[#0F172A] resize-none"
                        placeholder="Разкажете ни повече за вашите нужди..."
                      />
                    </div>

                    {status === "error" && (
                      <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">
                        Възникна грешка. Моля, опитайте отново или ни пишете на info@ailqkai.com
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full gradient-primary text-white px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 text-lg"
                    >
                      {status === "sending" ? "Изпращане..." : "Изпратете съобщение →"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0F172A] mb-4">📧 Имейл</h3>
                <a href="mailto:info@ailqkai.com" className="text-purple-600 hover:text-purple-700 font-medium">
                  info@ailqkai.com
                </a>
                <p className="text-[#64748B] text-sm mt-2">Отговаряме до 1 час</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0F172A] mb-4">💬 Discord</h3>
                <p className="text-[#64748B]">
                  Присъединете се към нашата общност за бърза поддръжка и дискусии.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0F172A] mb-4">💳 Начини на плащане</h3>
                <div className="space-y-2 text-[#64748B]">
                  <p>• Банкова карта (Visa, Mastercard)</p>
                  <p>• Revolut</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="font-bold text-[#0F172A] mb-3">🎁 Специална оферта</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Поръчайте настройка (200 лв) и получете <strong className="text-purple-600">1 месец безплатен</strong> достъп до Discord общността!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
