"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertTriangle, Shield, Scale, Clock, Users } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Syarat & Ketentuan <span className="text-amber-900">PT MAJA MANDIRI ABADI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Syarat dan ketentuan penggunaan website dan layanan PT MAJA MANDIRI ABADI. 
              Dengan menggunakan website kami, Anda menyetujui syarat dan ketentuan berikut.
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <FileText className="h-5 w-5 text-amber-900" />
              <span className="text-gray-700 font-medium">Terakhir diperbarui: 1 Januari 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Acceptance of Terms */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-amber-900" />
                  Penerimaan Syarat dan Ketentuan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di website PT MAJA MANDIRI ABADI. Syarat dan Ketentuan ini 
                  mengatur penggunaan website <strong>www.majamandiriabadi.co.id</strong> dan 
                  semua layanan yang kami sediakan. Dengan mengakses, browsing, atau menggunakan 
                  website kami, Anda secara tegas menyetujui dan terikat oleh syarat dan ketentuan ini.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Jika Anda tidak menyetujui syarat dan ketentuan ini, mohon jangan menggunakan 
                  website atau layanan kami. PT MAJA MANDIRI ABADI berhak mengubah syarat dan 
                  ketentuan ini kapan saja tanpa pemberitahuan sebelumnya.
                </p>
              </CardContent>
            </Card>

            {/* Website Usage */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Penggunaan Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Penggunaan yang Diizinkan</h3>
                  <p className="text-gray-600 mb-3">
                    Anda diizinkan untuk:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Mengakses dan browsing website untuk tujuan informasi</li>
                    <li>Mengunduh materi untuk penggunaan pribadi dan non-komersial</li>
                    <li>Menghubungi kami untuk pertanyaan tentang produk dan layanan</li>
                    <li>Mengirimkan permintaan melalui formulir kontak</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Penggunaan yang Dilarang</h3>
                  <p className="text-gray-600 mb-3">
                    Anda dilarang untuk:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Menggunakan website untuk tujuan ilegal atau tidak sah</li>
                    <li>Mencoba merusak atau mengganggu fungsi website</li>
                    <li>Menggunakan malware, virus, atau kode berbahaya lainnya</li>
                    <li>Mengumpulkan data pengguna lain secara tidak sah</li>
                    <li>Menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
                    <li>Menggunakan website untuk spam atau penipuan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Products and Services */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Produk dan Layanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Informasi Produk</h3>
                  <p className="text-gray-600">
                    Kami berusaha menyediakan informasi produk yang akurat dan terkini. Namun, 
                    kami tidak menjamin bahwa semua informasi di website adalah lengkap, akurat, 
                    atau terkini. Spesifikasi produk dapat berubah tanpa pemberitahuan sebelumnya.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Harga dan Ketersediaan</h3>
                  <p className="text-gray-600">
                    Harga yang ditampilkan di website dapat berubah sewaktu-waktu dan tidak 
                    mengikat. Ketersediaan produk tergantung pada stok yang ada. Untuk informasi 
                    harga dan ketersediaan terkini, silakan hubungi tim sales kami.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Pemesanan</h3>
                  <p className="text-gray-600">
                    Semua pemesanan produk tunduk pada persetujuan kami dan ketersediaan stok. 
                    Kami berhak menolak atau membatalkan pesanan untuk alasan apa pun, termasuk 
                    keterbatasan stok, kesalahan harga, atau kecurigaan penipuan.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-amber-900" />
                  Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Semua konten di website ini, termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                  <li>Teks, gambar, grafik, dan desain</li>
                  <li>Logo, merek dagang, dan nama dagang</li>
                  <li>Software dan kode pemrograman</li>
                  <li>Database dan informasi produk</li>
                </ul>
                <p className="text-gray-600">
                  merupakan hak milik PT MAJA MANDIRI ABADI atau dilisensikan kepada kami. 
                  Penggunaan tanpa izin melanggar hak cipta dan merek dagang.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-amber-900" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Website dan layanan kami disediakan "sebagaimana adanya" tanpa jaminan 
                  apapun, baik tersurat maupun tersirat. PT MAJA MANDIRI ABADI tidak bertanggung 
                  jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                  <li>Kerugian langsung, tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan data atau keuntungan</li>
                  <li>Gangguan atau ketidaktersediaan website</li>
                  <li>Kerusakan komputer atau perangkat lain</li>
                  <li>Konten dari pihak ketiga yang di-link dari website kami</li>
                </ul>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-900">
                    <strong>Batasan Maksimum:</strong> Tanggung jawab kami maksimum sebesar 
                    jumlah yang Anda bayarkan kepada kami untuk produk atau layanan yang 
                    menjadi sengketa.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Content */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Konten Pengguna</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dengan mengirimkan konten ke website kami (melalui formulir kontak, email, 
                  atau metode lain), Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Memberikan kami hak non-eksklusif untuk menggunakan konten tersebut</li>
                  <li>Menjamin bahwa Anda memiliki hak untuk mengirimkan konten tersebut</li>
                  <li>Setuju bahwa konten tidak melanggar hak pihak ketiga</li>
                  <li>Memungkinkan kami untuk memodifikasi atau menghapus konten</li>
                </ul>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Privasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Privasi Anda penting bagi kami. Penggunaan informasi pribadi Anda diatur 
                  oleh Kebijakan Privasi kami. Dengan menggunakan website ini, Anda menyetujui 
                  pengumpulan dan penggunaan informasi sebagaimana dijelaskan dalam Kebijakan Privasi.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Scale className="h-6 w-6 mr-2 text-amber-900" />
                  Hukum yang Berlaku
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                  Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan 
                  syarat dan ketentuan ini akan diselesaikan melalui:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Negosiasi damai terlebih dahulu</li>
                  <li>Mediasi atau arbitrase jika diperlukan</li>
                  <li>Pengadilan negeri di Bekasi, Jawa Barat</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-amber-900" />
                  Pengakhiran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Kami berhak untuk mengakhiri atau menangguhkan akses Anda ke website 
                  kami kapan saja, dengan atau tanpa alasan, dengan atau tanpa pemberitahuan. 
                  Setelah pengakhiran, ketentuan mengenai hak kekayaan intelektual, pembatasan 
                  tanggung jawab, dan penyelesaian sengketa akan tetap berlaku.
                </p>
              </CardContent>
            </Card>

            {/* General Provisions */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Ketentuan Umum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Perubahan Syarat</h3>
                  <p className="text-gray-600">
                    Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan 
                    berlaku efektif segera setelah diposting di website. Penggunaan berkelanjutan 
                    Anda atas website setelah perubahan merupakan penerimaan terhadap syarat yang baru.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Pemisahan Kelayakan</h3>
                  <p className="text-gray-600">
                    Jika bagian mana pun dari syarat dan ketentuan ini dinyatakan tidak sah atau 
                    tidak dapat dilaksanakan, bagian tersebut akan dihapus dan sisanya akan tetap 
                    berlaku penuh.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Kelalaian</h3>
                  <p className="text-gray-600">
                    Kegagalan kami untuk menegakkan hak atau ketentuan mana pun dari syarat 
                    ini tidak akan dianggap sebagai pengabaian hak tersebut.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Keseluruhan Perjanjian</h3>
                  <p className="text-gray-600">
                    Syarat dan Ketentuan ini merupakan keseluruhan perjanjian antara Anda dan 
                    PT MAJA MANDIRI ABADI mengenai penggunaan website.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-amber-900" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-900">Email:</strong>
                      <span className="text-gray-600 ml-2">legal@majamandiriabadi.co.id</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Telepon:</strong>
                      <span className="text-gray-600 ml-2">0877-2988-7781</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Alamat:</strong>
                      <div className="text-gray-600 mt-1">
                        Jalan Letnan Suprapto Kampung Cijengkol<br />
                        Kel. Cijengkol, Kec. Setu<br />
                        Kab. Bekasi, Prov. Jawa Barat 17320
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}