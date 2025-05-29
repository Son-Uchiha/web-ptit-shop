import { Card, CardContent } from "@/components/ui/card"
import { Users, Package, Star, Award } from "lucide-react"

export default function ShopStats() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10,000+",
      label: "Khách Hàng Hài Lòng",
      color: "text-blue-600",
    },
    {
      icon: <Package className="w-8 h-8" />,
      number: "500+",
      label: "Sản Phẩm Chất Lượng",
      color: "text-green-600",
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.9/5",
      label: "Đánh Giá Trung Bình",
      color: "text-yellow-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "3+",
      label: "Năm Kinh Nghiệm",
      color: "text-red-600",
    },
  ]

  return (
    <div className="bg-gradient-to-r from-gray-50 to-red-50 py-12 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Son Uchiha Shop - Thành Tích Nổi Bật</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Được tin tưởng bởi hàng nghìn khách hàng trên toàn quốc với chất lượng sản phẩm và dịch vụ xuất sắc
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className={`${stat.color} mb-4 flex justify-center`}>{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
