"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import services from "./services.js";
import Link from "next/link.js";

export default function CardCarousel() {
  const containerRef = useRef(null);
  const controls = useAnimation();

  const interval = 4000;
  const total = services.length;

  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  
  useEffect(() => {
    const updateSizes = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const singleCardWidth = 332; 

      setCardWidth(singleCardWidth);
      setVisibleCards(Math.floor(containerWidth / singleCardWidth));
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const maxIndex = Math.max(total - visibleCards, 0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [maxIndex]);


  useEffect(() => {
    controls.set({ width: 0 });
    controls.start({
      width: "100%",
      transition: { duration: interval / 1000, ease: "linear" },
    });
  }, [current, controls]);


  const nextSlide = () => {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden py-14">

      <motion.div
        className="flex gap-8"
        animate={{ x: -(current * cardWidth) }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        {services.map((service, index) => (
          <div key={index} className="min-w-[300px] relative flex-shrink-0">

            <div className="bg-[#FFF1E3] rounded-2xl py-6 flex justify-center min-h-[300px]">
              <Image
                src={service.image}
                alt={service.title}
                width={220}
                height={180}
                className="object-contain"
              />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-32px] bg-[#14235C] w-[90%] rounded-2xl text-center py-6 shadow-lg">
              <h3 className="text-white font-semibold text-lg mb-4">
                {service.title}
              </h3>
              <Link key="contact" href="/contact" >
              <button className="bg-orange-500 text-white text-sm px-5 py-1.5 rounded-full hover:bg-orange-600 transition">
                Book Now
              </button>
              </Link>
            </div>

          </div>
        ))}
      </motion.div>

      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-1 bg-gray-300 rounded-full overflow-hidden">
        <motion.div className="h-full bg-orange-500" animate={controls} />
      </div>

      
      <div className="absolute bottom-6 right-6 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
        {current + 1} / {maxIndex + 1}
      </div>

      
      <button
        onClick={prevSlide}
        disabled={current === 0}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={nextSlide}
        disabled={current === maxIndex}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
