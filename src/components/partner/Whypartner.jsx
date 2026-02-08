import Image from "next/image";

const features = [
  {
    title: "Expand Your Reach",
    description:
      "Connect with a wider patient base through our digital healthcare platform and referral network.",
    icon: "/icons/reach.png",
  },
  {
    title: "Technology-Driven Support",
    description:
      "Benefit from streamlined appointment management, digital records, and efficient coordination.",
    icon: "/icons/technology.png",
  },
  {
    title: "Trusted Brand Association",
    description:
      "Align with a healthcare brand known for transparency, reliability, and quality care.",
    icon: "/icons/trust.png",
  },
  {
    title: "Growth-Oriented Collaboration",
    description:
      "We believe in long-term partnerships that create mutual value and shared success.",
    icon: "/icons/growth.png",
  },
];

export default function WhyPartner() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12">
        Why Partner with <span className="text-black">MedClover?</span>
      </h2>

      {/* Features */}
      <div className="space-y-8 sm:space-y-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              flex
              flex-row
              items-start
              gap-4
              sm:gap-6
            "
          >
            {/* Icon (ALWAYS LEFT) */}
            <div className="flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
