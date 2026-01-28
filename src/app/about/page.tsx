import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "За нас — ailqkai | Кои сме ние",
  description:
    "Екипът зад ailqkai — IT професионалисти от България, които помагат на хора и бизнеси да използват AI асистенти правилно и сигурно.",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            За нас
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            IT професионалисти от България с мисия — да направим AI достъпен за всеки.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
              Нашата история
            </h2>
            <div className="space-y-4 text-[#64748B] leading-relaxed text-lg">
              <p>
                Като IT специалисти, ние рано разбрахме колко мощни могат да бъдат AI 
                асистентите. Но също така видяхме и другата страна — колко трудно е за 
                обикновения потребител да инсталира, конфигурира и използва тези инструменти 
                правилно.
              </p>
              <p>
                Софтуерът е безплатен и с отворен код. Но инсталацията изисква технически 
                познания. Конфигурацията — опит. А сигурността — експертиза. Повечето хора 
                се отказват още при първата стъпка.
              </p>
              <p>
                Затова създадохме <strong className="text-[#0F172A]">ailqkai</strong> — услуга, 
                която прави AI асистентите достъпни за всеки в България. Ние се грижим за 
                техническата част, за да можете вие да се фокусирате върху работата си.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
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
                  "Вашите данни са ваши. Конфигурираме всичко с мисъл за защита — от пароли до мрежови настройки.",
              },
              {
                icon: "🤝",
                title: "Честност и прозрачност",
                description:
                  "Ясни цени, без скрити такси, без заключващи договори. Ако нещо не можем — казваме го.",
              },
              {
                icon: "🚀",
                title: "Иновации за всеки",
                description:
                  "Вярваме, че AI технологиите трябва да са достъпни не само за големите компании, а за всеки.",
              },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "24/7", label: "Достъпност" },
              { value: "100%", label: "Фокус върху BG пазара" },
              { value: "200 лв", label: "Пълна настройка" },
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
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Нека работим заедно
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Имате въпроси? Искате да научите повече? Свържете се с нас.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0F172A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Свържете се →
          </Link>
        </div>
      </section>
    </>
  );
}
