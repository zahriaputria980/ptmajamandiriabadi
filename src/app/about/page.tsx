"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Users, Award, Target, TreePine, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-amber-900">PT MAJA MANDIRI ABADI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan terpercaya dalam industri pengolahan kayu yang telah berpengalaman 
              menghasilkan produk berkualitas tinggi dengan standar internasional.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sejarah Perusahaan
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  PT MAJA MANDIRI ABADI didirikan dengan visi untuk menjadi perusahaan terdepan 
                  dalam industri pengolahan kayu di Indonesia. Berlokasi strategis di Bekasi, Jawa Barat, 
                  kami telah melayani berbagai kebutuhan industri kayu selama bertahun-tahun.
                </p>
                <p>
                  Dengan komitmen terhadap kualitas dan keberlanjutan, kami terus berinovasi 
                  dalam proses produksi untuk menghasilkan produk kayu yang tidak hanya berkualitas 
                  tinggi tetapi juga ramah lingkungan.
                </p>
                <p>
                  Perusahaan kami telah membangun reputasi yang kuat sebagai mitra terpercaya 
                  bagi berbagai industri, mulai dari konstruksi hingga furnitur, dengan selalu 
                  mengutamakan kepuasan pelanggan dan standar kualitas tertinggi.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-900 mb-2">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-900 mb-2">500+</div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-900 mb-2">50+</div>
                  <div className="text-gray-600">Jenis Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-900 mb-2">100+</div>
                  <div className="text-gray-600">Karyawan Profesional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visi & Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-amber-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menjadi perusahaan terdepan dalam industri pengolahan kayu yang 
                menghasilkan produk berkualitas internasional dengan tetap menjaga 
                keberlanjutan lingkungan dan kepuasan pelanggan.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-amber-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  Menghasilkan produk kayu berkualitas tinggi dengan standar internasional
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  Mengimplementasikan praktik pengelolaan hutan yang berkelanjutan
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  Memberikan pelayanan terbaik dan membangun hubungan jangka panjang dengan pelanggan
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  Terus berinovasi dalam teknologi dan proses produksi
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Inti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap aspek operasional kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Integritas
                </h3>
                <p className="text-gray-600">
                  Menjunjung tinggi kejujuran dan transparansi dalam setiap transaksi bisnis
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Keberlanjutan
                </h3>
                <p className="text-gray-600">
                  Berkomitmen terhadap pengelolaan sumber daya alam yang bertanggung jawab
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Kualitas
                </h3>
                <p className="text-gray-600">
                  Selalu mengutamakan standar kualitas tertinggi dalam setiap produk
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Profesionalisme
                </h3>
                <p className="text-gray-600">
                  Tim berpengalaman yang siap memberikan solusi terbaik untuk kebutuhan Anda
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Inovasi
                </h3>
                <p className="text-gray-600">
                  Terus mengembangkan teknologi dan metode produksi yang lebih efisien
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Kepuasan Pelanggan
                </h3>
                <p className="text-gray-600">
                  Berfokus pada kebutuhan dan kepuasan pelanggan sebagai prioritas utama
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sertifikasi & Penghargaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengakuan terhadap komitmen kami terhadap kualitas dan keberlanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-amber-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-sm text-gray-600">Sistem Manajemen Mutu</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">FSC Certified</h3>
              <p className="text-sm text-gray-600">Forest Stewardship Council</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SVLK</h3>
              <p className="text-sm text-gray-600">Sistem Verifikasi Legalitas Kayu</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-10 w-10 text-purple-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Standar Industri</h3>
              <p className="text-sm text-gray-600">SNI & Standar Internasional</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}