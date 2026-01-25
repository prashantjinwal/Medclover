import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[85vh] items-center">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center md:text-left font-labrada py-20 md:py-28">
          
          {/* Top Label */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
            <span className="h-[3px] w-8 bg-orange-500" />

            <h2 className="text-lg md:text-xl font-semibold tracking-wide">
              <span className="text-blue-900">With Med</span>
              <span className="text-orange-500">clover</span>
            </h2>

            <span className="h-[3px] w-8 bg-blue-900" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-6xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Comfort your home <br />
            <span className="text-orange-500">with Medclover</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Medclover Medical delivers trusted healthcare in the comfort of your home.
            We provide compassionate, primary care that fits your lifestyle.
          </p>

          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Affordable. Accessible. Always patient-focused.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <button className="bg-blue-900 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-blue-800 transition shadow-lg">
              Book Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-end justify-center md:justify-end">
          <Image
            src="/images/Hero.png"
            alt="Healthcare at Home"
            width={1200}
            height={1200}
            priority
            className="object-contain max-w-full md:max-w-[120%] md:translate-y-6"
          />
        </div>

      </div>
    </section>
  );
}
