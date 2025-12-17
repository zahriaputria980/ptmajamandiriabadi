"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="PT MAJA MANDIRI ABADI"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-amber-900 font-bold text-lg">PT MAJA MANDIRI ABADI</div>
                <div className="text-amber-700 text-xs">Wood Manufacturing Industry</div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-900 transition-colors font-medium"
            >
              Beranda
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-amber-900 transition-colors font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-amber-900 transition-colors font-medium"
            >
              Produk
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-amber-900 transition-colors font-medium"
            >
              Kontak
            </Link>
            <Link href="/contact">
              <Button className="bg-amber-900 hover:bg-amber-800 text-white">
                Hubungi Kami
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-amber-900 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-amber-900 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-gray-700 hover:text-amber-900 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Produk
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-amber-900 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button className="w-full bg-amber-900 hover:bg-amber-800 text-white">
                    Hubungi Kami
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}