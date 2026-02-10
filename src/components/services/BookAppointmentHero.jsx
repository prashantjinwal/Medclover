"use client";

import Card from "../home/Cardfunc2";
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

export default function BookAppointmentHero() {
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
            Home Care Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-2 tracking-[0.3em] uppercase text-sm"
          >
            We provide
          </motion.p>
        </motion.div>

        
        <motion.div
          variants={fadeScale}
          initial="hidden"
          animate="show"
          className="relative z-20 w-full max-w-md bg-white rounded-xl shadow-xl p-6 md:p-8"
        >
          <motion.h3
            variants={fadeUp}
            className="text-xl font-semibold text-center mb-6"
          >
            Book Appointment
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
              "First Name",
              "Last Name",
              "Phone number",
              "City",
            ].map((placeholder, i) => (
              <motion.input
                key={i}
                variants={fadeUp}
                type="text"
                placeholder={placeholder}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            ))}

            <motion.input
              variants={fadeUp}
              type="date"
              className="w-full border rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
            />

            <motion.select
              variants={fadeUp}
              className="w-full border rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
            >
              <option>Select Services</option>
              <option>Home Care</option>
              <option>Nursing Assistance</option>
              <option>Mother & Child Care</option>
            </motion.select>

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
              Book an Appointment
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      
      <section className="py-10 md:px-16 px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-labrada opacity-80 text-black font-semibold text-center"
        >
          what we do
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-labrada text-black font-semibold text-center mb-8"
        >
          Our Services
          <div className="flex justify-center mt-4">
            <span className="w-10 sm:w-12 h-[3px] bg-orange-500 rounded-full mr-2"></span>
            <span className="w-10 sm:w-12 h-[3px] bg-blue-900 rounded-full"></span>
          </div>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card />
        </motion.div>
      </section>
    </>
  );
}
