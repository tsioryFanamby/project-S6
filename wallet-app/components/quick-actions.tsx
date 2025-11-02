"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DepositDialog } from "@/components/deposit-dialog"
import { WithdrawDialog } from "@/components/withdraw-dialog"

export function QuickActions() {
  const router = useRouter()
  const [depositOpen, setDepositOpen] = useState(false)
  const [withdrawOpen, setWithdrawOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <>
      <Card className="transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            className="w-full justify-start bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 hover:scale-105"
            onClick={() => setDepositOpen(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Deposit Funds
          </Button>
          <Button
            className="w-full justify-start bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105"
            onClick={() => setWithdrawOpen(true)}
          >
            <Minus className="h-4 w-4 mr-2" />
            Withdraw Funds
          </Button>
          <Button className="w-full justify-start bg-transparent" variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>

      <DepositDialog open={depositOpen} onOpenChange={setDepositOpen} />
      <WithdrawDialog open={withdrawOpen} onOpenChange={setWithdrawOpen} />
    </>
  )
}
