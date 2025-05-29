"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart, Star, Shirt, ShoppingBag, Zap, Eye, Share2, ShoppingCart, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Component() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [cart, setCart] = useState<number[]>([])

  const outfitItems = [
    {
      id: 1,
      name: "Sports T-Shirt",
      price: "₫299,000",
      originalPrice: "₫399,000",
      image: "/images/sports-outfit.jpeg",
      description: "Áo thể thao tay ngắn với thiết kế color block đỏ trắng và cổ V độc đáo.",
      use: "Lý tưởng cho hoạt động thể chất, tập luyện thể thao hoặc mặc thường ngày với phong cách năng động.",
      highlight: "Có logo trường học tạo vẻ ngoài sạch sẽ, phong cách đồng phục.",
      icon: <Shirt className="w-5 h-5" />,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Đỏ-Trắng", "Xanh-Trắng"],
      material: "Cotton 60%, Polyester 40%",
      category: "Áo",
    },
    {
      id: 2,
      name: "Athletic Shorts",
      price: "₫199,000",
      originalPrice: "₫249,000",
      image: "/images/sports-outfit.jpeg",
      description: "Quần short đen với hai sọc trắng ở hai bên.",
      use: "Tuyệt vời cho trường học, thể thao hoặc đi chơi thường ngày. Dễ phối với áo thun đơn giản hoặc hoodie.",
      highlight: "Thiết kế thoải mái và chức năng cho chuyển động năng động.",
      icon: <ShoppingBag className="w-5 h-5" />,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Đen-Trắng", "Xám-Trắng"],
      material: "Polyester 100%",
      category: "Quần",
    },
    {
      id: 3,
      name: "Star Varsity Jacket",
      price: "₫899,000",
      originalPrice: "₫1,199,000",
      image: "/images/varsity-jacket.jpeg",
      description: "Áo khoác varsity phong cách Mỹ với họa tiết ngôi sao và tia chớp nổi bật trên tay áo.",
      use: "Hoàn hảo cho thời tiết mát mẻ. Thêm lớp phong cách và ấm áp khi mặc over áo thun thường.",
      highlight: "Màu đỏ, trắng và đen tạo vẻ ngoài nổi bật và cân bằng.",
      icon: <Star className="w-5 h-5" />,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Đỏ-Trắng-Đen"],
      material: "Wool 80%, Polyester 20%",
      category: "Áo khoác",
    },
    {
      id: 4,
      name: "Star Hoodie Collection",
      price: "₫599,000",
      originalPrice: "₫799,000",
      image: "/images/hoodie-designs.jpeg",
      description: "Hoodie cao cấp với họa tiết ngôi sao và thương hiệu PTT trong màu sắc phối hợp.",
      use: "Món đồ layering đa năng cho trang phục thường ngày và hoạt động trường học.",
      highlight: "Nhiều biến thể thiết kế với các yếu tố thương hiệu nhất quán.",
      icon: <Zap className="w-5 h-5" />,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Đỏ-Trắng", "Trắng-Đỏ"],
      material: "Cotton 70%, Polyester 30%",
      category: "Hoodie",
    },
    {
      id: 5,
      name: "PTT Varsity Jacket - Kakashi Edition",
      price: "₫1,299,000",
      originalPrice: "₫1,599,000",
      image: "/images/kakashi-mascot.png",
      description: "Áo khoác varsity phiên bản đặc biệt với thiết kế lấy cảm hứng từ nhân vật anime nổi tiếng.",
      use: "Hoàn hảo cho fan anime và những ai yêu thích phong cách độc đáo, nổi bật.",
      highlight: "Phiên bản giới hạn với chi tiết thêu tinh xảo và chất liệu cao cấp.",
      icon: <Star className="w-5 h-5" />,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Đỏ-Trắng-Đen"],
      material: "Cotton 65%, Polyester 35%",
      category: "Áo khoác",
      isSpecial: true,
    },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleCart = (id: number) => {
    setCart((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const totalValue = outfitItems.reduce((sum, item) => {
    return sum + Number.parseInt(item.price.replace(/[₫,]/g, ""))
  }, 0)

  const totalOriginalValue = outfitItems.reduce((sum, item) => {
    return sum + Number.parseInt(item.originalPrice.replace(/[₫,]/g, ""))
  }, 0)

  const savings = totalOriginalValue - totalValue

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SU</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Son Uchiha Shop</h1>
                <p className="text-xs text-gray-500">Premium Sportswear Collection</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 font-medium">
                Trang Chủ
              </a>
              <a href="#" className="text-gray-700 font-medium">
                Sản Phẩm
              </a>
              <a href="#" className="text-gray-700 font-medium">
                Về Chúng Tôi
              </a>
              <a href="#" className="text-gray-700 font-medium">
                Liên Hệ
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              Bộ Sưu Tập Cao Cấp
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              <span className="text-yellow-300">Son Uchiha Shop</span>
              <br />🔥 Outfit Thể Thao
              <br />
              <span className="text-yellow-300">Chất Lượng Cao</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Bộ sưu tập hoàn chỉnh với phong cách thể thao năng động, màu sắc đỏ - trắng - đen nổi bật. Hoàn hảo cho
              học sinh, sinh viên và những ai yêu thích phong cách tự tin, năng lượng.
            </p>

            {/* Price Summary */}
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">₫{totalValue.toLocaleString()}</div>
                <div className="text-sm text-red-200">Giá bộ combo</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-lg line-through text-red-200">₫{totalOriginalValue.toLocaleString()}</div>
                <div className="text-sm text-red-200">Giá lẻ</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">-₫{savings.toLocaleString()}</div>
                <div className="text-sm text-red-200">Tiết kiệm</div>
              </div>
            </div>

            {/* Brand Mascot */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 relative">
                  <Image
                    src="/images/kakashi-mascot.png"
                    alt="Son Uchiha Shop Mascot"
                    fill
                    className="object-cover rounded-full border-4 border-white/30 shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Mascot
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-red-600 font-semibold px-8">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Mua Ngay Bộ Combo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white font-semibold px-8">
                <Eye className="w-5 h-5 mr-2" />
                Xem Chi Tiết
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Info Section */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Miễn Phí Vận Chuyển</h3>
              <p className="text-gray-600 text-sm">Đơn hàng từ 500k</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Chất Lượng Cao</h3>
              <p className="text-gray-600 text-sm">Cam kết 100% chính hãng</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Hỗ Trợ 24/7</h3>
              <p className="text-gray-600 text-sm">Tư vấn nhiệt tình</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Đổi Trả Dễ Dàng</h3>
              <p className="text-gray-600 text-sm">Trong vòng 7 ngày</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Color Palette */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bảng Màu Chủ Đạo</h2>
          <div className="flex justify-center items-center gap-8">
            <div className="text-center cursor-pointer">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-3 shadow-lg"></div>
              <span className="font-semibold text-gray-700">Đỏ</span>
              <p className="text-sm text-gray-500">Năng động</p>
            </div>
            <div className="text-center cursor-pointer">
              <div className="w-16 h-16 bg-white border-4 border-gray-300 rounded-full mx-auto mb-3 shadow-lg"></div>
              <span className="font-semibold text-gray-700">Trắng</span>
              <p className="text-sm text-gray-500">Tinh khôi</p>
            </div>
            <div className="text-center cursor-pointer">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-3 shadow-lg"></div>
              <span className="font-semibold text-gray-700">Đen</span>
              <p className="text-sm text-gray-500">Mạnh mẽ</p>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">Tất Cả</TabsTrigger>
            <TabsTrigger value="Áo">Áo</TabsTrigger>
            <TabsTrigger value="Quần">Quần</TabsTrigger>
            <TabsTrigger value="Áo khoác">Áo Khoác</TabsTrigger>
            <TabsTrigger value="Hoodie">Hoodie</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {outfitItems.map((item, index) => (
                <Card key={item.id} className="overflow-hidden border-0 shadow-lg">
                  <div className="relative">
                    <div className="relative h-80 overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100"></div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-red-500 text-white font-semibold">
                        -
                        {Math.round(
                          ((Number.parseInt(item.originalPrice.replace(/[₫,]/g, "")) -
                            Number.parseInt(item.price.replace(/[₫,]/g, ""))) /
                            Number.parseInt(item.originalPrice.replace(/[₫,]/g, ""))) *
                            100,
                        )}
                        %
                      </Badge>
                      <Badge variant="secondary" className="bg-white/90 text-gray-900 font-semibold">
                        #{String(index + 1).padStart(2, "0")}
                      </Badge>
                      {item.isSpecial && (
                        <Badge className="bg-yellow-500 text-black font-semibold">Limited Edition</Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-100">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-10 h-10 rounded-full p-0 bg-white/90"
                        onClick={() => toggleFavorite(item.id)}
                      >
                        <Heart
                          className={`w-4 h-4 ${favorites.includes(item.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                        />
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="w-10 h-10 rounded-full p-0 bg-white/90">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative h-96">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div className="space-y-4">
                              <h3 className="text-2xl font-bold">{item.name}</h3>
                              <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-red-600">{item.price}</span>
                                <span className="text-lg line-through text-gray-400">{item.originalPrice}</span>
                              </div>
                              <p className="text-gray-600">{item.description}</p>
                              <div className="space-y-2">
                                <p>
                                  <span className="font-semibold">Chất liệu:</span> {item.material}
                                </p>
                                <p>
                                  <span className="font-semibold">Màu sắc:</span> {item.colors.join(", ")}
                                </p>
                                <p>
                                  <span className="font-semibold">Size:</span> {item.sizes.join(", ")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" variant="secondary" className="w-10 h-10 rounded-full p-0 bg-white/90">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-red-600">{item.price}</span>
                          <span className="text-lg line-through text-gray-400">{item.originalPrice}</span>
                        </div>
                      </div>
                      <div className="p-2 bg-red-100 text-red-600 rounded-lg">{item.icon}</div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex gap-2 mb-4">
                      <Button
                        onClick={() => toggleCart(item.id)}
                        className={`flex-1 ${cart.includes(item.id) ? "bg-green-600" : "bg-red-600"}`}
                      >
                        {cart.includes(item.id) ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Đã Thêm
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Thêm Vào Giỏ
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="text-sm text-gray-500">
                      <span className="font-semibold text-red-600">{item.highlight}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["Áo", "Quần", "Áo khoác", "Hoodie"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {outfitItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="relative h-64">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl font-bold text-red-600">{item.price}</span>
                          <span className="text-sm line-through text-gray-400">{item.originalPrice}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Style Summary */}
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white mb-12">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              ✅ Tổng Quan Phong Cách
            </div>
            <h2 className="text-3xl font-bold mb-6">Bộ Sưu Tập Hoàn Chỉnh</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-3">🎯 Phong Cách</h3>
                <p className="text-red-100">Thể thao, năng động, phong cách trường học</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-3">🎨 Màu Sắc</h3>
                <p className="text-red-100">Đỏ – Trắng – Đen (táo bạo & tự tin)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-3">👥 Phù Hợp Cho</h3>
                <p className="text-red-100">Học sinh, sinh viên, vận động viên, hoạt động nhóm</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Brand Story with Mascot */}
        <Card className="bg-gradient-to-r from-gray-900 to-black text-white mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  🥷 Câu Chuyện Thương Hiệu
                </div>
                <h2 className="text-3xl font-bold mb-6">Son Uchiha - Tinh Thần Ninja</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Lấy cảm hứng từ tinh thần mạnh mẽ và kiên định của các ninja, Son Uchiha Shop mang đến những sản phẩm
                  thể thao không chỉ đẹp mắt mà còn thể hiện cá tính riêng biệt của bạn.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Mỗi sản phẩm đều được thiết kế với sự tỉ mỉ, chất lượng cao và phong cách độc đáo, giúp bạn tự tin thể
                  hiện bản thân trong mọi hoạt động.
                </p>
                <div className="flex gap-4">
                  <Badge className="bg-red-600 text-white px-4 py-2">Chất Lượng Cao</Badge>
                  <Badge className="bg-red-600 text-white px-4 py-2">Thiết Kế Độc Đáo</Badge>
                  <Badge className="bg-red-600 text-white px-4 py-2">Phong Cách Anime</Badge>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/kakashi-mascot.png"
                  alt="Son Uchiha Shop Brand Story"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-red-200 transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4 text-red-600 flex items-center gap-2">👟 Giày Thể Thao Phối Hợp</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">Kiểu dáng:</span> Giày thể thao cổ thấp với thiết kế
                  sạch sẽ và năng động
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Màu sắc:</span> Tùy chọn đen-trắng hoặc đỏ-trắng
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Sử dụng:</span> Hoàn hảo cho trường học, đi bộ hoặc hoạt
                  động thể thao
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4 text-red-600 flex items-center gap-2">🎯 Đối Tượng Mục Tiêu</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-red-200 text-red-700">
                  Học Sinh THPT
                </Badge>
                <Badge variant="outline" className="border-red-200 text-red-700">
                  Sinh Viên Đại Học
                </Badge>
                <Badge variant="outline" className="border-red-200 text-red-700">
                  Vận Động Viên
                </Badge>
                <Badge variant="outline" className="border-red-200 text-red-700">
                  Người Yêu Thể Thao
                </Badge>
                <Badge variant="outline" className="border-red-200 text-red-700">
                  Thành Viên Đội
                </Badge>
                <Badge variant="outline" className="border-red-200 text-red-700">
                  Hoạt Động Nhóm
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SU</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Son Uchiha Shop</h3>
                  <p className="text-gray-400 text-sm">Premium Sportswear</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Chuyên cung cấp trang phục thể thao chất lượng cao với thiết kế năng động, phù hợp cho mọi hoạt động và
                phong cách sống.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">ig</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">yt</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Sản Phẩm</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="">
                    Áo Thể Thao
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Quần Short
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Áo Khoác
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Hoodie
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Phụ Kiện
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Hỗ Trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="">
                    Hướng Dẫn Mua Hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Chính Sách Đổi Trả
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Bảng Size
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Câu Hỏi Thường Gặp
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Liên Hệ</h4>
              <div className="space-y-3 text-gray-400">
                <p>📍 123 Đường ABC, Quận XYZ, TP.HCM</p>
                <p>📞 0123 456 789</p>
                <p>✉️ contact@sonuchihashop.com</p>
                <p>🕒 8:00 - 22:00 (Thứ 2 - CN)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Son Uchiha Shop. All rights reserved. | Thiết kế bởi Son Uchiha Team</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
