import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { inter } from './fonts/inter';
// import Navbar from '../components/Navbar'; // adjust path if needed
// Update the path below if Navbar is located elsewhere, e.g. './components/Navbar' or './Navbar'
import { NavigationMenu } from "../components/ui/navigation-menu" // adjust path if needed

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Software Developer Portfolio",
  description: "Professional portfolio showcasing software development skills and projects",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className={inter.variable}>
        <NavigationMenu /> {/* <-- Always visible */}
        {children}
      </body>
    </html>
  )
}
