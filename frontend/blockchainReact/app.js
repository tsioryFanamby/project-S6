"use client"

import React from "react"
import ReactDOM from "react-dom"

const { useState, useEffect } = React

// Icon components (simplified SVG icons)
const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
  </svg>
)

const WalletIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
    <circle cx="18" cy="12" r="2"></circle>
  </svg>
)

const ArrowUpDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m21 16-4 4-4-4"></path>
    <path d="M17 20V4"></path>
    <path d="m3 8 4-4 4 4"></path>
    <path d="M7 4v16"></path>
  </svg>
)

const TrendingUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline>
    <polyline points="16,7 22,7 22,13"></polyline>
  </svg>
)

const TrendingDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22,17 13.5,8.5 8.5,13.5 2,7"></polyline>
    <polyline points="16,17 22,17 22,11"></polyline>
  </svg>
)

const BarChart3Icon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
)

function BlockchainTradingApp() {
  const [btcPrice, setBtcPrice] = useState(67420.5)
  const [ethPrice, setEthPrice] = useState(3245.8)
  const [swapAmount, setSwapAmount] = useState("")
  const [selectedToken, setSelectedToken] = useState("BTC")

  useEffect(() => {
    const interval = setInterval(() => {
      setBtcPrice((prev) => prev + (Math.random() - 0.5) * 100)
      setEthPrice((prev) => prev + (Math.random() - 0.5) * 50)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSwap = () => {
    console.log("Swap clicked", { amount: swapAmount, token: selectedToken })
    alert(`Swapping ${swapAmount} ${selectedToken}`)
  }

  const handleBuy = () => {
    console.log("Buy clicked", { amount: swapAmount, token: selectedToken })
    alert(`Buying ${swapAmount} ${selectedToken}`)
  }

  const handleSell = () => {
    console.log("Sell clicked", { amount: swapAmount, token: selectedToken })
    alert(`Selling ${swapAmount} ${selectedToken}`)
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "rgba(26, 26, 26, 0.5)",
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "var(--primary)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="animate-glow"
            >
              <ZapIcon />
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }} className="text-gradient">
              CryptoFlow
            </h1>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <a href="#" style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
              Trade
            </a>
            <a href="#" style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
              Markets
            </a>
            <a href="#" style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
              Portfolio
            </a>
            <button className="btn btn-outline">
              <WalletIcon />
              Connect Wallet
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          padding: "5rem 1rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent, rgba(29, 78, 216, 0.1))",
          }}
        ></div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
            className="animate-float"
          >
            Trade the Future of <span className="text-gradient">Finance</span>
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Experience lightning-fast trades, minimal fees, and maximum security on the most advanced blockchain trading
            platform.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <button className="btn btn-primary animate-glow" style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
              Start Trading Now
            </button>
            <button className="btn btn-outline" style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
              <BarChart3Icon />
              View Markets
            </button>
          </div>
        </div>
      </section>

      {/* Trading Interface */}
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {/* Price Cards */}
            <div className="card animate-pulse-blue" style={{ transition: "all 0.3s ease" }}>
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}
              >
                <h3 style={{ fontSize: "0.875rem", fontWeight: "500" }}>Bitcoin</h3>
                <span className="badge badge-success">
                  <TrendingUpIcon />
                  +2.4%
                </span>
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>${btcPrice.toLocaleString()}</div>
              <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>BTC/USD</p>
            </div>

            <div className="card animate-pulse-blue" style={{ transition: "all 0.3s ease" }}>
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}
              >
                <h3 style={{ fontSize: "0.875rem", fontWeight: "500" }}>Ethereum</h3>
                <span className="badge badge-destructive">
                  <TrendingDownIcon />
                  -1.2%
                </span>
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>${ethPrice.toLocaleString()}</div>
              <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>ETH/USD</p>
            </div>

            {/* Trading Panel */}
            <div className="card">
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <ArrowUpDownIcon />
                Quick Trade
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "500", display: "block", marginBottom: "0.5rem" }}>
                    Amount
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={swapAmount}
                    onChange={(e) => setSwapAmount(e.target.value)}
                    className="input"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "500", display: "block", marginBottom: "0.5rem" }}>
                    Token
                  </label>
                  <select className="select" value={selectedToken} onChange={(e) => setSelectedToken(e.target.value)}>
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="ADA">Cardano (ADA)</option>
                    <option value="SOL">Solana (SOL)</option>
                  </select>
                </div>

                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", paddingTop: "1rem" }}
                >
                  <button className="btn btn-primary" onClick={handleSwap}>
                    <ArrowUpDownIcon />
                    Swap
                  </button>
                  <button className="btn btn-success" onClick={handleBuy}>
                    <TrendingUpIcon />
                    Buy
                  </button>
                  <button className="btn btn-destructive" onClick={handleSell}>
                    <TrendingDownIcon />
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "rgba(26, 26, 26, 0.3)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "3rem" }}>
            Why Choose CryptoFlow?
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div className="card" style={{ textAlign: "center", transition: "all 0.3s ease" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                <ZapIcon />
              </div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Lightning Fast</h4>
              <p style={{ color: "var(--muted-foreground)" }}>
                Execute trades in milliseconds with our advanced matching engine.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center", transition: "all 0.3s ease" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(29, 78, 216, 0.2)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                <WalletIcon />
              </div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Secure Wallet</h4>
              <p style={{ color: "var(--muted-foreground)" }}>
                Your assets are protected by military-grade encryption.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center", transition: "all 0.3s ease" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(22, 163, 74, 0.2)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                <BarChart3Icon />
              </div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Advanced Analytics</h4>
              <p style={{ color: "var(--muted-foreground)" }}>Make informed decisions with real-time market data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "3rem 1rem",
          borderTop: "1px solid var(--border)",
          backgroundColor: "rgba(26, 26, 26, 0.5)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "var(--primary)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ZapIcon />
            </div>
            <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>CryptoFlow</span>
          </div>
          <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem" }}>The future of decentralized trading</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              fontSize: "0.875rem",
              color: "var(--muted-foreground)",
            }}
          >
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Terms
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Support
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              API
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

ReactDOM.render(<BlockchainTradingApp />, document.getElementById("root"))
