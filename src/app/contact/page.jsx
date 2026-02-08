"use client";

export default function GetInTouch() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* LEFT SECTION */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#14235C] mb-2">
            Have any Question ?
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold text-orange-500 tracking-wide mb-6">
            GET IN TOUCH
          </h3>

          <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
            <p>
              <span className="font-semibold">Address :</span> Mukundpur part - 1
              Delhi-110042
            </p>
            <p>
              <span className="font-semibold">Phone :</span> +91 8826228159
            </p>
            <p>
              <span className="font-semibold">Email :</span>{" "}
              medcloversolutions@gmail.com
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-xl shadow-lg border p-5 sm:p-8">
          <h3 className="text-base sm:text-lg font-semibold text-orange-500 mb-1">
            Request Callback
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            Please enter your details below and a MedClover representative will
            get in touch with you shortly.
          </p>

          <form className="space-y-4">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Choose the service you need"
                className="input"
              />
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="input"
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
              />
              <input
                type="text"
                placeholder="Enter state"
                className="input"
              />
            </div>

            {/* Textarea */}
            <textarea
              rows={4}
              placeholder="Briefly describe your requirement"
              className="input resize-none"
            />

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
              <input type="checkbox" className="mt-1 accent-orange-500" />
              <p>
                I authorize MedClover Solutions Pvt. Ltd. to contact me through
                call, SMS, email, or WhatsApp, notwithstanding my DNC/NDNC
                registration
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full sm:w-fit
                bg-orange-500 
                hover:bg-orange-600
                text-white 
                text-sm 
                font-medium
                px-8 
                py-2.5 
                rounded-full
                shadow-md
                transition
                active:scale-95
              "
            >
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
