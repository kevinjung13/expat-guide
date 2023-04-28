import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import SectionLayout from "@/components/SectionLayout";

const Images = [
  {},
]

export default function Explore() {

  /* State for changing Images */
  const [img, setImg] = useState("")

  /* Function for changing Images */
  function handleClick() {
    setImg("")
   }

  return (
    <>
      <Head>
      <title> Explore | Farang</title >
      </Head>
      <SectionLayout bgImg={`bg-[url("/img/sections/explore-img.jpg")]`}>
        <section
          className={
            "relative flex min-h-screen flex-col items-center justify-between p-32"
          }
        >
          <div
            className={"flex flex-col justify-center align-center text-white"}
          >
            <h1 className={"text-6xl md:text-8xl pb-3"}>EXPLORE</h1>
            <h4 className={"text-2xl md:text-4xl pt-2 pl-12 md:pl-20"}>
              Your New Home
            </h4>
          </div>
        </section>
      </SectionLayout>
      {/* Second Section */}
      <section>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        The city is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">your oyster</span>
                    </h2>
                    <p className="max-w-2xl mx-auto">
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                    <div className="flex items-center justify-center gap-x-3 space-y-0 ">
                        <Link href="javascript:void(0)" onClick={handleClick} className="block py-2 px-4 text-black font-medium duration-150 hover:text-gray-500  hover:shadow-none">
                            Dining
                        </Link>
                        <Link href="javascript:void(0)" onClick={handleClick} className="block py-2 px-4  text-black font-medium duration-150 hover:text-gray-500  hover:shadow-none">
                            Activities
              </Link>
              <Link href="javascript:void(0)" onClick={handleClick} className="block py-2 px-4 text-black font-medium duration-150 hover:text-gray-500  hover:shadow-none">
                            Attractions
              </Link>
              <Link href="javascript:void(0)" onClick={handleClick} className="block py-2 px-4 text-black font-medium duration-150 hover:text-gray-500  hover:shadow-none">
                            Nightlife
              </Link>
              <Link href="javascript:void(0)" onClick={handleClick} className="block py-2 px-4 text-black font-medium duration-150 hover:text-gray-500  hover:shadow-none">
                            Nearby Destinations
              </Link>
              <Link href="javascript:void(0)" onClick={handleClick} className="block py-2 px-4 text-black font-medium duration-150 hover:text-gray-500  hover:shadow-none">
                            Shopping
                        </Link>
                    </div>
                </div>
                <div className="mt-14">
                    <img src="/img/explore/dine-img.jpg" className="w-full shadow-lg rounded-lg border" alt="" />
                </div>
            </div>
        </section>
    </>
  );
}
