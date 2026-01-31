"use client";
import Card from "../home/Cardfunc"

export default function BookAppointmentHero() {
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
          Home Care Services
        </h1>
        <p className="mt-2 tracking-[0.3em] uppercase text-ms">
          We provide
        </p>
      </div>

      
      <div className="relative z-20 w-full max-w-md bg-white rounded-xl shadow-xl p-6 md:p-8">
        <h3 className="text-xl font-semibold text-center mb-6 relative">
          Book Appointment
          <div className="flex justify-center mt-4">
            <span className="w-10 sm:w-10 h-[3px] bg-orange-500 rounded-full "></span>
            <span className="w-10 sm:w-18 h-[3px] bg-blue-900 rounded-full"></span>
          </div>
        </h3>

        <form className="space-y-3 text-sm">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <input
            type="date"
            className="w-full border rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <select className="w-full border rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400">
            <option>Select Services</option>
            <option>Home Care</option>
            <option>Nursing Assistance</option>
            <option>Mother & Child Care</option>
          </select>

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
            Book an Appointment
          </button>
        </form>
      </div>
   
    </section>
       {/*card  */}
      <div className="py-20 md:px-15 px-5">
        <Card/>

      </div>
    </>
  );
}
