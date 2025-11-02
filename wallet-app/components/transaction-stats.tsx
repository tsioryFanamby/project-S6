"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useWallet } from "@/hooks/use-wallet"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"

export function TransactionStats() {
  const { transactions, totalDeposits, totalWithdrawals } = useWallet()

  const completedTransactions = transactions.filter((t) => t.status === "completed").length
  const pendingTransactions = transactions.filter((t) => t.status === "pending").length

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Deposits</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">${totalDeposits.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {transactions.filter((t) => t.type === "deposit").length} transactions
          </p>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Withdrawals</CardTitle>
          <TrendingDown className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">${totalWithdrawals.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {transactions.filter((t) => t.type === "withdrawal").length} transactions
          </p>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">All Transactions</CardTitle>
          <Activity className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{transactions.length}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {completedTransactions} completed, {pendingTransactions} pending
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
