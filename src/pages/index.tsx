import Link from "next/link";
import Card from "@/components/Common/Card/Card";
import SectionLayout from "@/components/SectionLayout";

export default function Home() {
  return (
    <>
      {/* First Section */}
      <SectionLayout bgImg={`bg-[url("/img/sections/bkk-skyline.jpg")]`}>
        <section
          className={
            "relative flex flex-col min-h-screen items-center justify-between p-32"}>
          <div
            className={"flex flex-col justify-center align-center text-white "}>
            <h1 className={"text-6xl md:text-8xl pb-3"}>BANGKOK</h1>
            <h4 className={"text-2xl md:text-4xl pt-3 pl-24 md:pl-36"}>
            Thailand
            </h4>
          </div>
        </section>
      </SectionLayout>
      {/* Second Section */}
      <section className={"bg-white max-h-fit pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl font-semibold"}>The City of Angels</h1>
        </div>
        <div className={"flex-col place-content-center p-6 text-lg"}>
          <p className={"pb-7"}>
           Sawasdee krub and welcome to Bangkok!
           Officially known as "Krung Thep Maha Nakhon" or simply Krung Thep in Thai,
           Bangkok is one of the most vibrant and diverse cities in the region (and possibily the world).
          </p>
          <p className={"pb-7"}>
           "Farang" - a Thai word for foreigner (and the name of this e-guide), was created out of a desire to help 
           both exisiting and newly relocated expats navigate around the city,
           as well as provide suggestions on numerous subjects that could potentially enhance your experience during your time here.
          </p>
          <p className={"pb-7"}>
           As you settle in (or learn more about the city), I hope that Farang can serve as your guide.
           Feel free to reach out for any questions or inquiries.
          </p>
          <p className={"pb-8"}>
           All the best!
          </p>
          <p>
           - Kevin - 
          </p>
        </div> 
      </section>
      {/* Third Section */}
        <Card />
      {/* Fourth Section */}
      <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="/img/card/neighbourhood-img.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                            Neighbourhoods
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Find your new home in the concrete jungle
                        </p>
                        <p className="mt-3 text-gray-600">
                            From luxury condos by the Chao Phraya river to budget-friendly houses on the outskirts of the city.
                        </p>
                        <Link href="/neighbourhoods" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
