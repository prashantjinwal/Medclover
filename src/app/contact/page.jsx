"use client";
import { useState } from "react";

export default function GetInTouch() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    service: "",
    mobile: "",
    email: "",
    state: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Form Submitted Successfully ✅");

      setFormData({
        firstName: "",
        lastName: "",
        service: "",
        mobile: "",
        email: "",
        state: "",
        message: "",
      });
    } else {
      alert("Error submitting form ❌");
    }
  };

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
              <span className="font-semibold">Address :</span> Mukundpur part - 1 Delhi-110042
            </p>
            <p>
              <span className="font-semibold">Phone :</span> +91 8826228159
            </p>
            <p>
              <span className="font-semibold">Email :</span> medcloversolutions@gmail.com
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

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="input"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="input"
                required
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="Choose the service you need"
                className="input"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="input"
                required
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input"
                required
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="input"
                required
              />
            </div>

            {/* Textarea */}
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your requirement"
              className="input resize-none"
              required
            />

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
              <input type="checkbox" className="mt-1 accent-orange-500" required />
              <p>
                I authorize MedClover Solutions Pvt. Ltd. to contact me through
                call, SMS, email, or WhatsApp.
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full sm:w-fit bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-8 py-2.5 rounded-full shadow-md transition active:scale-95"
            >
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}