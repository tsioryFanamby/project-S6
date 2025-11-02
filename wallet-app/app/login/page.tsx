import { LoginForm } from "@/components/login-form"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Shield, Zap, Lock } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 pt-24">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <Card className="hidden lg:block overflow-hidden border-2 border-primary/20 animate-fade-in">
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=1200&width=800"
              alt="Secure Wallet Platform"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Financial Future Starts Here</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Join thousands of users managing their finances securely
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Bank-level security</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Instant transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">End-to-end encryption</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="w-full max-w-md mx-auto animate-fade-in-up">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">Sign in to your wallet account</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
