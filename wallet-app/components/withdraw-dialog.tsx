"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useWallet } from "@/hooks/use-wallet"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

interface WithdrawDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WithdrawDialog({ open, onOpenChange }: WithdrawDialogProps) {
  const { withdraw, balance } = useWallet()
  const { toast } = useToast()
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleWithdraw = () => {
    setError("")
    const withdrawAmount = Number.parseFloat(amount)

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setError("Please enter a valid amount")
      return
    }

    if (withdrawAmount > balance) {
      setError("Insufficient funds")
      return
    }

    setIsLoading(true)

    // Simulate processing
    setTimeout(() => {
      try {
        withdraw(withdrawAmount)
        toast({
          title: "Withdrawal Successful",
          description: `$${withdrawAmount.toFixed(2)} has been withdrawn from your wallet.`,
        })
        setAmount("")
        setIsLoading(false)
        onOpenChange(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Withdrawal failed")
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
          <DialogDescription>
            Withdraw money from your wallet. Available balance: ${balance.toFixed(2)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="withdraw-amount">Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="withdraw-amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
                max={balance}
                className="pl-7"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="transition-all duration-200 hover:scale-105"
          >
            Cancel
          </Button>
          <Button
            onClick={handleWithdraw}
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-200 hover:scale-105"
          >
            {isLoading ? "Processing..." : "Withdraw"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
