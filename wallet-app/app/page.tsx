"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, TrendingUp, Lock, Clock, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_diawzqdiawzqdiaw-xEnxtRQrk04nIjVu9QqBe8kZu4pB7f.png"
            alt="Security"
            fill
            className="object-cover slideshow-image"
            priority
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_rcimysrcimysrcim-5lNpm0VlSzWlcGmVAYlW3Xl0MH56mg.png"
            alt="Speed"
            fill
            className="object-cover slideshow-image"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_gounlgounlgounlg-Wic2O93ypGgzHufGcQwvnkgVG43F1w.png"
            alt="Tracking"
            fill
            className="object-cover slideshow-image"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_bl3kqnbl3kqnbl3k-GwXVHrvQxJUdb1Lh4sQGUxMbnn35pr.png"
            alt="Wallet Protection"
            fill
            className="object-cover slideshow-image"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_gounlgounlgounlg-4pZEIIblN7CgtcRsjSjjpMbVcHKFBo.png"
            alt="Control"
            fill
            className="object-cover slideshow-image"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85 backdrop-blur-sm" />
      </div>

      <section className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 animate-fade-in backdrop-blur-sm">
            <p className="text-sm font-medium text-primary">Secure Digital Wallet Platform</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance animate-fade-in-up">
            Your Money,{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Experience seamless financial management with instant deposits, secure withdrawals, and real-time
            transaction tracking—all in one beautiful interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <Button
              asChild
              size="lg"
              className="text-lg h-12 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              <Link href="/login">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg h-12 px-8 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-transparent"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose WalletApp?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with security, speed, and simplicity in mind
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 group bg-card/50 backdrop-blur-sm">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_diawzqdiawzqdiaw-xEnxtRQrk04nIjVu9QqBe8kZu4pB7f.png"
                alt="Bank-Level Security"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
            </div>
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Bank-Level Security</CardTitle>
              <CardDescription className="text-base">
                Your funds are protected with military-grade encryption and multi-factor authentication
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 group bg-card/50 backdrop-blur-sm">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_rcimysrcimysrcim-5lNpm0VlSzWlcGmVAYlW3Xl0MH56mg.png"
                alt="Lightning Fast"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
            </div>
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
              <CardDescription className="text-base">
                Instant deposits and withdrawals with real-time balance updates and notifications
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 group bg-card/50 backdrop-blur-sm">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_gounlgounlgounlg-Wic2O93ypGgzHufGcQwvnkgVG43F1w.png"
                alt="Complete Tracking"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
            </div>
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Complete Tracking</CardTitle>
              <CardDescription className="text-base">
                Monitor every transaction with detailed history, insights, and spending analytics
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Everything you need to manage your finances
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Secure Transactions</h3>
                    <p className="text-muted-foreground">
                      Every transaction is encrypted and verified for maximum security
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">24/7 Access</h3>
                    <p className="text-muted-foreground">Access your wallet anytime, anywhere, from any device</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Detailed Analytics</h3>
                    <p className="text-muted-foreground">Track your spending patterns and financial health over time</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="overflow-hidden border-2 border-primary/30 group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_bl3kqnbl3kqnbl3k-GwXVHrvQxJUdb1Lh4sQGUxMbnn35pr.png"
                  alt="Wallet Dashboard Preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-semibold text-foreground">Your secure wallet awaits</p>
                  <p className="text-sm text-muted-foreground">Manage everything in one place</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground border-0 shadow-2xl shadow-primary/30 transition-all duration-300 hover:shadow-3xl hover:shadow-primary/40 backdrop-blur-sm">
          <CardContent className="p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Ready to take control?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 text-pretty max-w-2xl mx-auto">
              Join thousands of users who trust WalletApp to manage their finances securely and efficiently.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg h-12 px-8 bg-background/90 text-foreground hover:bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/login">
                Create Your Wallet <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
