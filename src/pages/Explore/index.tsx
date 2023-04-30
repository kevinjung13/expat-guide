import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import HeroLayout from "@/components/Layout/HeroLayout";

const images = [
  {
    image: "/img/explore/dining/dining-img.jpg",
    title: "Dining",
    href: "/explore/dining"
  },
  {
    image: "/img/explore/activities/.jpg",
    title: "Activities",
    href: "/explore/activities"
  },
  {
    image: "/img/explore/attractions/.jpg",
    title: "Attractions",
    href: "/explore/attractions"
  },
  {
    image: "/img/explore/nightlife/nightlife-img.jpg",
    title: "Nightlife",
    href: "/explore/nightlife"
  },
  {
    image: "/img/explore/nearby-destinations/.jpg",
    title: "Nearby Destinations",
    href: "/explore/nearby-destinations"
  },
  {
    image: "/img/explore/shopping/.jpg",
    title: "Shopping",
    href: "/explore/shopping",

  },
];


export default function Explore() {
  /* State for changing Images */
  const [img, setImg] = useState(0);

  return (
    <>
      <Head>
        <title> Explore | Farang</title>
      </Head>
      <HeroLayout bgImg={`bg-[url("/img/sections/explore-img.jpg")]`}>
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
      </HeroLayout>
      {/* Second Section */}
      <section id={"options"}>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              The city is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                your oyster
              </span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Find everything you need on the menu below, from 
            </p>
            <div className="flex items-center justify-center gap-x-3 space-y-0 ">
            <ul className="flex gap-x-3 justify-center">
                        {
                            images.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  href={item.href}
                                  className={"block py-2 px-4 text-black font-medium duration-150 hover:text-gray-500 hover:shadow-none"}
                                 onClick={() => setImg(idx)}>
                                  {item.title}
                                  </Link>
                                </li>
                            
                            ))
                        }
                    </ul>
            </div>
          </div>
          <div className="mt-14">
            <ul>
                        {
                            images.map((item, idx) => (
                                img == idx ? (
                                    <li key={idx}>
                                        <figure>
                                    <div className="mt-6">
                                      <Link href={item.href} className="">
                                        <img src={item.image} className={"max-w-md mx-auto"} />
                                      </Link>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
          </div>
          <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            images.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${img == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setImg(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
        </div>
      </section>
    </>
  );
}
