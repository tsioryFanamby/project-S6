import { TransactionHistory } from "@/components/transaction-history"
import { TransactionStats } from "@/components/transaction-stats"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { TrendingUp, PieChart, Calendar } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Transaction History</h1>
          <p className="text-lg text-muted-foreground">View and manage all your wallet transactions</p>
        </div>

        <div className="mb-6 animate-fade-in-up">
          <TransactionStats />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-fade-in-up animation-delay-100">
            <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Spending Insights"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Spending Insights</p>
                  <p className="text-xs text-muted-foreground">Track your patterns</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-fade-in-up animation-delay-200">
            <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Category Breakdown"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <PieChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Category Breakdown</p>
                  <p className="text-xs text-muted-foreground">Analyze spending</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-fade-in-up animation-delay-300">
            <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Monthly Reports"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Monthly Reports</p>
                  <p className="text-xs text-muted-foreground">Export & review</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="animate-fade-in-up animation-delay-100">
          <TransactionHistory showAll />
        </div>
      </div>
    </div>
  )
}
