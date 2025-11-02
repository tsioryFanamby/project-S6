"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useWallet } from "@/hooks/use-wallet"
import { Wallet, TrendingUp, TrendingDown } from "lucide-react"

export function WalletOverview() {
  const { balance, totalDeposits, totalWithdrawals } = useWallet()

  return (
    <Card className="transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Wallet Balance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground mb-2">Current Balance</p>
            <p className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              ${balance.toFixed(2)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm font-medium">Deposits</p>
              </div>
              <p className="text-2xl font-bold text-green-600">${totalDeposits.toFixed(2)}</p>
            </div>

            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                  <TrendingDown className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-sm font-medium">Withdrawals</p>
              </div>
              <p className="text-2xl font-bold text-red-600">${totalWithdrawals.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
