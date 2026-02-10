"use client";

import WhyPartner from "./Whypartner";
import OurPartners from "../home/OurPartners";
import { motion } from "framer-motion";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PartnerWithUs() {
  return (
    <>
      <section
        className="
          relative
          w-full
          min-h-[90vh]
          flex
          items-center
          justify-center
          md:justify-end
          px-6
          md:px-16
          bg-white
          md:bg-[url('/images/bookBack.png')]
          md:bg-cover
          md:bg-center
        "
      >
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block absolute inset-0 bg-black/50"
        />

        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:block absolute font-labrada left-16 z-10 text-white max-w-xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-6xl font-semibold text-orange-400"
          >
            Partner with us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-1 tracking-[0.3em] uppercase text-sm"
          >
            Let’s Build Better Healthcare Together
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-xl pt-7"
          >
            At MedClover, we collaborate with hospitals, clinics, diagnostic
            centers, pharmacies, and healthcare professionals to deliver
            accessible, high-quality care. By partnering with us, you become
            part of a growing healthcare ecosystem focused on trust,
            innovation, and patient-first outcomes.
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          animate="show"
          className="relative z-20 w-full max-w-md bg-white/60 rounded-xl shadow-xl p-6 md:p-8"
        >
          <motion.h3
            variants={fadeUp}
            className="text-xl font-semibold text-center mb-6"
          >
            Organization Details
            <div className="flex justify-center mt-4">
              <span className="w-10 h-[3px] bg-orange-500 rounded-full"></span>
              <span className="w-10 h-[3px] bg-blue-900 rounded-full"></span>
            </div>
          </motion.h3>

          <motion.form
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-3 text-sm"
          >
            {[
              "Organisation name",
              "Type of Services",
              "Phone number",
              "Registration / License Number *",
              "Email Address",
            ].map((placeholder, i) => (
              <motion.input
                key={i}
                variants={fadeUp}
                type="text"
                placeholder={placeholder}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            ))}

            <motion.label variants={fadeUp}>
              Year of Establishment
            </motion.label>

            <motion.input
              variants={fadeUp}
              type="date"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
            />

            <motion.div
              variants={fadeUp}
              className="flex gap-2 items-start text-xs text-gray-600"
            >
              <input type="checkbox" className="mt-1" />
              <p>
                I authorize MedClover Solutions Pvt. Ltd. to contact me
                through call, SMS, email, or WhatsApp, notwithstanding my
                DNC/NDNC registration
              </p>
            </motion.div>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Next
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <WhyPartner />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <OurPartners />
      </motion.div>
    </>
  );
}
