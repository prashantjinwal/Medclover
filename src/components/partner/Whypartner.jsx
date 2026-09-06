"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Expand Your Reach",
    description:
      "Connect with more families, patients, and healthcare organizations through a growing care network.",
    icon: "/icons/reach.png",
  },
  {
    title: "Coordinated Support",
    description:
      "Work with a responsive team focused on smoother communication, referrals, and service coordination.",
    icon: "/icons/technology.png",
  },
  {
    title: "Trusted Association",
    description:
      "Align with a healthcare partner committed to transparency, reliability, and high-quality care.",
    icon: "/icons/trust.png",
  },
  {
    title: "Shared Growth",
    description:
      "Build a long-term collaboration designed to create mutual value and stronger patient outcomes.",
    icon: "/icons/growth.png",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-[#f7f9ff] px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            The Medclover advantage
          </p>
          <h2 className="mt-3 font-labrada text-3xl font-semibold text-[#14235C] sm:text-4xl lg:text-5xl">
            Why partner with Medclover?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            We bring together healthcare expertise, dependable coordination,
            and a people-first approach to help every partnership create lasting value.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-xl sm:p-7"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 transition group-hover:bg-orange-100">
                <Image
                  src={feature.icon}
                  alt=""
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-[#14235C]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
