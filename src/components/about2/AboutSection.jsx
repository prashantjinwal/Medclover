export default function AboutSection() {
  return (
    <section className="w-full">

      {/* ABOUT US */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-lan font-medium mb-6 font-labrada">
          About <span className="text-orange-500">us</span> 
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-4xl mx-auto">
          MedClover Solutions Pvt. Ltd. is a trusted healthcare support and home
          care service provider committed to delivering reliable, compassionate,
          and quality care. We work closely with hospitals, care facilities, and
          families to provide trained caregivers and healthcare staffing
          solutions that meet real-world care needs. With a strong focus on
          patient comfort, safety, and dignity, MedClover ensures that every
          service is delivered with professionalism and responsibility. Our
          team understands the importance of dependable care, especially in
          healthcare environments where continuity and trust matter the most.
        </p>
      </div>

      {/* WHAT WE DO */}
      <div className="bg-[#FDECD8]">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h3 className="text-xl md:text-2xl font-medium mb-4">
            What We Do
          </h3>

          <p className="text-sm md:text-base mb-4">
            We specialize in:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-800">
            <li>Home care and patient support services</li>
            <li>Trained caregivers and nursing assistance</li>
            <li>Mother & child care services</li>
            <li>Healthcare staffing and placement solutions</li>
            <li>Training and certification programs</li>
          </ul>

          <p className="text-sm md:text-base mt-5 text-gray-700">
            Each service is designed to support both individuals and
            institutions with flexible, practical, and quality-driven care
            solutions.
          </p>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-center gap-8">

          {/* Vision */}
          <div className="bg-[#fe9606] text-white rounded-xl w-full md:w-[280px] p-8 text-center shadow-md">
            <h4 className="text-lg font-semibold mb-4 tracking-wide">
              OUR VISION
            </h4>
            <p className="text-sm leading-relaxed">
              To be a leading healthcare partner known for professionalism,
              compassion, and service excellence.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#162A63] text-white rounded-xl w-full md:w-[280px] p-8 text-center shadow-md">
            <h4 className="text-lg font-semibold mb-4 tracking-wide">
              OUR MISSION
            </h4>
            <p className="text-sm leading-relaxed">
              To deliver accessible, dependable, and quality healthcare
              support that improves lives and strengthens care environments.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
