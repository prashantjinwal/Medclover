"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
];

const registrationLinks = [
  { name: "Job Registration", href: "/registration" },
  { name: "Institute Registration", href: "/institute-registration" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const pathname = usePathname();
  const isRegistrationPage = registrationLinks.some(
    (link) => pathname === link.href,
  );

  return (
    <div >
      {/* Top Bar */}
      <div className="bg-[#132158] text-white text-sm px-6 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          
          <div className="flex gap-4">
            <p  >+91 88262 28159</p>
            <p className=" hidden md:block "> | </p>
            <p className=" hidden md:block " >medcloversolutions@gmail.com</p>
          </div>

          
          <div className="flex items-center gap-3">
            <span className="hidden md:block">Follow us</span>
            <Twitter className="w-4 h-4 cursor-pointer hover:text-orange-400" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-orange-400" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-orange-400" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-orange-400" />
          </div>

        </div>
      </div>

      
      <nav className="w-full bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={150}
            height={150}
            priority
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition ${
                  pathname === link.href
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 font-medium transition ${
                  isRegistrationPage
                    ? "text-orange-500"
                    : "text-gray-700 group-hover:text-orange-500 group-focus-within:text-orange-500"
                }`}
                aria-haspopup="menu"
                aria-label="Registration options"
              >
                Registration
                <ChevronDown
                  size={17}
                  className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                />
              </button>

              <div className="invisible absolute left-0 top-full z-50 min-w-56 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div
                  className="overflow-hidden rounded-lg border border-gray-100 bg-white py-2 shadow-lg"
                  role="menu"
                >
                  {registrationLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      role="menuitem"
                      className={`block whitespace-nowrap px-4 py-2.5 font-medium transition hover:bg-orange-50 hover:text-orange-500 ${
                        pathname === link.href
                          ? "bg-orange-50 text-orange-500"
                          : "text-gray-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/Partner"
              className={`font-medium transition ${
                pathname === "/Partner"
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Partner with us
            </Link>
          <Link key="contact" href="/contact">
            <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              <Phone size={18} />
              Contact Us
            </button>
          </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block font-medium ${
                  pathname === link.href
                    ? "text-orange-500"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div>
              <button
                type="button"
                onClick={() => setRegistrationOpen(!registrationOpen)}
                className={`flex w-full items-center justify-between font-medium ${
                  isRegistrationPage ? "text-orange-500" : "text-gray-700"
                }`}
                aria-expanded={registrationOpen}
                aria-controls="mobile-registration-menu"
              >
                Registration
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    registrationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {registrationOpen && (
                <div
                  id="mobile-registration-menu"
                  className="mt-3 space-y-1 border-l-2 border-orange-100 pl-4"
                >
                  {registrationLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setOpen(false);
                        setRegistrationOpen(false);
                      }}
                      className={`block rounded-md px-2 py-2 font-medium ${
                        pathname === link.href
                          ? "bg-orange-50 text-orange-500"
                          : "text-gray-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/Partner"
              onClick={() => setOpen(false)}
              className={`block font-medium ${
                pathname === "/Partner" ? "text-orange-500" : "text-gray-700"
              }`}
            >
              Partner with us
            </Link>
        <Link key="contact" href="/contact">
            <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md">
              <Phone size={18} />
              Contact Us
            </button>
        </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
