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
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Media", href: "/Media" },
  { name: "Partner with us", href: "/Partner" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
