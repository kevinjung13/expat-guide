import Head from "next/head";
import Link from "next/link";
import HomePageCards from "@/components/Cards/HomePageCards";
import HeroLayout from "@/components/Layout/HeroLayout";

/* Resources Cards */
const posts = [
  {
    title: "News",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
    href: "javascript:void(0)",
  },
  {
    title: "Social Media Groups",
    desc: "According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film",
    href: "javascript:void(0)",
  },
  {
    title: "Plant-Based",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    href: "javascript:void(0)",
  },
  {
    title: "Others",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the",
    href: "javascript:void(0)",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title> Farang | Bangkok Expat Guide</title>
      </Head>
      {/* Image Section */}
      <HeroLayout bgImg={`bg-[url("/img/sections/home-img.jpg")]`}>
        <section
          className={
            "relative flex flex-col min-h-screen items-center justify-between p-32"
          }
        >
          <div
            className={"flex flex-col justify-center align-center text-white "}
          >
            <h1 className={"text-6xl md:text-8xl pb-3"}>BANGKOK</h1>
            <h4 className={"text-2xl md:text-4xl pt-3 pl-24 md:pl-36"}>
              Thailand
            </h4>
          </div>
        </section>
      </HeroLayout>
      {/* Introduction Section */}
      <section className={"bg-white max-w-screen-lg pt-16 mx-auto md:px-32"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl font-semibold"}>The City of Angels</h1>
        </div>
        <div className={"flex-col place-content-center p-6 text-lg mb-3 mt-3"}>
          <p className={"pb-7"}>
            Sawasdee krub and welcome to Bangkok! Officially known as "Krung
            Thep Maha Nakhon" or simply "Krung Thep" in Thai, Bangkok is one of
            the most vibrant and diverse cities in the region (and possibily the
            world).
          </p>
          <p className={"pb-7"}>
            "Farang" - a Thai word for foreigner (and the name of this e-guide),
            was created out of a desire to help both exisiting and newly
            relocated expats navigate around the city, as well as provide
            suggestions on numerous subjects that could potentially enhance your
            experience during your time here.
          </p>
          <p className={"pb-7"}>
            As you settle in (or learn more about the city), I hope that Farang
            can serve as your guide. Feel free to reach out for any questions or
            inquiries.
          </p>
          <p className={"pb-8"}>All the best!</p>
          <p>- Kevin -</p>
        </div>
      </section>
      {/* Explore Section */}
      <section className="bg-stone-200 pt-16 pb-8 max-w-screen-xl md:px-8">
        <div className="text-center">
          <Link href={"/explore"}>
            <h1 className="text-5xl text-black font-semibold">Explore</h1>
          </Link>
          <p className="mt-3 text-cyan-700">
            Everything you need to know outside of work.
          </p>
        </div>
        <HomePageCards />
      </section>
      {/* Neighbourhoods Section */}
      <section className="py-14 bg-white">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="/img/card/neighbourhood-img.jpg"
                className="md:max-w-lg sm:rounded-lg"
                alt="Image"
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className={"text-xl text-cyan-700 font-semibold"}>
                Neighbourhoods
              </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Find your home in the city of angels
              </p>
              <p className="mt-3 text-gray-600">
                From luxury condos by the Chao Phraya river to budget-friendly
                houses on the outskirts of the city.
              </p>
              <Link
                href="/neighbourhoods"
                className="inline-flex gap-x-1 items-center text-md text-cyan-700 hover:text-indigo-500 duration-150 font-medium"
              >
                Discover
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Resources Section */}
      <section className=" bg-gray-200 pt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="max-w-lg">
          <h1 className="text-5xl text-gray-800 font-semibold">Resources</h1>
          <p className="mt-3 text-gray-500">
            Stay up to date with news, events and much more.
          </p>
        </div>
        <div className="mt-9 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
          {posts.map((item, idx) => (
            <article className="mt-5 pt-8 md:pt-0" key={idx}>
              <Link href={item.href}>
                <div className={""}>
                  <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
