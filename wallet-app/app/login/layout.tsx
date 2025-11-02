import type React from "react"
import { AppHeader } from "@/components/app-header"

export default function LoginLayout({
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
