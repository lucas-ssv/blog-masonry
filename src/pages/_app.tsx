import { ContextProvider } from '@/contexts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const font = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </main>
  )
}
