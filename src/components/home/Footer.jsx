export default function Footer() {
  return (
    <footer className="bg-[#162A63] text-gray-200 pt-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              About us
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-orange-400"></span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Our team</li>
              <li>careers</li>
              <li>partner with us</li>
              <li>contact us</li>
              <li>FAQs</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-orange-400"></span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Our Partners</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Our services
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-orange-400"></span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home care</li>
              <li>Training & Certification Programs</li>
              <li>Mother & Child Care</li>
              <li>Placement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-orange-400"></span>
            </h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <span className="font-medium">Address :</span> Mukundpur part - 1 Delhi - 110042
              </p>
              <p>
                <span className="font-medium">Phone :</span> +91 8826228159
              </p>
              <p>
                <span className="font-medium">Email :</span> medcloversolutions@gmail.com
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-orange-400 mt-12"></div>

        {/* Bottom Section */}
        <div className="py-6 text-sm text-gray-300 flex flex-col md:flex-row md:justify-between gap-4">
          <p>
            Privacy Policy | Terms and Conditions | patient Right & Responsibilities
          </p>
          <p>
            Copyright © 2025 MedClover Solutions Pvt. Ltd. <br className="md:hidden" />
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
