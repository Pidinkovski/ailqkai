import Link from "next/link";
import PhoneVideoFrame from "@/components/PhoneVideoFrame";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 shadow-[0_0_20px_rgba(74,222,128,0.25),0_0_40px_rgba(74,222,128,0.1)]">
                <div className="pulse-dot" />
                <span className="text-green-400 text-sm font-medium">
                  Приемаме нови клиенти
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Вашият{" "}
                <span className="text-gradient text-gradient-glow">
                  AI асистент
                </span>
                <br />
                настроен от професионалисти
              </h1>

              <div className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 space-y-4">
                <p className="md:whitespace-nowrap">Изкуствен интелект, който действително прави неща.</p>
                <p>
                  Инсталираме, конфигурираме и настройваме персонален AI
                  асистент специално за вашите нужди.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 w-full sm:w-auto text-center btn-interactive min-h-[44px] flex items-center justify-center"
                >
                  Искам AI асистент →
                </Link>
                <Link
                  href="/services"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center btn-interactive min-h-[44px] flex items-center justify-center"
                >
                  Научете повече
                </Link>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <PhoneVideoFrame />
            </div>
          </div>
        </div>

        {/* Mobile: gradient fade for smooth transition (no wave = no line) */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8FAFC]" />
        {/* Desktop: wave divider */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 overflow-hidden">
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

      {/* Why AI Section */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Защо ви е нужен AI асистент?
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Изкуственият интелект вече не е бъдеще — той е настояще. Ето как
              може да промени работата ви.
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
                className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80"
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

      {/* Top 10 Automations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              🏆 ТОП 10 примерни автоматизации
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Вижте какво може да прави вашият AI асистент
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "🛒",
                title: "Онлайн магазин мениджър",
                description:
                  "Обработва поръчки, създава товарителници, пише фактури и изпраща имейли на клиенти автоматично.",
              },
              {
                icon: "🌐",
                title: "Уебсайт създател",
                description:
                  "Създава лендинг страници и малки сайтове от текстово описание — за минути, не дни.",
              },
              {
                icon: "💼",
                title: "Бизнес анализатор",
                description:
                  "Анализира данни от продажби, генерира отчети и дава препоръки за подобряване на бизнеса.",
              },
              {
                icon: "📱",
                title: "Социални мрежи мениджър",
                description:
                  "Планира постове, генерира текстове и изображения, отговаря на коментари и съобщения.",
              },
              {
                icon: "📧",
                title: "Имейл асистент",
                description:
                  "Сортира входящата поща, маркира важното, отговаря на рутинни запитвания и ви известява само за спешното.",
              },
              {
                icon: "📊",
                title: "Счетоводен помощник",
                description:
                  "Категоризира разходи, подготвя данни за счетоводителя, следи фактури и плащания.",
              },
              {
                icon: "🎯",
                title: "Маркетинг стратег",
                description:
                  "Генерира идеи за кампании, пише рекламни текстове, анализира конкуренцията.",
              },
              {
                icon: "📞",
                title: "Клиентска поддръжка",
                description:
                  "Отговаря на често задавани въпроси 24/7, ескалира само сложните случаи към вас.",
              },
              {
                icon: "🗓️",
                title: "Личен планировчик",
                description:
                  "Организира календара, напомня за срокове, приоритизира задачи и следи цели.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-hover bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100/80"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
            <p className="text-xl md:text-2xl font-semibold text-[#0F172A]">
              💬 И всичко това само пишейки си с твоя AI асистент
            </p>
            <p className="text-lg text-[#64748B] mt-2">
              през <span className="font-medium text-purple-600">Telegram</span>
              , <span className="font-medium text-purple-600">Discord</span>,{" "}
              <span className="font-medium text-purple-600">iMessage</span>,{" "}
              <span className="font-medium text-purple-600">WhatsApp</span> и
              други
            </p>
          </div>
        </div>
      </section>

      {/* Works With Everything */}
      <section className="py-16 md:py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              ⚡ Работи с всичко
            </h2>
            <p className="text-gray-400">
              Интегрира се с любимите ви приложения и услуги
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              { name: "Gmail", icon: "📧" },
              { name: "Calendar", icon: "📅" },
              { name: "Shopify", icon: "🛒" },
              { name: "Slack", icon: "#️⃣" },
              { name: "Notion", icon: "📝" },
              { name: "GitHub", icon: "🐙" },
              { name: "Claude", icon: "🤖" },
              { name: "GPT", icon: "🧠" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
              >
                <span>{item.icon}</span>
                <span className="text-white font-medium">{item.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Google Drive", icon: "📁" },
              { name: "Dropbox", icon: "📦" },
              { name: "Trello", icon: "📋" },
              { name: "Browser", icon: "🌐" },
              { name: "Twitter/X", icon: "𝕏" },
              { name: "LinkedIn", icon: "💼" },
              { name: "Excel", icon: "📊" },
              { name: "И още...", icon: "✨" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
              >
                <span>{item.icon}</span>
                <span className="text-white font-medium">{item.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            50+ интеграции • Постоянно добавяме нови
          </p>
        </div>
      </section>

      {/* Support & Community */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              💬 Поддръжка и общност
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Когато купувате AI асистент, не получавате просто приложение —
              получавате достъп до нашето Discord community, в което ще
              намерите:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                ✅ Експертна подкрепа
              </h3>
              <ul className="space-y-3 text-[#64748B]">
                <li className="flex items-start space-x-2">
                  <span>🚀</span>
                  <span>
                    <strong>Директен контакт</strong> с хората, които са
                    настроили асистента ви
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>⚡</span>
                  <span>
                    <strong>Бърза реакция</strong> — отговори за минути, не дни
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>🎫</span>
                  <span>
                    <strong>Система за тикети</strong> за сложни проблеми
                  </span>
                </li>
              </ul>
            </div>

            <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                ✅ Знания и обучение
              </h3>
              <ul className="space-y-3 text-[#64748B]">
                <li className="flex items-start space-x-2">
                  <span>📚</span>
                  <span>
                    <strong>База знания</strong> — готови решения на често
                    срещани проблеми
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>🎓</span>
                  <span>
                    <strong>Обучения и уроци</strong> — извлечете максимума
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>📖</span>
                  <span>
                    <strong>Ръководства</strong> стъпка по стъпка
                  </span>
                </li>
              </ul>
            </div>

            <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                ✅ Общност и обновления
              </h3>
              <ul className="space-y-3 text-[#64748B]">
                <li className="flex items-start space-x-2">
                  <span>👥</span>
                  <span>
                    <strong>Споделяйте идеи</strong> с други потребители
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>🔄</span>
                  <span>
                    <strong>Редовни обновления</strong> — научавате първи за
                    нови функции
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>💡</span>
                  <span>
                    <strong>Готови автоматизации</strong> — научете от другите
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 border border-purple-200">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                ❓ Какво става когато нещо не работи?
              </h3>
              <p className="text-[#64748B] mb-4">
                AI асистентът е мощен инструмент, но понякога има нужда от помощ
                — нова функция, пренастройка, или нещо спря да работи.
              </p>
              <p className="text-lg font-semibold text-purple-700">
                С Discord достъп вие НЕ сте сами: Пишете → Получавате помощ →
                Проблемът е решен ✅
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              ⭐ Какво казват нашите клиенти
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Реални отзиви от хора, които вече използват AI асистент
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Галин Г.",
                role: "Собственик на онлайн магазин",
                rating: 5,
                text: "AI асистентът напълно промени начина, по който управлявам магазина си. Поръчките се обработват автоматично, фактурите се пишат сами. Спестявам поне 3 часа на ден!",
              },
              {
                name: "Иван П.",
                role: "Junior програмист, СофтУни",
                rating: 5,
                text: "Junior програмист съм и тъкмо завърших СофтУни. Благодарение на AI асистента създадох уебсайт за буквално 7 минути, който би ми отнел поне две седмици да напиша кода. Ненормално.",
              },
              {
                name: "Никола Т.",
                role: "Офис мениджър",
                rating: 5,
                text: "Не му се спи, не е изморен, снощи не е препил и може абсолютно всичко, което човек би извършил на компютър — 24/7. Не знам по-добър асистент дали изобщо ще съществува.",
              },
              {
                name: "Петър В.",
                role: "Предприемач",
                rating: 5,
                text: "Дадох му достъп до Slack, Discord и iMessage само да чете. Асистентът минава през всичките ми чатове и ми изкарва списък с най-важните задачи — на кого какво съм обещал, до кога трябва да свърша и т.н. ВЕЛИКО.",
              },
              {
                name: "Мария К.",
                role: "Фрийлансър",
                rating: 5,
                text: "Най-накрая имам помощник, който не забравя нищо. Организира ми календара, напомня ми за срокове и дори ми помага с офертите за клиенти. Препоръчвам!",
              },
              {
                name: "Димитър С.",
                role: "Маркетинг мениджър",
                rating: 5,
                text: "Екипът беше изключително професионален. Настроиха всичко за часове и ми показаха как да го използвам. Поддръжката в Discord е невероятна — отговарят за минути.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="card-hover bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100/80"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-[#0F172A] leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-[#0F172A]">
                      {review.name}
                    </p>
                    <p className="text-sm text-[#64748B]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[#64748B]">
              Имате опит с нас?{" "}
              <Link
                href="/contact"
                className="text-purple-600 font-semibold hover:text-purple-700 underline-offset-4 hover:underline transition-colors"
              >
                Оставете отзив →
              </Link>
            </p>
          </div>
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
            Свържете се с нас днес и започнете да работите по-умно утре. Без
            ангажименти — просто ни пишете.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-[#0F172A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg btn-interactive min-h-[44px]"
          >
            Свържете се с нас →
          </Link>
        </div>
      </section>
    </>
  );
}
