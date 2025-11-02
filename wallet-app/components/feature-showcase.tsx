import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Shield, Smartphone, Globe, CreditCard } from "lucide-react"

export function FeatureShowcase() {
  const features = [
    {
      title: "Multi-Platform Access",
      description: "Access your wallet from any device, anywhere in the world",
      image: "/placeholder.svg?height=400&width=600",
      icon: Smartphone,
    },
    {
      title: "Global Payments",
      description: "Send and receive money internationally with low fees",
      image: "/placeholder.svg?height=400&width=600",
      icon: Globe,
    },
    {
      title: "Virtual Cards",
      description: "Create virtual cards for secure online shopping",
      image: "/placeholder.svg?height=400&width=600",
      icon: CreditCard,
    },
    {
      title: "Advanced Security",
      description: "Biometric authentication and real-time fraud detection",
      image: "/placeholder.svg?height=400&width=600",
      icon: Shield,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <Card
            key={index}
            className="overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        )
      })}
    </div>
  )
}
