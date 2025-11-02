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

interface DepositDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DepositDialog({ open, onOpenChange }: DepositDialogProps) {
  const { deposit } = useWallet()
  const { toast } = useToast()
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleDeposit = () => {
    setError("")
    const depositAmount = Number.parseFloat(amount)

    if (isNaN(depositAmount) || depositAmount <= 0) {
      setError("Please enter a valid amount")
      return
    }

    setIsLoading(true)

    // Simulate processing
    setTimeout(() => {
      deposit(depositAmount)
      toast({
        title: "Deposit Successful",
        description: `$${depositAmount.toFixed(2)} has been added to your wallet.`,
      })
      setAmount("")
      setIsLoading(false)
      onOpenChange(false)
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Deposit Funds</DialogTitle>
          <DialogDescription>Add money to your wallet. Enter the amount you want to deposit.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="deposit-amount">Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="deposit-amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
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
            onClick={handleDeposit}
            disabled={isLoading}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-200 hover:scale-105"
          >
            {isLoading ? "Processing..." : "Deposit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
