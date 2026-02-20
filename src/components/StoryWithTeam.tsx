"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  {
    name: "Йордан М.",
    initials: "YM",
    image: "/yordan.jpg",
    role: "Основател",
    description: (
      <>
        <p>
          Като софтуерен инженер с над 5 години опит, рано осъзнах колко мощни
          могат да бъдат AI асистентите. В същото време видях и другата страна,
          колко трудно е за обикновения човек да ги инсталира, конфигурира и
          използва по правилния начин.
        </p>
        <p>
          Вярвам, че AI може да бъде реална помощ както за компаниите, така и за
          хората в ежедневието им. Затова създадох{" "}
          <strong className="text-[#0F172A]">Айляк AI</strong>, проект с ясна
          цел да направи AI асистентите достъпни, практични и полезни както за
          бизнеса, така и за всеки, който иска да работи по бързо, по умно и с
          по малко усилия.
        </p>
      </>
    ),
    isFounder: true,
  },
  {
    name: "Павел Д.",
    initials: "PD",
    role: "Младши софтуерен инженер",
    description: (
      <>
        <p>
          Софтуерен инженер от 2 години. Помагам за техническата реализация и
          поддръжката на проектите. Вярвам, че AI технологиите трябва да са
          достъпни не само за големите компании, а за всеки.
        </p>
      </>
    ),
    isFounder: false,
  },
];

interface StoryWithTeamProps {
  className?: string;
  embedded?: boolean;
}

export default function StoryWithTeam({
  className = "",
  embedded = false,
}: StoryWithTeamProps) {
  return (
    <AnimatedSection
      className={`${embedded ? "" : "py-20 md:py-28 -mt-px"} bg-[#F8FAFC] ${className}`}
    >
      <div className="w-full">
        <div className="card-hover bg-white rounded-2xl p-10 md:p-14 lg:p-16 shadow-sm border border-gray-100/80">
          {team.map((person, i) => (
            <motion.div
              key={person.initials}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={i > 0 ? "mt-12 pt-12 border-t border-gray-100" : ""}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div
                  className={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 ${
                    person.isFounder ? "border-purple-500" : "border-purple-200"
                  }`}
                >
                  {"image" in person && person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className={`w-full h-full gradient-primary flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {person.initials}
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                    {person.name}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-4 ${
                      person.isFounder ? "text-purple-600" : "text-[#64748B]"
                    }`}
                  >
                    {person.role}
                  </p>
                  <div className="space-y-4 text-[#64748B] leading-relaxed text-lg">
                    {person.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
