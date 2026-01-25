"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does MedClover Solutions provide?",
    answer:
      "MedClover Solutions provides trained caregivers, nursing staff, and healthcare support services for hospitals care facilities, and home care clients, ensuring quality and continuity of care.",
  },
  {
    question: "Who can partner with MedClover?",
    answer:
      "Hospitals, nursing homes, clinics, care facilities, and healthcare organizations looking for reliable staffing and care support can partner with MedClover.",
  },
  {
    question: "How does MedClover ensure quality caregivers?",
    answer:
      "All caregivers and nursing staff undergo proper screening, training, and verification to ensure professionalism, skill, and compassionate patient care.",
  },
  {
    question: "How quickly can staff be deployed?",
    answer:
      "Deployment timelines depend on requirements, but MedClover focuses on timely and efficient staffing to minimize service gaps.",
  },
  {
    question: "Do you provide home care services?",
    answer:
      "Yes, we offer home care services including patient care, elderly care, and baby care, tailored to individual needs and comfort.",
  },
  {
    question: "Is MedClover suitable for long-term partnerships?",
    answer:
      "Absolutely. We believe in building long-term partnerships based on trust, service quality, and consistent performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-labrada font-semibold mb-12">
          FAQ <span className="text-orange-500">(frequently ask question)</span>
        </h2>

        
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border border-transparent">

                
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between bg-[#13245E] text-white px-6 py-4 rounded-md focus:outline-none"
                >
                  <span className="text-sm md:text-base font-medium text-left">
                    {faq.question}
                  </span>

                  <Plus
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-[#FDECD7] px-6 py-4 text-sm text-gray-700 rounded-b-md">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
