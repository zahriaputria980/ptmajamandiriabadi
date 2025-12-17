import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="PT MAJA MANDIRI ABADI"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">PT MAJA MANDIRI ABADI</h3>
                <p className="text-amber-200 text-sm">Wood Manufacturing Industry</p>
              </div>
            </div>
            <p className="text-amber-100 mb-4 max-w-md">
              Perusahaan terpercaya dalam industri pengolahan kayu yang menghasilkan 
              produk berkualitas tinggi dengan standar internasional.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-200 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-200 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-amber-200 hover:text-white transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 text-amber-200 flex-shrink-0" />
                <div className="text-amber-100 text-sm">
                  Jalan Letnan Suprapto Kampung Cijengkol, Kel. Cijengkol, Kec. Setu, 
                  Kab. Bekasi, Prov. Jawa Barat 17320
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-amber-200 flex-shrink-0" />
                <span className="text-amber-100 text-sm">0877-2988-7781</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-amber-200 flex-shrink-0" />
                <span className="text-amber-100 text-sm">info@majamandiriabadi.co.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © 2024 PT MAJA MANDIRI ABADI. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-amber-200 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-amber-200 hover:text-white text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}