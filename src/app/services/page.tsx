import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги — ailqkai | AI асистент настройка",
  description:
    "Професионална инсталация и настройка на AI асистенти. Еднократна настройка, месечна поддръжка, Discord общност.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Нашите услуги
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Всичко, от което се нуждаете, за да имате работещ, сигурен и персонализиран AI асистент.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service 1: Setup */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <span className="text-2xl">🛠</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                Пълна инсталация и настройка
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-6">
                Инсталираме AI асистент на вашия компютър или виртуална машина. 
                Конфигурираме го за вашите специфични нужди — от езикови настройки 
                до интеграция с инструментите, които използвате.
              </p>
              <h3 className="font-semibold text-[#0F172A] mb-3">Какво включва:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Инсталация на софтуера на вашата машина",
                  "Конфигурация на AI модели по избор",
                  "Настройка на сигурност и достъп",
                  "Интеграция с месинджъри (Telegram, Discord, WhatsApp)",
                  "Персонализация на поведението на асистента",
                  "Обучение — показваме ви как да го използвате",
                  "Тестване и оптимизация",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#0F172A]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between bg-purple-50 rounded-xl p-4">
                <div>
                  <span className="text-3xl font-bold text-[#0F172A]">200 лв</span>
                  <span className="text-[#64748B] ml-2">еднократно</span>
                </div>
                <Link
                  href="/contact"
                  className="gradient-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                >
                  Поръчай
                </Link>
              </div>
            </div>

            {/* Service 2: Discord */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-2 border-purple-500 relative">
              <div className="absolute -top-3 right-6 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                ПОПУЛЯРНО
              </div>
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                Discord общност и поддръжка
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-6">
                Присъединете се към нашата ексклузивна Discord общност. Получавате 
                постоянна поддръжка, помощ с конфигурации, съвети и достъп до 
                общност от хора, които също използват AI асистенти.
              </p>
              <h3 className="font-semibold text-[#0F172A] mb-3">Какво включва:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Достъп до частен Discord сървър",
                  "Приоритетна техническа поддръжка",
                  "Помощ при проблеми и обновления",
                  "Споделяне на идеи и трикове",
                  "Ексклузивни ръководства и материали",
                  "Система за support тикети",
                  "Общност от AI ентусиасти",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#0F172A]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between bg-purple-50 rounded-xl p-4">
                <div>
                  <span className="text-3xl font-bold text-[#0F172A]">20 лв</span>
                  <span className="text-[#64748B] ml-2">/месец</span>
                </div>
                <Link
                  href="/contact"
                  className="gradient-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                >
                  Абонирай се
                </Link>
              </div>
              <p className="text-sm text-green-600 mt-3 text-center font-medium">
                🎁 1 месец безплатно при поръчка на настройка!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              За кого е подходящо?
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              AI асистентът помага на всеки — от ученици до компании
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎓",
                title: "Ученици и студенти",
                description: "Помощ с домашни, есета, изследвания и учене на нови неща.",
              },
              {
                icon: "💼",
                title: "Професионалисти",
                description: "Автоматизация на имейли, документи, анализи и ежедневни задачи.",
              },
              {
                icon: "🏢",
                title: "Компании",
                description: "3x повече продуктивност. AI за целия екип с корпоративна сигурност.",
              },
              {
                icon: "🔧",
                title: "Технически хора",
                description: "Правилна конфигурация, сигурност и оптимизация от експерт.",
              },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-purple-500 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готови да започнете?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Свържете се с нас и ще ви помогнем да изберете най-доброто решение за вас.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0F172A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Свържете се с нас →
          </Link>
        </div>
      </section>
    </>
  );
}
