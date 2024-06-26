import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Sumika WhatsApp Group Chat',
    description: 'Join Now'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <meta property="og:image" content="/sumika.svg" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
