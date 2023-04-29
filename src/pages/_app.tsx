import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import { store } from '@/store'

const font = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </main>
  )
}
