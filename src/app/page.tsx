import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="pulse-dot" />
              <span className="text-green-400 text-sm font-medium">Приемаме нови клиенти</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Вашият{" "}
              <span className="text-gradient">AI асистент</span>
              <br />
              настроен от професионалисти
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Инсталираме, конфигурираме и настройваме персонален AI асистент 
              специално за вашите нужди. Сигурно, бързо и без главоболия.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 w-full sm:w-auto"
              >
                Искам AI асистент →
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                Научете повече
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Защо ви е нужен AI асистент?
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Изкуственият интелект вече не е бъдеще — той е настояще. Ето как може да промени работата ви.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "3x по-бързо",
                description:
                  "Автоматизирайте повтарящи се задачи — имейли, документи, анализи. Спестете часове всеки ден.",
              },
              {
                icon: "🔒",
                title: "Сигурност",
                description:
                  "Правилно конфигуриран AI означава вашите данни остават ваши. Без рискове, без течове.",
              },
              {
                icon: "🎯",
                title: "Персонализация",
                description:
                  "Настроен специално за вашите нужди — не общ инструмент, а ваш персонален помощник.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Как работи?
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Три прости стъпки до вашия AI асистент
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Свържете се с нас",
                description:
                  "Попълнете формата за контакт или ни пишете. Ще обсъдим вашите нужди и ще ви предложим най-доброто решение.",
              },
              {
                step: "02",
                title: "Настройваме AI-то",
                description:
                  "Нашият екип инсталира, конфигурира и тества вашия AI асистент. Всичко е готово за часове.",
              },
              {
                step: "03",
                title: "Работите по-умно",
                description:
                  "Започвате да използвате вашия асистент веднага. Плюс — получавате достъп до нашата Discord общност за поддръжка.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-black text-purple-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Прозрачни цени
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Без скрити такси. Знаете точно какво получавате.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* One-time setup */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Еднократно
              </div>
              <div className="flex items-baseline space-x-1 mb-2">
                <span className="text-4xl font-bold text-[#0F172A]">200</span>
                <span className="text-xl text-[#64748B]">лв</span>
              </div>
              <p className="text-[#64748B] mb-6">Пълна инсталация и настройка</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Инсталация на AI асистент",
                  "Персонална конфигурация",
                  "Сигурна настройка",
                  "Обучение за ползване",
                  "1 месец безплатна поддръжка",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#0F172A]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Поръчайте сега
              </Link>
            </div>

            {/* Monthly subscription */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border-2 border-purple-500 relative">
              <div className="absolute -top-3 right-6 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                ПРЕПОРЪЧАНО
              </div>
              <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Месечен абонамент
              </div>
              <div className="flex items-baseline space-x-1 mb-2">
                <span className="text-4xl font-bold text-[#0F172A]">20</span>
                <span className="text-xl text-[#64748B]">лв/месец</span>
              </div>
              <p className="text-[#64748B] mb-6">Discord общност + поддръжка</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Достъп до Discord общност",
                  "Приоритетна поддръжка",
                  "Помощ с конфигурация",
                  "Съвети и трикове от експерти",
                  "Ексклузивни обновления",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#0F172A]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Присъединете се
              </Link>
            </div>
          </div>

          <p className="text-center text-[#64748B] text-sm mt-8">
            💳 Плащане с карта или Revolut • 🎁 Първият месец Discord е безплатен при поръчка на настройка
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-purple-500 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готови ли сте за вашия AI асистент?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Свържете се с нас днес и започнете да работите по-умно утре. 
            Без ангажименти — просто ни пишете.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0F172A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Свържете се с нас →
          </Link>
        </div>
      </section>
    </>
  );
}
