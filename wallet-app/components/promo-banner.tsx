import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

interface PromoBannerProps {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  imageSrc?: string
  variant?: "default" | "gradient"
}

export function PromoBanner({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc = "/placeholder.svg?height=400&width=800",
  variant = "default",
}: PromoBannerProps) {
  return (
    <Card
      className={`overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl group ${
        variant === "gradient" ? "border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5" : "border-primary/20"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-auto overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/60 to-transparent md:from-transparent md:via-transparent md:to-card" />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Featured</span>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4 text-balance">{title}</h3>
          <p className="text-muted-foreground text-lg mb-6 text-pretty">{description}</p>
          {buttonText && buttonLink && (
            <div>
              <Button
                asChild
                size="lg"
                className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                <a href={buttonLink}>
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
