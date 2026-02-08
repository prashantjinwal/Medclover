"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import services from "./services.js";

export default function CardCarousel() {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();

  const interval = 4000;
  const total = services.length;
  const cardWidth = 320;

  const isMounted = useRef(false);


  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current]);

 
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    controls.set({ width: 0 });
    controls.start({
      width: "100%",
      transition: {
        duration: interval / 1000,
        ease: "linear",
      },
    });
  }, [current, controls]);

  
  return (
    <div className="relative overflow-hidden py-14">

      
      <motion.div
        className="flex gap-8"
        animate={{ x: -current * cardWidth }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative min-w-[300px] flex-shrink-0"
          >
            
            <div className="bg-[#FFF1E3] rounded-2xl  py-5 flex justify-center min-h-[300px]">
              <Image
                src={service.image}
                alt={service.title}
                width={220}
                height={180}
                className="object-contain"
              />
            </div>

            
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-32px] bg-[#14235C] w-[90%] rounded-2xl text-center py-6 shadow-lg">
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug px-1">
                {service.title}
              </h3>
              <button className="bg-orange-500 text-white text-sm px-5 py-1.5 rounded-full hover:bg-orange-600 transition">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-1 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-orange-500"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>

      {/* COUNTER */}
      <div className="absolute bottom-6 right-6 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
        {current + 1} / {total}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
      >
        <ChevronLeft size={18} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
