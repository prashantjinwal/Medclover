import WhyPartner from "./Whypartner";
import OurPartners from "../home/OurPartners"

export default function PartnerWithUs (){
     return (
      <>
     <section
      className="
        relative
        w-full
        min-h-[90vh]
        flex
        items-center
        justify-center
        md:justify-end
        px-6
        md:px-16
        bg-white
        md:bg-[url('/images/bookBack.png')]
        md:bg-cover
        md:bg-center
      "
    >
      
      <div className="hidden md:block absolute inset-0 bg-black/50"></div>

      
      <div className="hidden md:block absolute font-labrada left-16 z-10 text-white max-w-xl">
        <h1 className="text-6xl font-semibold text-orange-400">
          Partner with us
        </h1>
        <p className="mt-1 tracking-[0.3em] uppercase text-ms">
          Let’s Build Better Healthcare Together
        </p>
        <p className=" text-xl pt-7">At MedClover, we collaborate with hospitals, clinics, diagnostic centers, pharmacies, and healthcare professionals to deliver accessible, high-quality care. By partnering with us, you become part of a growing healthcare ecosystem focused on trust, innovation, and patient-first outcomes.</p>
      </div>

      
      <div className="relative z-20 w-full max-w-md bg-white/60 rounded-xl shadow-xl p-6 md:p-8">
        <h3 className="text-xl font-semibold text-center mb-6 relative">
          Organization Details
          <div className="flex justify-center mt-4">
            <span className="w-10 sm:w-10 h-[3px] bg-orange-500 rounded-full "></span>
            <span className="w-10 sm:w-18 h-[3px] bg-blue-900 rounded-full"></span>
          </div>
        </h3>

        <form className="space-y-3 text-sm">
          <input
            type="text"
            placeholder="Organisation name"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <input
            type="text"
            placeholder="Type of Services"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <input
            type="text"
            placeholder="Registration / License Number *"
            className="w-full border rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <label>Year of Establishment</label>
          <input
            type="date"
            placeholder="Year of Establishment"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

         

          <div className="flex gap-2 items-start text-xs text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              I authorize MedClover Solutions Pvt. Ltd. to contact me
              through call, SMS, email, or WhatsApp, notwithstanding my
              DNC/NDNC registration
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition"
          >
            Next
          </button>
        </form>
      </div>

   </section>

      <div>
        {/* Why partner */}
        <WhyPartner/>
      </div>
      <div>
        
        <OurPartners/>
      </div>
    </>
     );
}