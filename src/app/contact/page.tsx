"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Building
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hubungi <span className="text-amber-900">PT MAJA MANDIRI ABADI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim profesional kami siap membantu kebutuhan kayu berkualitas tinggi untuk proyek Anda. 
              Dapatkan konsultasi gratis dan penawaran terbaik hari ini!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alamat</h3>
                <p className="text-gray-600 text-sm">
                  Jalan Letnan Suprapto Kampung Cijengkol<br />
                  Kel. Cijengkol, Kec. Setu<br />
                  Kab. Bekasi, Prov. Jawa Barat<br />
                  Kode Pos 17320
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Mobile:</strong><br />
                  0877-2988-7781
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>WhatsApp:</strong><br />
                  0877-2988-7781
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Umum:</strong><br />
                  info@majamandiriabadi.co.id<br /><br />
                  <strong>Sales:</strong><br />
                  sales@majamandiriabadi.co.id
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Senin - Jumat:</strong><br />
                  08:00 - 17:00<br /><br />
                  <strong>Sabtu:</strong><br />
                  08:00 - 12:00
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-amber-900" />
                  Kirim Pesan
                </CardTitle>
                <p className="text-gray-600">
                  Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Nomor Telepon *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0812-3456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Perusahaan
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="PT. Example"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subjek *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Informasi Produk Kayu"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Pesan *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Jelaskan kebutuhan Anda secara detail..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-900 hover:bg-amber-800 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-amber-900" />
                    Hubungi Langsung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">Sales Department</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Untuk informasi produk dan penawaran harga
                    </p>
                    <Button size="sm" className="bg-amber-900 hover:bg-amber-800">
                      <Phone className="h-4 w-4 mr-2" />
                      0877-2988-7781
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Customer Support</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Untuk bantuan teknis dan layanan purnajual
                    </p>
                    <Button size="sm" variant="outline" className="border-blue-900 text-blue-900">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Building className="h-5 w-5 mr-2 text-amber-900" />
                    Mengapa Memilih Kami?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Respons Cepat</strong>
                        <p className="text-sm text-gray-600">Tim kami merespons dalam waktu 24 jam</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Konsultasi Gratis</strong>
                        <p className="text-sm text-gray-600">Ahli kami siap memberikan saran terbaik</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Harga Kompetitif</strong>
                        <p className="text-sm text-gray-600">Penawaran terbaik untuk kualitas premium</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Pengiriman Tepat Waktu</strong>
                        <p className="text-sm text-gray-600">Jaringan logistik yang luas dan handal</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Location Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Lokasi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Bekasi, Jawa Barat</p>
                      <p className="text-xs">Google Maps integration</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Buka di Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Bagaimana cara memesan produk?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anda dapat menghubungi tim sales kami melalui telepon, WhatsApp, atau mengisi 
                  formulir kontak. Tim kami akan membantu Anda dengan proses pemesanan yang mudah.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Apakah ada minimum order?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Minimum order bervariasi tergantung jenis produk. Hubungi kami untuk informasi 
                  detail tentang minimum order untuk produk yang Anda butuhkan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Berapa lama waktu pengiriman?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Waktu pengiriman tergantung lokasi dan ketersediaan stok. Untuk area Jabodetabek 
                  biasanya 1-3 hari, untuk luar kota 3-7 hari kerja.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Apakah produk sudah tersertifikasi?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ya, semua produk kami memiliki sertifikasi FSC, SVLK, dan memenuhi standar SNI. 
                  Dokumen sertifikasi dapat disediakan atas permintaan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}