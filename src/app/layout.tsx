import type { Metadata } from 'next'
import { Inter, Rowdies, Quicksand, Roboto } from 'next/font/google'

import './globals.css'
import NavBar from './_globalComponents/NavBar'
import LenisScroll from './_globalComponents/LenisScroll'
import Footer from './_globalComponents/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

//promena do ktere ukladam font fam- posilam do Body + v tailwinnd configu mam hozenej ten font
const rowdies = Rowdies({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-rowdies',
})
const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-roboto',
})
const quicksand = Quicksand({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-quicksand',
})

export const metadata: Metadata = {
    title: 'gsap',
    description: 'gsap training',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className=" overscroll-none">
            <body
                className={`${inter.className} ${rowdies.variable} ${roboto.variable} `}
            >
                <NavBar></NavBar>
                <LenisScroll>{children}</LenisScroll>
                <Footer></Footer>
            </body>
        </html>
    )
}
