import Link from "next/link";
import HomePageCards from "@/components/Cards/Home/HomePageCards";

export default function Explore() {
  return (
    <>
      <section className="bg-stone-200 pt-16 pb-8 max-w-screen-xl md:px-8">
        <div className="text-center">
          <Link href={"/explore"}>
            <h1 className="text-5xl font-semibold hover:text-yellow-700">Explore</h1>
          </Link>
          <p className="mt-3 text-cyan-700">
            Everything you need to know outside of work.
          </p>
        </div>
        <HomePageCards />
      </section>
    </>
  )
}