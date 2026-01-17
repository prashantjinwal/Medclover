import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-orange-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Image / Illustration */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px]">
            <Image
              src="/images/hero.png"
              alt="Healthcare at Home"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Comfort your home <br />
            <span className="text-orange-500">with Medclover</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
            Medclover Medical delivers trusted healthcare in the comfort of your home.
            We provide compassionate, primary care that fits your lifestyle.
          </p>

          <p className="mt-3 text-gray-600 text-lg">
            Affordable. Accessible. Always patient-focused.
          </p>

          <div className="mt-8">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-800 transition shadow-lg">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
