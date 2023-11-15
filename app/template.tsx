/* eslint-disable @next/next/no-sync-scripts */
// https://nextjs.org/docs/app/api-reference/functions/cookies
import { Header } from '@/components/Layout/Header'
import { ToastContainer } from 'react-toastify'
import { Footer } from '@/components/Layout/Footer'
import { Locale, i18n } from '@/services/i18n'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { getDictionary } from './dictionaries'
import { NextIntlClientProvider } from 'next-intl'

export const metadata = {
  title: 'Senno | Ideas',
  description: 'Senno Generation',
}

export default async function RootTemplate({
  children,
}: {
  children: ReactNode
}) {
  const cookieStore = cookies()
  const locale = (cookieStore.get('locale')?.value ||
    i18n.defaultLocale) as Locale

  const t = await getDictionary(locale)

  return (
    <NextIntlClientProvider locale={locale} messages={t}>
      <ToastContainer
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
      <Header />
      {children}
      <Footer copyright="SennoUi © 2024" />
    </NextIntlClientProvider>
  )
}
