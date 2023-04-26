import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer';
import { Castoro } from 'next/font/google';

const castoro = Castoro({ weight: "400", subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${castoro.className}`}>
        <Component  {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
