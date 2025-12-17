"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, UserCheck, Database, AlertCircle } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kebijakan Privasi <span className="text-amber-900">PT MAJA MANDIRI ABADI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kebijakan privasi kami menjelaskan bagaimana kami mengumpulkan, menggunakan, 
              dan melindungi informasi pribadi Anda sesuai dengan peraturan yang berlaku.
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Shield className="h-5 w-5 text-amber-900" />
              <span className="text-gray-700 font-medium">Terakhir diperbarui: 1 Januari 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-amber-900" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  PT MAJA MANDIRI ABADI ("kami") berkomitmen untuk melindungi privasi dan keamanan 
                  data pribadi pengunjung website kami. Kebijakan Privasi ini berlaku untuk semua 
                  informasi yang dikumpulkan melalui website <strong>www.majamandiriabadi.co.id</strong> 
                  dan layanan terkait.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Dengan mengakses dan menggunakan website kami, Anda menyetujui pengumpulan, 
                  penggunaan, dan pembagian informasi Anda sebagaimana dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Database className="h-6 w-6 mr-2 text-amber-900" />
                  Informasi yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Informasi Pribadi</h3>
                  <p className="text-gray-600 mb-3">
                    Kami dapat mengumpulkan informasi pribadi berikut:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Nama perusahaan</li>
                    <li>Alamat fisik</li>
                    <li>Informasi yang Anda berikan melalui formulir kontak</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Informasi Teknis</h3>
                  <p className="text-gray-600 mb-3">
                    Kami secara otomatis mengumpulkan informasi teknis:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis browser dan sistem operasi</li>
                    <li>Informasi perangkat</li>
                    <li>Halaman yang dikunjungi dan waktu kunjungan</li>
                    <li>Informasi penggunaan website</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies</h3>
                  <p className="text-gray-600">
                    Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. 
                    Cookies adalah file teks kecil yang disimpan di browser Anda untuk mengingat 
                    preferensi dan aktivitas Anda.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Usage of Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-amber-900" />
                  Penggunaan Informasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Kami menggunakan informasi yang dikumpulkan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Merpons pertanyaan dan permintaan Anda</li>
                  <li>Memberikan informasi produk dan layanan</li>
                  <li>Memproses pesanan dan transaksi</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Mengirimkan informasi promosi (dengan persetujuan Anda)</li>
                  <li>Analisis dan pengembangan website</li>
                  <li>Keperluan internal dan pelaporan bisnis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-amber-900" />
                  Pembagian Informasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada 
                  pihak ketiga, kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>Untuk memenuhi kewajiban hukum atau peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                  <li>Dengan mitra bisnis tepercaya yang membantu kami menyediakan layanan</li>
                  <li>Dalam kasus transfer bisnis (merger, akuisisi, atau penjualan aset)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-amber-900" />
                  Keamanan Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi 
                  pribadi Anda dari akses tidak sah, penggunaan, atau perubahan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Enkripsi data transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Protokol keamanan untuk karyawan dan mitra</li>
                  <li>Monitoring keamanan berkelanjutan</li>
                  <li>Backup data teratur</li>
                </ul>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-900 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-amber-900">
                      <strong>Perhatian:</strong> Tidak ada metode transmisi data melalui internet 
                      yang 100% aman. Kami berusaha melindungi informasi Anda, naman tidak dapat 
                      menjamin keamanan absolut.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Hak Anda sebagai Pengguna</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Anda memiliki hak terhadap informasi pribadi Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Akses:</strong> Meminta salinan informasi pribadi yang kami simpan</li>
                  <li><strong>Koreksi:</strong> Memperbarui atau memperbaiki informasi yang tidak akurat</li>
                  <li><strong>Penghapusan:</strong> Meminta penghapusan informasi pribadi Anda</li>
                  <li><strong>Pembatasan:</strong> Membatasi pengolahan informasi pribadi Anda</li>
                  <li><strong>Penolakan:</strong> Menolak pengolahan informasi untuk tujuan tertentu</li>
                  <li><strong>Portabilitas:</strong> Meminta transfer informasi ke pihak lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third Party Links */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Link ke Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Website kami mungkin mengandung link ke website pihak ketiga. Kami tidak bertanggung 
                  jawab atas praktik privasi website tersebut. Kami menyarankan Anda untuk membaca 
                  kebijakan privasi setiap website yang Anda kunjungi.
                </p>
              </CardContent>
            </Card>

            {/* Children Privacy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Privasi Anak</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Website kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak sengaja 
                  mengumpulkan informasi pribadi dari anak di bawah umur. Jika kami mengetahui 
                  telah mengumpulkan informasi dari anak di bawah umur, kami akan menghapus 
                  informasi tersebut segera.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Perubahan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                  diposting di halaman ini dengan tanggal "Terakhir diperbarui" yang baru. Kami 
                  menyarankan Anda untuk secara berkala meninjau kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
                  menggunakan hak privasi Anda, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-900">Email:</strong>
                      <span className="text-gray-600 ml-2">privacy@majamandiriabadi.co.id</span>
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