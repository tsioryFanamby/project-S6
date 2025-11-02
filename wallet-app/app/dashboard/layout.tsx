import type React from "react"
import { AppHeader } from "@/components/app-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  )
}
