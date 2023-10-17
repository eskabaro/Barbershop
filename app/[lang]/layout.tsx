import './globals.css'

import { Locale, i18n } from '@/i18n.config'

import { Roboto_Mono } from 'next/font/google'

import { Header } from '@/components/header'
import { RootProvider } from '@/providers/RootProvider'
import { Container } from '@/components/container'
import { ContextProvider } from '@/providers/ContextProvider'
import { getDictionary } from '@/lib/dictionary'

const roboto = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale, }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { header } = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className={roboto.className}>
        <RootProvider>
          <ContextProvider>
            <Container>
              <Header content={header} />
              {children}
            </Container>
          </ContextProvider>
        </RootProvider>
      </body>
    </html>
  )
}
