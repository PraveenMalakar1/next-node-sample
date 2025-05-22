"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Find a Car", href: "/search" },
  { label: "Finance", href: "/finance" },
  { label: "Car Care", href: "/car-care" },
  { label: "Part Exchange Your Car", href: "/part-exchange" },
  {
    label: "Why Car Planet",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Warranty", href: "/warranty" },
      { label: "Insurance", href: "/insurance" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Support", href: "/support" },
      { label: "FAQs", href: "/faq" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <Image
            src={"/car-planet-logo.svg"}
            alt="car-planet"
            width={150}
            height={50}
          />
          {/* car<span className="text-black">planet</span> */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) =>
            !item.children ? (
              <Link
                key={item.label}
                href={item.href!}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ) : (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoverDropdown(item.label)}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <button
                  className="flex items-center text-sm text-gray-700 hover:text-blue-600 cursor-pointer select-none"
                  aria-haspopup="true"
                  aria-expanded={hoverDropdown === item.label}
                  type="button"
                >
                  {item.label}
                  <span className="ml-1 text-gray-400">▼</span>
                </button>

                <AnimatePresence>
                  {hoverDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bg-white shadow-md rounded mt-2 w-48 z-40"
                    >
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}

          {/* Desktop Call Now */}
        </nav>
        <a
          href="tel:+911234567890"
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm hidden md:flex"
        >
          <Image src={"/icons/phone.svg"} width={20} height={20} alt="phone" />{" "}
          Call Now
        </a>

        {/* Mobile: Call Now + Menu Toggle */}
        <div className="flex items-center md:hidden">
          <a
            href="tel:+911234567890"
            className="sm:hidden px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm mr-2 flex"
          >
            <Image
              src={"/icons/phone.svg"}
              width={20}
              height={20}
              alt="phone"
            />{" "}
            Call Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-inner"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {menuItems.map((item) =>
                !item.children ? (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="text-sm text-gray-800 hover:text-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-sm font-medium mt-2 text-gray-600">
                      {item.label}
                    </span>
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="ml-3 text-sm text-gray-700 hover:text-blue-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        - {sub.label}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
