import Image from "next/image";

const partners = [
  { src: "/images/partnerlogo/logo1.png", alt: "Apollo Hospitals" },
  { src: "/images/partnerlogo/logo1.png", alt: "Portea Health Care" },
  { src: "/images/partnerlogo/logo1.png", alt: "Blessings 360" },
  { src: "/images/partnerlogo/logo1.png", alt: "Epoch Care" },
  { src: "/images/partnerlogo/logo1.png", alt: "Sarvodaya Healthcare" },
  { src: "/images/partnerlogo/logo1.png", alt: "Housepital" },
];

export default function OurPartners() {
  return (
    <section className="w-full bg-white py-26 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}<div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold font-labrada ">
            <span className="text-orange-500">Our</span>{" "}
            <span className="text-black">Partners</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-xl md:text-base py-3 ">
            We collaborate with hospitals and care providers to deliver skilled caregivers,
            dependable staffing, and quality care—ensuring comfort, safety, and continuity
            for every patient.
          </p>
        </div>

        
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-10 min-w-[140px] md:min-w-[180px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={90}
                  height={90}
                  className="object-contain "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
