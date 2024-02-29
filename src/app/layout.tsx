import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const baseFont = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Luiz - Portfolio",
  description: "Welcome to my portfolio page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={baseFont.variable} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
