"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Target,
  UsersRound,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const carePrinciples = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Every interaction is guided by empathy, dignity, and respect for the people and families we serve.",
  },
  {
    icon: BadgeCheck,
    title: "Skilled Professionals",
    description:
      "We connect families and institutions with dependable, trained healthcare and caregiving professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description:
      "Our focus on quality, responsibility, and clear communication helps make care feel reassuring and consistent.",
  },
];

const services = [
  "Home care and patient support",
  "Nursing and caregiver services",
  "Mother and child care",
  "Healthcare staffing solutions",
  "Training and certification",
  "Institutional care programs",
];

export default function AboutSection() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate flex min-h-[500px] items-center bg-[url('/images/bookBack.png')] bg-cover bg-center px-5 py-20 sm:min-h-[560px] sm:px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f1b40]/95 via-[#162A63]/88 to-[#162A63]/55" />
        <div className="absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto w-full max-w-7xl"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
              <span className="h-[2px] w-9 bg-orange-400" aria-hidden="true" />
              About Medclover
            </div>
            <h1 className="max-w-3xl font-labrada text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Better care begins with
              <span className="block text-orange-400">trust and compassion.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50/90 sm:text-lg">
              Medclover brings dependable healthcare support closer to home,
              helping families and care institutions find trained professionals
              who put people first.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#162A63]"
              >
                Explore our services
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#162A63]"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative px-5 py-20 sm:px-6 sm:py-24">
        <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Who we are
            </p>
            <h2 className="mt-3 max-w-2xl font-labrada text-3xl font-semibold leading-tight text-[#14235C] sm:text-4xl lg:text-5xl">
              Professional care with a genuinely human touch
            </h2>
            <div className="mt-5 flex" aria-hidden="true">
              <span className="h-[3px] w-12 rounded-full bg-orange-500" />
              <span className="h-[3px] w-12 rounded-full bg-blue-900" />
            </div>
            <p className="mt-7 text-base leading-7 text-gray-600">
              Medclover Solutions Pvt. Ltd. is a healthcare support and home
              care service provider committed to making professional assistance
              more accessible, dependable, and personal.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We work closely with hospitals, families, and care facilities to
              support patient comfort, safety, and dignity—whether the need is
              at home or within an institution.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <p className="font-labrada text-3xl font-bold text-orange-500">500+</p>
                <p className="mt-1 text-sm font-medium text-gray-700">Patients served</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="font-labrada text-3xl font-bold text-[#162A63]">120+</p>
                <p className="mt-1 text-sm font-medium text-gray-700">Healthcare staff</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-orange-200/70 blur-2xl" />
            <div className="absolute -right-8 bottom-16 h-40 w-40 rounded-full bg-blue-200/80 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 pt-8 shadow-[0_24px_70px_rgba(20,35,92,0.16)] sm:px-10">
              <div className="absolute left-7 top-7 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#162A63] shadow-md">
                Care you can count on
              </div>
              <Image
                src="/images/doctor.png"
                alt="Medclover healthcare professional"
                width={531}
                height={665}
                className="relative mx-auto mt-8 h-auto max-h-[500px] w-auto object-contain"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:left-auto sm:right-6 sm:max-w-[260px]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Stethoscope size={22} aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-5 text-[#14235C]">
                Quality support for every stage of care
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f9ff] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our approach
            </p>
            <h2 className="mt-3 font-labrada text-3xl font-semibold text-[#14235C] sm:text-4xl">
              Care built around people
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Our work is shaped by three principles that keep every service
              professional, responsive, and personal.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {carePrinciples.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={25} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-[#14235C]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-[#162A63] p-8 text-white shadow-xl sm:p-10"
            >
              <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border-[28px] border-white/5" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-400">
                <Target size={25} aria-hidden="true" />
              </span>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Our vision</p>
              <h2 className="mt-3 font-labrada text-3xl font-semibold leading-tight">
                A trusted partner in better healthcare
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-blue-100/90">
                To be recognized for professionalism, compassion, and service
                excellence—making dependable care easier to reach.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-orange-500 p-8 text-white shadow-xl sm:p-10"
            >
              <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full border-[28px] border-white/10" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <UsersRound size={25} aria-hidden="true" />
              </span>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Our mission</p>
              <h2 className="mt-3 font-labrada text-3xl font-semibold leading-tight">
                Support that improves everyday lives
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/90">
                To deliver accessible, responsible, and quality healthcare
                support that strengthens families and care environments.
              </p>
            </motion.article>
          </div>

          <div className="mt-16 grid items-start gap-10 rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_20px_60px_rgba(20,35,92,0.08)] sm:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">What we do</p>
              <h2 className="mt-3 font-labrada text-3xl font-semibold text-[#14235C] sm:text-4xl">
                Complete care support, thoughtfully delivered
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 rounded-xl bg-[#f7f9ff] px-4 py-3.5 text-sm font-medium text-gray-700">
                  <BadgeCheck className="shrink-0 text-orange-500" size={19} aria-hidden="true" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f1b40] to-[#162A63] px-6 py-12 text-center text-white shadow-xl sm:px-10 sm:py-14"
        >
          <div className="absolute -left-14 -top-14 h-44 w-44 rounded-full bg-orange-500/15 blur-2xl" />
          <div className="absolute -bottom-20 right-0 h-52 w-52 rounded-full bg-blue-400/15 blur-2xl" />
          <div className="relative">
            <h2 className="font-labrada text-3xl font-semibold sm:text-4xl">
              Let’s make quality care easier to access
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100/85">
              Tell us what kind of support you need, and a Medclover representative will help you take the next step.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#162A63]"
            >
              Contact Medclover
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
