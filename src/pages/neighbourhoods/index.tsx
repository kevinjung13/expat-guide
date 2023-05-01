import Head from "next/head";
import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";
import { neighbourhoodsCards } from "@/data/data";

export default function Neighbourhoods() {

  return (
    <>
      <Head>
        <title> Neighbourhoods | Farang</title>
      </Head>
      {/* First Section */}
      <HeroLayout bgImg={`bg-[url("/img/sections/neighbourhoods-img.jpg")]`}>
        <section
          className={
            "relative flex min-h-screen flex-col items-center justify-between p-32"
          }
        >
          <div
            className={"flex flex-col justify-center align-center text-white"}
          >
            <h1 className={"text-5xl md:text-7xl pb-3"}>NEIGHBOURHOODS</h1>
            <h4 className={"text-2xl pt-2 pl-28 md:text-4xl md:pl-40"}>
              Home Away From Home
            </h4>
          </div>
        </section>
      </HeroLayout>
      {/* Second Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">
              Areas
            </h1>
            <p className="text-gray-600 mt-2">
              Explore the different areas of Bangkok and find your new
              neighbourhood.
            </p>
          </div>
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {neighbourhoodsCards.map((item, idx) => (
              <li className="border rounded-lg">
                <div className=" flex items-start justify-between p-4">
                  <div className="space-y-2 text-center">
                    <img src={`${item.img}`} alt={"image"}></img>
                    <h4 className="text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="py-5 px-4 text-center">
                  <Link href={item.href}>
                  <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">
                    Explore
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
