"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Какво точно е AI асистент?",
    answer:
      "AI асистентът е софтуер с изкуствен интелект, който работи на вашия компютър или виртуална машина. На практика може да прави абсолютно всичко, което се извършва на компютър или лаптоп, с допълнението, че има достъп до информация от целия свят. Той може да ви помага с писане на текстове, анализ на документи, отговаряне на въпроси, автоматизация на задачи и много повече — 24 часа в денонощието, 7 дни в седмицата.",
  },
  {
    question: "Работите ли с компании?",
    answer:
      "Да! Предлагаме корпоративни решения — инсталация на AI асистенти за целия екип, с централизирано управление и сигурност на корпоративно ниво. Свържете се с нас за индивидуална оферта.",
  },
  {
    question: "Защо ми е нужна професионална настройка?",
    answer:
      "Софтуерът е с отворен код, но инсталацията и конфигурацията изискват сериозни технически познания — от работа с командния ред до настройка на сигурност и мрежови конфигурации. Неправилната настройка може да доведе до проблеми със сигурността или лоша производителност. Ние се грижим всичко да работи перфектно.",
  },
  {
    question: "Колко време отнема инсталацията?",
    answer:
      "Стандартната инсталация и настройка отнема между 1-2 часа в зависимост от вашите нужди и конфигурация. След това тестваме всичко и ви обучаваме как да го използвате.",
  },
  {
    question: "Безопасно ли е? Кой има достъп до моите данни?",
    answer:
      "Абсолютно безопасно. AI асистентът работи на ВАШИЯ компютър или VM — данните ви никога не напускат вашата машина. Ние конфигурираме сигурността професионално — защитени пароли, криптирани връзки и правилни мрежови настройки.",
  },
  {
    question: "Как да платя?",
    answer:
      "Приемаме плащания с по банков път и Revolut. Процесът е прост: свързвате се с нас, обсъждаме вашите нужди, съгласяваме се и извършвате плащането.",
  },
  {
    question: "Какво ако имам проблем след инсталацията?",
    answer:
      "Първият месец след инсталацията поддръжката е безплатна. След това можете да се абонирате за нашата Discord общност (20 лв/месец) за постоянна поддръжка, или да ни се обадите за еднократна помощ.",
  },
  {
    question: "На какъв компютър мога да инсталирам AI асистент?",
    answer:
      "AI асистентът може да работи на Windows, macOS или Linux. Може да бъде инсталиран и на виртуална машина (VM) в облака. Ще ви помогнем да изберете най-доброто решение за вашия случай.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#0F172A] pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-[#64748B] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 bg-white">
          <p className="text-[#64748B] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Често задавани въпроси
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Всичко, което искате да знаете за нашите услуги и AI асистентите.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
              Не намерихте отговор?
            </h3>
            <p className="text-[#64748B] mb-6">
              Свържете се с нас директно и ще ви отговорим възможно най-бързо.
            </p>
            <Link
              href="/contact"
              className="inline-block gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Пишете ни →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
