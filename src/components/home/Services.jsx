import Image from "next/image";

const services = [
  { title: "Hospital Staff Support", image: "/images/card1.png" },
  { title: "Home Health & Elderly Care", image: "/images/card1.png" },
  { title: "Critical & Specialized Nursing", image: "/images/card1.png" },
  { title: "Training & Skill Development", image: "/images/card1.png" },
  { title: "Placement & Staffing Consultation", image: "/images/card1.png" },
];

export default function Services() {
  return (
    <section className="pb-26 pt-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-labrada opacity-80 text-black font-semibold text-center">
          what we do
        </h2>

        <h2 className="text-4xl font-labrada text-black font-semibold text-center mb-12  ">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="relative">

              {/* ORANGE BASE */}
              <div className="bg-[#FFF1E3] rounded-2xl pt-10 pb-5  flex justify-center m-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={220}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* BLUE OVERLAP (PARTLY OUTSIDE ORANGE) */}
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  bottom-[-32px]
                  bg-[#14235C]
                  w-[78%]
                  rounded-2xl
                  text-center
                  py-6
                  shadow-lg
                "
              >
                <h3 className="text-white font-semibold text-lg mb-4 leading-snug">
                  {service.title}
                </h3>

                <button className="bg-orange-500 text-white text-sm px-5 py-1.5 rounded-full hover:bg-orange-600 ">
                  Book Now
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
