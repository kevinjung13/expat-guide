import { Castoro , Inter } from 'next/font/google';

const castoro = Castoro({ weight: "400", subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={`${inter.className} relative flex min-h-screen flex-col items-center justify-between p-24`}>
      <section className={"bg-green-500 flex-col justify-center align-center text-white"}>
        <h1 className={`${castoro.className} text-7xl pb-3`}>Bangkok</h1>
        <h4 className={"text-2xl pt-3"}>The City of Angels</h4> 
      </section>
    </main>
  )
}
