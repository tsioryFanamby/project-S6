"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Wallet, LogOut, Home, LayoutDashboard, History } from "lucide-react"
import { useEffect, useState } from "react"

export function AppHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("user")
    setIsLoggedIn(!!user)
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const isLoginPage = pathname === "/login"

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href={isLoggedIn ? "/overview" : "/"}
          className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
            <Wallet className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            WalletApp
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-sm hover:shadow-primary/20"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>

          {isLoggedIn ? (
            <>
              <Button
                variant={pathname === "/overview" ? "default" : "ghost"}
                size="sm"
                asChild
                className="transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-sm hover:shadow-primary/20"
              >
                <Link href="/overview">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Link>
              </Button>
              <Button
                variant={pathname === "/transactions" ? "default" : "ghost"}
                size="sm"
                asChild
                className="transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-sm hover:shadow-primary/20"
              >
                <Link href="/transactions">
                  <History className="mr-2 h-4 w-4" />
                  History
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="transition-all duration-300 hover:bg-destructive/10 hover:text-destructive hover:shadow-sm hover:shadow-destructive/20"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              {!isLoginPage && (
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="transition-all duration-300 hover:scale-105 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 bg-primary hover:bg-primary/90"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
