"use client";

import Image from "next/image";
import services from "./services.js";

export default function CardGrid() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto ">
      
      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-10
          
        "
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative py-5"
          >
            {/* IMAGE CARD */}
            <div className="bg-[#FFF1E3] rounded-2xl pt-10 pb-16 flex justify-center min-h-[300px]">
              <Image
                src={service.image}
                alt={service.title}
                width={220}
                height={180}
                className="object-contain"
              />
            </div>

            {/* INFO CARD */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-32px] bg-[#14235C] w-[90%] rounded-2xl text-center py-6 shadow-lg">
              <h3 className="text-white font-semibold text-lg mb-4 leading-snug px-2">
                {service.title}
              </h3>
              <button className="bg-orange-500 text-white text-sm px-5 py-1.5 rounded-full hover:bg-orange-600 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
