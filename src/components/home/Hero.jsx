"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[70vh] items-center">


        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center text-center md:text-left py-20 md:py-25"
        >

          {/* Top label */}
          <motion.div
            variants={item}
            className="flex items-center font-labrada justify-center md:justify-start gap-3 mb-1"
          >
            <span className="h-[3px] w-8 bg-orange-500" />
            <h2 className="text-lg md:text-xl font-semibold tracking-wide">
              <span className="text-blue-900">With Med</span>
              <span className="text-orange-500">clover</span>
            </h2>
            <span className="h-[3px] w-8 bg-blue-900" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-3xl font-labrada sm:text-6xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Comfort your home <br />
            <span className="text-orange-500">with Medclover</span>
          </motion.h1>

          {/* Paragraphs */}
          <motion.p
            variants={item}
            className="mt-6 font-labrada text-gray-600 text-base sm:text-lg max-w-xl mx-auto md:mx-0"
          >
            Medclover Medical delivers trusted healthcare in the comfort of your home.
            We provide compassionate, primary care that fits your lifestyle.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 font-labrada text-gray-600 text-base sm:text-lg"
          >
            Affordable. Accessible. Always patient-focused.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="mt-10"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-blue-800 transition shadow-lg"
              >
                Book Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>


        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="show"
          className="md:flex items-end justify-center md:justify-end hidden"
        >
          <Image
            src="/images/Hero.png"
            alt="Healthcare at Home"
            width={1200}
            height={1200}
            priority
            className="hidden md:flex items-end justify-center md:justify-end"
          />
        </motion.div>

      </div>
    </section>
  );
}
