import Head from 'next/head';
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer';
import { Castoro } from 'next/font/google';

const castoro = Castoro({ weight: "400", subsets: ['latin'] })

const HeadProps = [
 
  {title: "Activities | Farang"},
  {title: "Attractions | Farang"},
  {title: "Nightlife | Farang"},
  {title: "Nearby Destinations | Farang"}
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/logo-head.png" />
        <meta charSet="utf-8" />
        <title></title>
      </Head>
      <main className={`${castoro.className} w-screen`}>
        <Component  {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
