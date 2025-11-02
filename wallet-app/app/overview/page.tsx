import { WalletOverview } from "@/components/wallet-overview"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"
import { PromoBanner } from "@/components/promo-banner"
import { FinancialInsights } from "@/components/financial-insights"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-lg text-muted-foreground">Here's an overview of your wallet activity</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-6">
          <div className="lg:col-span-2 animate-fade-in-up">
            <WalletOverview />
          </div>
          <div className="animate-fade-in-up animation-delay-100">
            <QuickActions />
          </div>
        </div>

        <div className="mb-6 animate-fade-in-up animation-delay-200">
          <h2 className="text-2xl font-bold text-foreground mb-4">Financial Insights</h2>
          <FinancialInsights />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          <div className="animate-fade-in-up animation-delay-300">
            <RecentActivity />
          </div>
          <Card className="overflow-hidden border-2 border-primary/20 group hover:border-primary/40 transition-all duration-300 animate-fade-in-up animation-delay-400">
            <div className="relative h-full min-h-[300px]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Financial Growth"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/30" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Grow Your Wealth</h3>
                <p className="text-muted-foreground">
                  Track your financial journey with detailed insights and analytics
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-6 animate-fade-in-up animation-delay-500">
          <PromoBanner
            title="Unlock Premium Features"
            description="Upgrade to premium and get access to advanced analytics, priority support, and exclusive rewards."
            buttonText="Learn More"
            buttonLink="/overview"
            imageSrc="/placeholder.svg?height=600&width=800"
            variant="gradient"
          />
        </div>
      </div>
    </div>
  )
}
