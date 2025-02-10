import { DM_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/app/(components)/navbar'
import './globals.css'
import Footer from './(components)/footer'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jain Pumps and Solar',
  description: 'Electrical & Solar Solutions in Pumping Segment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}