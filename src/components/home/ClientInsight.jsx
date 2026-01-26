"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Consistent service quality builds long-term trust",
    content:
      "Clients appreciate MedClover for delivering well-trained and experienced caregivers who maintain professionalism and compassion in their work. The ability to provide dependable staff on a regular basis helps ensure continuous patient care and long-term reliability.",
    author: "– Hospital Administrator",
    dark: false,
  },
  {
    title: "Good communication reduce anxiety",
    content:
      "Hospital administrators value MedClover for its clear, timely, and professional communication. Regular updates about staff availability, shift scheduling, and replacements help avoid operational disruptions.",
    author: "– Operation manager",
    dark: true,
  },
  {
    title: "Trained caregivers improve patient comfort and recovery",
    content:
      "Clients value MedClover for assigning skilled and compassionate caregivers who understand patient needs and follow care routines carefully. This level of expertise helps improve patient comfort, safety, and overall recovery experience.",
    author: "– Home Care Client",
    dark: false,
  },
];

export default function ClientInsight() {
  const [index, setIndex] = useState(1);

  const prev = () => setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full bg-[#FDECD7] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-labrada">
            Client <span className="text-blue-800">Insight</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 max-w-xl mx-auto font-labrada">
            Trusted by clients for our professionalism, reliability, and quality healthcare services.
          </p>

          <div className="flex justify-center mt-4">
            <span className="w-10 sm:w-12 h-[3px] bg-orange-500 rounded-full mr-2"></span>
            <span className="w-10 sm:w-12 h-[3px] bg-blue-900 rounded-full"></span>
          </div>
        </div>

        {/* MOBILE  */}
        <div className="relative md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {cards.map((card, i) => (
              <div key={i} className="min-w-full px-2">
                <div
                  className={`rounded-2xl p-6 min-h-[340px] flex flex-col justify-between shadow-lg
                    ${card.dark ? "bg-[#13245E] text-white" : "bg-white text-black"}
                  `}
                >
                  <div>
                    <h3 className="font-semibold text-base mb-4 text-center">
                      {card.title}
                    </h3>

                    <p
                      className={`text-sm text-center leading-relaxed ${
                        card.dark ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {card.content}
                    </p>
                  </div>

                  <p className="mt-5 text-sm font-medium text-center">
                    {card.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* DESKTOP  */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 min-h-[360px] flex flex-col justify-between shadow-lg
                ${card.dark ? "bg-[#13245E] text-white" : "bg-white text-black"}
              `}
            >
              <div>
                <h3 className="font-semibold text-lg mb-4 text-center">
                  {card.title}
                </h3>

                <p
                  className={`text-sm text-center leading-relaxed ${
                    card.dark ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {card.content}
                </p>
              </div>

              <p className="mt-6 text-sm font-medium text-center">
                {card.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
