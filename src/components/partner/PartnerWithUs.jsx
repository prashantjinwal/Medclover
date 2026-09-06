"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FlaskConical,
  Handshake,
  HeartPulse,
  Hospital,
  Stethoscope,
} from "lucide-react";
import WhyPartner from "./Whypartner";
import OurPartners from "../home/OurPartners";

const partnerTypes = [
  { icon: Hospital, label: "Hospitals & Clinics" },
  { icon: FlaskConical, label: "Diagnostic Centers" },
  { icon: HeartPulse, label: "Care Providers" },
  { icon: Stethoscope, label: "Health Professionals" },
];

const steps = [
  {
    number: "01",
    title: "Share your interest",
    description: "Tell us about your organization and the partnership you have in mind.",
  },
  {
    number: "02",
    title: "Explore the fit",
    description: "Our team connects with you to understand goals, capabilities, and opportunities.",
  },
  {
    number: "03",
    title: "Build together",
    description: "We shape a practical collaboration focused on quality care and shared growth.",
  },
];

export default function PartnerWithUs() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section id="partner-form" className="relative isolate overflow-hidden bg-[#0f1b40] px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-20 bg-[url('/images/bookBack.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f1b40]/95 via-[#162A63]/94 to-[#162A63]/80" />
        <div className="absolute -left-28 top-10 -z-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-36 right-0 -z-10 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-sm">
              <Handshake size={16} aria-hidden="true" />
              Partnerships that strengthen care
            </div>
            <h1 className="mt-6 max-w-2xl font-labrada text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Let’s build better healthcare
              <span className="block text-orange-400">together.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/85 sm:text-lg">
              Join Medclover’s growing care network and help make trusted,
              professional healthcare support more accessible to the people who need it.
            </p>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {[
                "Long-term collaboration",
                "Patient-first approach",
                "Transparent coordination",
                "Shared growth opportunities",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5 text-sm text-white/90">
                  <CheckCircle2 className="shrink-0 text-orange-400" size={18} aria-hidden="true" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="rounded-3xl border border-white/20 bg-white p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-8"
          >
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={34} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-labrada text-3xl font-semibold text-[#14235C]">
                  Thank you for your interest
                </h2>
                <p className="mt-3 max-w-sm leading-7 text-gray-600">
                  Your details have been reviewed locally. Online partnership submissions will be available after backend integration.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-orange-200 px-6 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
                >
                  Back to the form
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Start a conversation
                  </p>
                  <h2 className="mt-2 font-labrada text-2xl font-semibold text-[#14235C] sm:text-3xl">
                    Organization details
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Tell us a little about your organization and our team will explore the opportunity with you.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="organizationName" className="mb-1.5 block text-sm font-medium text-gray-800">
                      Organization Name <span className="text-orange-500">*</span>
                    </label>
                    <input id="organizationName" name="organizationName" type="text" required placeholder="Enter organization name" className="input" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="partnerType" className="mb-1.5 block text-sm font-medium text-gray-800">
                        Organization Type <span className="text-orange-500">*</span>
                      </label>
                      <select id="partnerType" name="partnerType" required className="input">
                        <option value="">Select type</option>
                        <option>Hospital / Clinic</option>
                        <option>Diagnostic Center</option>
                        <option>Pharmacy</option>
                        <option>Care Provider</option>
                        <option>Healthcare Professional</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contactPerson" className="mb-1.5 block text-sm font-medium text-gray-800">
                        Contact Person <span className="text-orange-500">*</span>
                      </label>
                      <input id="contactPerson" name="contactPerson" type="text" required placeholder="Enter full name" className="input" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="partnerPhone" className="mb-1.5 block text-sm font-medium text-gray-800">
                        Phone Number <span className="text-orange-500">*</span>
                      </label>
                      <input id="partnerPhone" name="partnerPhone" type="tel" inputMode="tel" required placeholder="+91 98765 43210" className="input" />
                    </div>
                    <div>
                      <label htmlFor="partnerEmail" className="mb-1.5 block text-sm font-medium text-gray-800">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input id="partnerEmail" name="partnerEmail" type="email" required placeholder="Enter email address" className="input" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="licenseNumber" className="mb-1.5 block text-sm font-medium text-gray-800">
                        Registration / License No.
                      </label>
                      <input id="licenseNumber" name="licenseNumber" type="text" placeholder="Enter license number" className="input" />
                    </div>
                    <div>
                      <label htmlFor="establishedYear" className="mb-1.5 block text-sm font-medium text-gray-800">
                        Year Established
                      </label>
                      <input id="establishedYear" name="establishedYear" type="number" min="1900" max={new Date().getFullYear()} placeholder="e.g. 2018" className="input" />
                    </div>
                  </div>

                  <label className="flex items-start gap-3 pt-1 text-xs leading-5 text-gray-600">
                    <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-orange-500" />
                    <span>
                      I authorize Medclover Solutions Pvt. Ltd. to contact me through call, SMS, email, or WhatsApp.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 active:scale-[0.99]"
                  >
                    Submit partnership interest
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <WhyPartner />

      <section className="bg-white px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Who we collaborate with
              </p>
              <h2 className="mt-3 max-w-2xl font-labrada text-3xl font-semibold text-[#14235C] sm:text-4xl lg:text-5xl">
                One network, many ways to improve care
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-gray-600 lg:justify-self-end">
              From clinical organizations to independent professionals, we welcome partners who share our commitment to accessible, dependable healthcare.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_14px_40px_rgba(20,35,92,0.08)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#162A63]">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <p className="font-semibold text-[#14235C]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#162A63] to-[#0f1b40] px-5 py-20 text-white sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              A simple path forward
            </p>
            <h2 className="mt-3 font-labrada text-3xl font-semibold sm:text-4xl">
              From first conversation to shared impact
            </h2>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden border-t border-dashed border-white/25 md:block" />
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm"
              >
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#162A63] bg-orange-500 font-labrada text-lg font-bold text-white shadow-lg">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/80">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <OurPartners />

      <section className="px-5 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-orange-50 px-7 py-10 text-center sm:px-10 md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white sm:flex">
              <Building2 size={27} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-labrada text-2xl font-semibold text-[#14235C] sm:text-3xl">
                Ready to grow together?
              </h2>
              <p className="mt-1 text-sm text-gray-600">Share your organization details and start the conversation.</p>
            </div>
          </div>
          <a
            href="#partner-form"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#162A63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0f1b40]"
          >
            Become a partner
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
