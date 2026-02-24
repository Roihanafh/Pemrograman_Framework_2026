import Navbar from '@/components/layouts/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppSheel from '@/components/layouts/AppShell'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppSheel>
      <Component {...pageProps} />
    </AppSheel>
  )
}
