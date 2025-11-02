"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@/hooks/use-wallet"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

interface TransactionHistoryProps {
  showAll?: boolean
}

export function TransactionHistory({ showAll = false }: TransactionHistoryProps) {
  const { transactions } = useWallet()

  const displayTransactions = showAll ? transactions : transactions.slice(0, 10)

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{showAll ? "All Transactions" : "Transaction History"}</CardTitle>
      </CardHeader>
      <CardContent>
        {displayTransactions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No transactions yet</p>
            <p className="text-sm text-muted-foreground">Start by making a deposit!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {displayTransactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card transition-all duration-300 hover:shadow-md hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      transaction.type === "deposit"
                        ? "bg-green-100 dark:bg-green-900/20"
                        : "bg-red-100 dark:bg-red-900/20"
                    }`}
                  >
                    {transaction.type === "deposit" ? (
                      <ArrowDownLeft className="h-5 w-5 text-green-600" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium capitalize">{transaction.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold text-lg ${transaction.type === "deposit" ? "text-green-600" : "text-red-600"}`}
                  >
                    {transaction.type === "deposit" ? "+" : "-"}${transaction.amount.toFixed(2)}
                  </p>
                  <Badge variant="secondary" className="mt-1 transition-all duration-200 hover:scale-105">
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
