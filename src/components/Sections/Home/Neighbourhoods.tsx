import Link from "next/link";

export default function Neighbourhoods() {
  return (
    <>
      <section className={"py-14 bg-white w-full"}>
        <div className={"max-w-screen-xl mx-auto md:px-8"}>
          <div className={"items-center gap-x-12 sm:px-4 md:px-0 lg:flex"}>
            {/* Image */}
            <div className={"flex-1 sm:hidden lg:block"}>
              <img
                src={"/img/card/neighbourhood-img.jpg"}
                className={"md:max-w-lg sm:rounded-lg"}
                alt={"Image"} />
            </div>
            <div className={"max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"}>
              {/* Title */}
              <h3 className={"text-xl text-cyan-700 font-semibold"}>
                Neighbourhoods
              </h3>
              {/* Subtitle */}
              <h2 className={"text-gray-800 text-3xl font-semibold sm:text-4xl"}>
                Find your home in the city of angels
              </h2>
              {/* Description */}
              <p className={"mt-3 text-gray-500"}>
                From luxury condos by the Chao Phraya river to budget-friendly
                houses on the outskirts of the city.
              </p>
              {/* Discover Link */}
              <Link
                href={"/neighbourhoods"}
                target={"_blank"}
                className={"inline-flex gap-x-1 items-center text-md text-cyan-700 hover:text-yellow-700 duration-150 font-medium"}>
                Discover
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  viewBox={"0 0 20 20"}
                  fill={"currentColor"}
                  className={"w-5 h-5"}>
                  <path
                    fillRule={"evenodd"}
                    d={"M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"}
                    clipRule={"evenodd"}/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}