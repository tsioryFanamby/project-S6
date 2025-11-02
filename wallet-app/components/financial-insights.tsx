import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { TrendingUp, DollarSign, Activity, PieChart } from "lucide-react"

export function FinancialInsights() {
  const insights = [
    {
      title: "Monthly Growth",
      value: "+12.5%",
      description: "Compared to last month",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/10",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Average Transaction",
      value: "$245.80",
      description: "Per transaction",
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Activity Score",
      value: "8.4/10",
      description: "Very active",
      icon: Activity,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/10",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Top Category",
      value: "Shopping",
      description: "35% of spending",
      icon: PieChart,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/10",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {insights.map((insight, index) => {
        const Icon = insight.icon
        return (
          <Card
            key={index}
            className="overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-24 w-full overflow-hidden">
              <Image
                src={insight.image || "/placeholder.svg"}
                alt={insight.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
              <div
                className={`absolute top-3 right-3 w-10 h-10 rounded-lg ${insight.bgColor} backdrop-blur-sm flex items-center justify-center`}
              >
                <Icon className={`h-5 w-5 ${insight.color}`} />
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{insight.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-bold ${insight.color} mb-1`}>{insight.value}</p>
              <p className="text-xs text-muted-foreground">{insight.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
