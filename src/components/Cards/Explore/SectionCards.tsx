import Link from "next/link";
import { useState } from "react";

const options = [
  {
    image: "/img/explore/dining/dining-img.jpg",
    title: "Dining",
    href: "/explore/dining"
  },
  {
    image: "/img/explore/dining/dining-img.jpg",
    title: "Activities",
    href: "/explore/activities"
  },
  {
    image: "/img/explore/dining/dining-img.jpg",
    title: "Attractions",
    href: "/explore/attractions"
  },
  {
    image: "/img/explore/nightlife/nightlife-img.jpg",
    title: "Nightlife",
    href: "/explore/nightlife"
  },
  {
    image: "/img/explore/dining/dining-img.jpg",
    title: "Nearby Destinations",
    href: "/explore/nearby-destinations"
  },
  {
    image: "/img/explore/dining/dining-img.jpg",
    title: "Shopping",
    href: "/explore/shopping",

  },
];

export default function SectionCards() {

  /* State for changing Images */
  const [img, setImg] = useState(0);

  return (
    <>
      <div className={"max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8"}>
          <div className={"space-y-5 max-w-4xl mx-auto text-center"}>
            <h2 className={"text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl"}>
              The city is{" "}
              <span className={"text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]"}>
                your oyster
              </span>
            </h2>
            <p className={"max-w-2xl mx-auto text-sm md:text-base"}>
              Click on each option to see a picture and click on each image to go to each section.
            </p>
            <div className={"flex items-center justify-center gap-x-3 space-y-0"}>
            <ul className={"flex gap-x-3 justify-center"}>
              {/* Options */}
              {options.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    target={"_blank"}
                    className={"block my-2 mx-4 font-medium duration-150 text-black text-sm md:text-base hover:text-gray-500 hover:shadow-none"}>
                    {item.title}
                  </Link>
                </li>))
              }
            </ul>
          </div>
        </div>
        {/* Images */}
        <div className={"mt-14"}>
          <ul>
            {options.map((item, idx) => (
              img == idx ? (
                <li key={idx}>
                  <figure>
                    <div className={"mt-6"}>
                        <img
                        src={item.image}
                        className={"max-w-md mx-auto"} />
                    </div>
                  </figure>
                </li>) : ""))
            }
          </ul>
        </div>
      <div className={"mt-6"}>
          <ul className={"flex gap-x-3 justify-center"}>
            {options.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring 
                  ${img == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                  onClick={() => setImg(idx)}>
                </button>
              </li>))
            }
          </ul>
        </div>
      </div>
    </>
  )
}