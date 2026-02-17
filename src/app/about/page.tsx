import Link from "next/link";
import type { Metadata } from "next";
import StoryWithTeam from "@/components/StoryWithTeam";
import AboutSidebar from "@/components/AboutSidebar";

export const metadata: Metadata = {
  title: "За нас | ailqkai | Кои сме ние",
  description:
    "Екипът зад ailqkai: IT професионалисти от България, които помагат на хора и бизнеси да използват AI асистенти правилно и сигурно.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Кой стои зад Айляк AI?
          </h1>
        </div>
        {/* Wave divider - smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Two-column: Logo + Contact (left) | Team (right) */}
      <section className="pt-6 pb-16 md:pt-10 md:pb-24 bg-[#F8FAFC] -mt-px">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full flex flex-col lg:flex-row items-stretch gap-0">
            {/* Left: logo, line, contact, social - centered vertically with right card */}
            <div className="lg:w-[280px] lg:flex-shrink-0 flex flex-col justify-center items-center lg:pr-12 order-2 lg:order-1 pt-12 lg:pt-0">
              <AboutSidebar />
            </div>
            {/* Right: team card - moved up */}
            <div className="lg:flex-1 lg:min-w-0 lg:pl-12 order-1 lg:order-2 -mt-4 lg:-mt-2">
              <StoryWithTeam embedded />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Нашите ценности
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔐",
                title: "Сигурност на първо място",
                description:
                  "Вашите данни са ваши. Конфигурираме всичко с мисъл за защита: от пароли до мрежови настройки.",
              },
              {
                icon: "🤝",
                title: "Честност и прозрачност",
                description:
                  "Ясни цени, без скрити такси, без заключващи договори. Ако нещо не можем, казваме го.",
              },
              {
                icon: "🚀",
                title: "Иновации за всеки",
                description:
                  "Вярваме, че AI технологиите трябва да са достъпни не само за големите компании, а за всеки.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-hover bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100/80"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "24/7", label: "Достъпност" },
              { value: "100%", label: "Фокус върху BG пазара" },
              { value: "99 €", label: "Пълна настройка" },
              { value: "1 час", label: "Средно време за отговор" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-[#64748B] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Нека работим заедно
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Имате въпроси? Искате да научите повече? Свържете се с нас.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-[#0F172A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors btn-interactive min-h-[44px]"
          >
            Свържете се →
          </Link>
        </div>
      </section>
    </>
  );
}
