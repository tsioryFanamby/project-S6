"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, TrendingUp, TrendingDown, Wallet, BarChart3, Zap } from "lucide-react"

export default function BlockchainTradingPage() {
  const [btcPrice, setBtcPrice] = useState(67420.5)
  const [ethPrice, setEthPrice] = useState(3245.8)
  const [swapAmount, setSwapAmount] = useState("")
  const [selectedToken, setSelectedToken] = useState("BTC")

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBtcPrice((prev) => prev + (Math.random() - 0.5) * 100)
      setEthPrice((prev) => prev + (Math.random() - 0.5) * 50)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-glow">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CryptoFlow
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Trade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Markets
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Analytics
            </a>
          </nav>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Trade the Future of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Finance</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience lightning-fast trades, minimal fees, and maximum security on the most advanced blockchain trading
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow">
              Start Trading Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              View Markets
            </Button>
          </div>
        </div>
      </section>

      {/* Trading Interface */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Price Cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-pulse-blue">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Bitcoin</CardTitle>
                  <Badge variant="secondary" className="bg-success/20 text-success">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +2.4%
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${btcPrice.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">BTC/USD</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-pulse-blue">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ethereum</CardTitle>
                  <Badge variant="secondary" className="bg-destructive/20 text-destructive">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    -1.2%
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${ethPrice.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">ETH/USD</p>
                </CardContent>
              </Card>
            </div>

            {/* Trading Panel */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  Quick Trade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={swapAmount}
                    onChange={(e) => setSwapAmount(e.target.value)}
                    className="bg-input border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Token</label>
                  <select
                    className="w-full p-2 bg-input border border-border rounded-md focus:border-primary focus:outline-none"
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                  >
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="ADA">Cardano (ADA)</option>
                    <option value="SOL">Solana (SOL)</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                    onClick={() => console.log("Swap clicked")}
                  >
                    <ArrowUpDown className="w-4 h-4 mr-1" />
                    Swap
                  </Button>
                  <Button
                    className="bg-success hover:bg-success/90 text-success-foreground transition-all duration-300 hover:scale-105"
                    onClick={() => console.log("Buy clicked")}
                  >
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                  <Button
                    className="bg-destructive hover:bg-destructive/90 text-destructive-foreground transition-all duration-300 hover:scale-105"
                    onClick={() => console.log("Sell clicked")}
                  >
                    <TrendingDown className="w-4 h-4 mr-1" />
                    Sell
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose CryptoFlow?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
              <p className="text-muted-foreground">Execute trades in milliseconds with our advanced matching engine.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure Wallet</h4>
              <p className="text-muted-foreground">Your assets are protected by military-grade encryption.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-success" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Advanced Analytics</h4>
              <p className="text-muted-foreground">Make informed decisions with real-time market data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CryptoFlow</span>
          </div>
          <p className="text-muted-foreground mb-4">The future of decentralized trading</p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              API
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
