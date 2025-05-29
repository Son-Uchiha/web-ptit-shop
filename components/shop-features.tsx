import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Truck, HeadphonesIcon, RotateCcw } from "lucide-react"

export default function ShopFeatures() {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Giao Hàng Nhanh",
      description: "Miễn phí ship đơn từ 500k",
      badge: "Miễn phí",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Chính Hãng 100%",
      description: "Cam kết chất lượng cao",
      badge: "Uy tín",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Hỗ Trợ 24/7",
      description: "Tư vấn nhiệt tình",
      badge: "Hotline",
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Đổi Trả Dễ Dàng",
      description: "Trong vòng 7 ngày",
      badge: "Linh hoạt",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="border-red-100 hover:shadow-lg transition-shadow group">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
              <div className="text-red-600">{feature.icon}</div>
            </div>
            <Badge variant="outline" className="mb-3 border-red-200 text-red-700">
              {feature.badge}
            </Badge>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
