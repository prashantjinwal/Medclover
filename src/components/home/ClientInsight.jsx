export default function ClientInsight() {
  return (
    <section className="w-full bg-[#FDECD7] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black font-labrada">
            Client <span className="text-blue-800">Insight</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 max-w-xl mx-auto font-labrada">
            Trusted by clients for our professionalism, reliability, and quality healthcare services.
          </p>

          <div className="flex justify-center mt-4">
            <span className="w-10 sm:w-12 h-[3px] bg-orange-500 rounded-full mr-2"></span>
            <span className="w-10 sm:w-12 h-[3px] bg-blue-900 rounded-full"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Left Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg min-h-[320px] sm:min-h-[360px] flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-black mb-3 sm:mb-4 text-center">
                Consistent service quality builds long-term trust
              </h3>

              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Clients appreciate MedClover for delivering well-trained and experienced
                caregivers who maintain professionalism and compassion in their work.
                The ability to provide dependable staff on a regular basis helps ensure
                continuous patient care and long-term reliability.
              </p>
            </div>

            <p className="mt-5 text-sm font-medium text-center">
              – Hospital Administrator
            </p>
          </div>

          {/* Center Card */}
          <div className="bg-[#13245E] rounded-2xl p-6 sm:p-8 shadow-xl text-white min-h-[320px] sm:min-h-[360px] flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-center">
                Good communication reduce anxiety
              </h3>

              <p className="text-sm text-blue-100 text-center leading-relaxed">
                Hospital administrators value MedClover for its clear, timely, and
                professional communication. Regular updates about staff availability,
                shift scheduling, and replacements help avoid operational disruptions.
              </p>
            </div>

            <p className="mt-5 text-sm font-medium text-center">
              – Operation manager
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg min-h-[320px] sm:min-h-[360px] flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-black mb-3 sm:mb-4 text-center">
                Trained caregivers improve patient comfort and recovery
              </h3>

              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Clients value MedClover for assigning skilled and compassionate caregivers
                who understand patient needs and follow care routines carefully.
                This level of expertise helps improve patient comfort, safety, and
                overall recovery experience.
              </p>
            </div>

            <p className="mt-5 text-sm font-medium text-center">
              – Home Care Client
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
