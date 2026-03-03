"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}+</span>;
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Floating Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-white via-orange-50 to-blue-50 py-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-labrada">
            About <span className="text-orange-500">MedClover</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            MedClover Solutions Pvt. Ltd. is a trusted healthcare support and
            home care service provider committed to delivering reliable,
            compassionate, and quality care. We work closely with hospitals,
            families, and care facilities to ensure professional and dependable
            healthcare staffing and patient services.
          </p>
        </motion.div>
      </div>

      {/* IMAGE + TEXT SECTION */}
      <div className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="Healthcare"
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">
              Compassion Meets Professionalism
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              With a strong focus on patient comfort, safety, and dignity,
              MedClover ensures that every service is delivered with
              responsibility and care excellence.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-orange-50 p-6 rounded-2xl text-center shadow-md">
                <h4 className="text-3xl font-bold text-orange-500">
                  <Counter end={500} />
                </h4>
                <p className="text-sm mt-2">Patients Served</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl text-center shadow-md">
                <h4 className="text-3xl font-bold text-blue-600">
                  <Counter end={120} />
                </h4>
                <p className="text-sm mt-2">Healthcare Staff</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* WHAT WE DO - CARDS */}
      <div className="py-28 bg-gradient-to-br from-[#162A63] to-[#0f1b40] text-white">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-center mb-16 font-labrada"
          >
            What We Do
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Home Care & Patient Support",
              "Nursing & Caregiver Services",
              "Mother & Child Care",
              "Healthcare Staffing Solutions",
              "Training & Certification",
              "Institutional Care Programs",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition"
              >
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* VISION + MISSION */}
      <div className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-orange-500 text-white p-12 rounded-3xl shadow-xl"
          >
            <h4 className="text-2xl font-semibold mb-4">Our Vision</h4>
            <p>
              To be a leading healthcare partner recognized for professionalism,
              compassion, and service excellence.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#162A63] text-white p-12 rounded-3xl shadow-xl"
          >
            <h4 className="text-2xl font-semibold mb-4">Our Mission</h4>
            <p>
              To deliver accessible, dependable, and quality healthcare support
              that improves lives and strengthens care environments.
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}