"use client"

import { useState, useEffect } from "react"

export interface Transaction {
  id: string
  type: "deposit" | "withdrawal"
  amount: number
  date: string
  status: "completed" | "pending" | "failed"
}

export function useWallet() {
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    // Load wallet data from localStorage
    const savedBalance = localStorage.getItem("walletBalance")
    const savedTransactions = localStorage.getItem("walletTransactions")

    if (savedBalance) {
      setBalance(Number.parseFloat(savedBalance))
    }

    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions))
    }
  }, [])

  const deposit = (amount: number) => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: "deposit",
      amount,
      date: new Date().toISOString(),
      status: "completed",
    }

    const newBalance = balance + amount
    const newTransactions = [newTransaction, ...transactions]

    setBalance(newBalance)
    setTransactions(newTransactions)

    localStorage.setItem("walletBalance", newBalance.toString())
    localStorage.setItem("walletTransactions", JSON.stringify(newTransactions))
  }

  const withdraw = (amount: number) => {
    if (amount > balance) {
      throw new Error("Insufficient funds")
    }

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: "withdrawal",
      amount,
      date: new Date().toISOString(),
      status: "completed",
    }

    const newBalance = balance - amount
    const newTransactions = [newTransaction, ...transactions]

    setBalance(newBalance)
    setTransactions(newTransactions)

    localStorage.setItem("walletBalance", newBalance.toString())
    localStorage.setItem("walletTransactions", JSON.stringify(newTransactions))
  }

  const totalDeposits = transactions.filter((t) => t.type === "deposit").reduce((sum, t) => sum + t.amount, 0)

  const totalWithdrawals = transactions.filter((t) => t.type === "withdrawal").reduce((sum, t) => sum + t.amount, 0)

  return {
    balance,
    transactions,
    deposit,
    withdraw,
    totalDeposits,
    totalWithdrawals,
  }
}
