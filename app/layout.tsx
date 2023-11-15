/* eslint-disable @next/next/no-sync-scripts */
// https://nextjs.org/docs/app/api-reference/functions/cookies
// https://github.com/vercel/next.js/issues/49373 dynamic-force
import { ReactNode } from 'react'
import '../styles/globals.scss'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Senno | Ideas',
  description: 'Senno Generation',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={`bg-white dark:bg-black-950 ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
