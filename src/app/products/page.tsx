"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Package, 
  Ruler, 
  Home, 
  Factory, 
  CheckCircle, 
  Star,
  ArrowRight,
  Filter
} from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = {
    processed: [
      {
        id: 1,
        name: "Kayu Jati Olahan",
        category: "processed",
        description: "Kayu jati berkualitas premium yang telah melalui proses pengeringan dan pengolahan sempurna",
        features: ["Sudah kering oven", "Grade A", "Bebas hama", "Sertifikasi FSC"],
        applications: "Furniture, Konstruksi, Lantai",
        price: "Hubungi kami",
        rating: 4.8,
        image: "🪵"
      },
      {
        id: 2,
        name: "Kayu Mahoni Premium",
        category: "processed",
        description: "Kayu mahoni pilihan dengan serat yang indah dan kualitas terjamin",
        features: ["Tekstur halus", "Warna merah muda", "Mudah diolah", "Tahan lama"],
        applications: "Furniture, Panel, Pintu",
        price: "Hubungi kami",
        rating: 4.7,
        image: "🌳"
      },
      {
        id: 3,
        name: "Kayu Merbau",
        category: "processed",
        description: "Kayu keras yang sangat tahan terhadap cuaca dan serangan hama",
        features: ["Kekerasan tinggi", "Tahan air", "Warna coklat tua", "Sudah S4S"],
        applications: "Decking, Lantai outdoor, Konstruksi",
        price: "Hubungi kami",
        rating: 4.9,
        image: "🎯"
      }
    ],
    components: [
      {
        id: 4,
        name: "Komponen Furniture",
        category: "components",
        description: "Berbagai komponen furniture presisi untuk industri furnitur",
        features: ["Presisi tinggi", "Sudah finishing", "Custom design", "Kualitas ekspor"],
        applications: "Industri furniture, Proyek interior",
        price: "Hubungi kami",
        rating: 4.6,
        image: "🪑"
      },
      {
        id: 5,
        name: "Panel Kayu",
        category: "components",
        description: "Panel kayu berkualitas untuk berbagai aplikasi konstruksi",
        features: ["Ukuran standar", "Permukaan halus", "Tahan benturan", "Sudah coating"],
        applications: "Dinding, Partisi, Lantai",
        price: "Hubungi kami",
        rating: 4.5,
        image: "📐"
      },
      {
        id: 6,
        name: "Pintu & Jendela",
        category: "components",
        description: "Pintu dan jendela kayu dengan desain modern dan klasik",
        features: ["Desain custom", "Kualitas premium", "Tahan cuaca", "Garansi 5 tahun"],
        applications: "Rumah, Kantor, Hotel",
        price: "Hubungi kami",
        rating: 4.8,
        image: "🚪"
      }
    ],
    custom: [
      {
        id: 7,
        name: "Custom Cutting",
        category: "custom",
        description: "Layanan pemotongan kayu sesuai spesifikasi dan kebutuhan khusus",
        features: ["Akurasi tinggi", "Berbagai ukuran", "Minimal order", "Konsultasi gratis"],
        applications: "Proyek khusus, Kebutuhan custom",
        price: "Hubungi kami",
        rating: 4.7,
        image: "⚙️"
      },
      {
        id: 8,
        name: "Finishing Custom",
        category: "custom",
        description: "Layanan finishing kayu dengan berbagai pilihan warna dan teknik",
        features: ["Berbagai warna", "Teknik modern", "Eco-friendly", "Hasil sempurna"],
        applications: "Furniture, Interior, Eksterior",
        price: "Hubungi kami",
        rating: 4.9,
        image: "🎨"
      }
    ]
  }

  const allProducts = [...products.processed, ...products.components, ...products.custom]

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="h-full hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-4xl">{product.image}</div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        <CardTitle className="text-xl text-gray-900 group-hover:text-amber-900 transition-colors">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-2">Fitur Utama:</h4>
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {product.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{product.features.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-1">Aplikasi:</h4>
          <p className="text-sm text-gray-600">{product.applications}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-amber-900 font-semibold">{product.price}</span>
          <Button size="sm" className="bg-amber-900 hover:bg-amber-800">
            Detail
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Produk <span className="text-amber-900">Unggulan Kami</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Berbagai produk kayu berkualitas tinggi yang telah melalui proses 
              seleksi ketat dan pengolahan modern untuk memenuhi kebutuhan industri Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Package className="h-4 w-4 mr-2" />
                50+ Jenis Produk
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Kualitas Terjamin
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Star className="h-4 w-4 mr-2" />
                Rating 4.7/5
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-amber-900 data-[state=active]:text-white">
                Semua Produk
              </TabsTrigger>
              <TabsTrigger value="processed" className="data-[state=active]:bg-amber-900 data-[state=active]:text-white">
                Kayu Olahan
              </TabsTrigger>
              <TabsTrigger value="components" className="data-[state=active]:bg-amber-900 data-[state=active]:text-white">
                Komponen
              </TabsTrigger>
              <TabsTrigger value="custom" className="data-[state=active]:bg-amber-900 data-[state=active]:text-white">
                Custom
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada produk dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Jaminan Kualitas <span className="text-amber-900">PT MAJA MANDIRI ABADI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap produk kami melalui proses quality control yang ketat untuk memastikan 
              kualitas terbaik dan kepuasan pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sertifikasi FSC
                </h3>
                <p className="text-gray-600 text-sm">
                  Produk bersertifikasi kehutanan berkelanjutan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ruler className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Standar SNI
                </h3>
                <p className="text-gray-600 text-sm">
                  Memenuhi standar nasional Indonesia
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  QC Process
                </h3>
                <p className="text-gray-600 text-sm">
                  Quality control di setiap tahap produksi
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Garansi
                </h3>
                <p className="text-gray-600 text-sm">
                  Garansi kualitas untuk semua produk
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Butuh Produk Kayu Kustom?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Tim kami siap membantu Anda dengan solusi kustom sesuai kebutuhan spesifik proyek Anda. 
            Konsultasi gratis untuk kebutuhan kayu berkualitas tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-gray-100">
              Konsultasi Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
              Download Katalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}