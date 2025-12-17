"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Factory, Trees, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-amber-900">PT MAJA MANDIRI ABADI</span>
                <br />
                Solusi Terpercaya untuk
                <br />
                Industri Kayu Berkualitas
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Perusahaan terdepan dalam industri pengolahan kayu yang menghasilkan 
                produk berkualitas tinggi dengan standar internasional dan berkelanjutan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
                    Lihat Produk Kami
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-50">
                    Hubungi Kami
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="/logo.png"
                  alt="PT MAJA MANDIRI ABADI"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-amber-900">MAJA MANDIRI ABADI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk memberikan produk kayu terbaik dengan kualitas 
              yang terjamin dan pelayanan yang prima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Produksi Modern
                </h3>
                <p className="text-gray-600">
                  Fasilitas produksi dengan teknologi terkini untuk hasil optimal
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trees className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Berkelanjutan
                </h3>
                <p className="text-gray-600">
                  Pengelolaan hutan yang bertanggung jawab dan ramah lingkungan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sertifikasi
                </h3>
                <p className="text-gray-600">
                  Produk bersertifikasi standar kualitas internasional
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tim Profesional
                </h3>
                <p className="text-gray-600">
                  Ahli berpengalaman dalam industri pengolahan kayu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai produk kayu berkualitas tinggi untuk kebutuhan industri dan konstruksi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-300"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kayu Olahan
                </h3>
                <p className="text-gray-600 mb-4">
                  Kayu olahan berkualitas tinggi untuk berbagai keperluan konstruksi dan furnitur.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multiple wood species available
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Standard and custom dimensions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quality graded and certified
                  </li>
                </ul>
                <Button className="w-full bg-amber-900 hover:bg-amber-800">
                  Lihat Detail
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-300"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Komponen Kayu
                </h3>
                <p className="text-gray-600 mb-4">
                  Komponen kayu presisi untuk industri furnitur dan konstruksi modern.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Precision cutting and finishing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom manufacturing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bulk order capabilities
                  </li>
                </ul>
                <Button className="w-full bg-amber-900 hover:bg-amber-800">
                  Lihat Detail
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-200 to-yellow-300"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Produk Kustom
                </h3>
                <p className="text-gray-600 mb-4">
                  Solusi kustom sesuai kebutuhan spesifik proyek dan desain Anda.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom design and sizing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Special finishing options
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technical consultation
                  </li>
                </ul>
                <Button className="w-full bg-amber-900 hover:bg-amber-800">
                  Lihat Detail
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Hubungi tim profesional kami untuk konsultasi kebutuhan kayu berkualitas 
            tinggi untuk proyek Anda. Dapatkan penawaran terbaik hari ini!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-900 hover:bg-gray-100">
                Hubungi Sales Kami
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
              Download Company Profile
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}