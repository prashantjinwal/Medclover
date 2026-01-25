import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-orange-50 font-labrada">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm sm:text-xl tracking-widest text-gray-500 uppercase">
            why us
          </p>

          <h2 className="text-3xl sm:text-5xl font-semibold text-orange-500 mt-2">
            Why Choose us ?
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* IMAGE (mobile pe upar) */}
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/doctorshahb.png"
              alt="Doctor"
              width={420}
              height={520}
              className="
                object-contain
                w-[260px]
                sm:w-[340px]
                lg:w-[420px]
              "
              priority
            />
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1 text-gray-700 text-base sm:text-lg lg:text-2xl leading-relaxed text-center lg:text-left">
            <p>
              MedClover Solutions Pvt Ltd is trusted for delivering trained and
              verified caregivers, reliable healthcare support, and a strong
              patient-first approach. We provide flexible home care and staffing
              solutions tailored to individual and institutional needs,
              ensuring comfort, safety, and uninterrupted care. Backed by
              experience and a commitment to quality, we work as a dependable
              healthcare partner for families and organizations alike.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
