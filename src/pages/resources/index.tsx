import Head from "next/head";
import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";
import { News, FacebookGroups, PlantBased, FoodDelivery, Transportation, Others } from "@/data/data";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources | Farang</title>
      </Head>
      <HeroLayout bgImg={`bg-[url("/img/sections/resources-img.jpg")]`}>
        <section
          className={
            "relative flex min-h-screen flex-col items-center justify-between p-24"
          }>
          <div className={"flex-col justify-center align-center text-white"}>
            <h1 className={"text-6xl md:text-8xl pb-3"}>RESOURCES</h1>
            <h4 className={"text-2xl md:text-4xl pt-2 pl-24 md:pl-40"}>
              Stay Informed
            </h4>
          </div>
        </section>
      </HeroLayout>
      {/* News Section */}
      <section className="py-28" id={"news"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              News
            </h1>
            <p className="text-gray-600 mt-2">
              Stay up to date on what is happening in Thailand and around the region.
            </p>
          </div>
          <ul className="mt-12 divide-y space-y-3">
            {News.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                <Link href={item.path} className="space-y-3" target={"_blank"}>
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Facebook Groups Section */}
      <section className={"py-28 bg-stone-200"} id={"facebook-groups"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Facebook Groups
            </h1>
            <p className="text-gray-600 mt-2">
              We're currently looking talent software engineers, and designers
              to help us in our missions and to grow up.
            </p>
          </div>
          <ul className="mt-12 divide-y space-y-3">
            {FacebookGroups.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50"
              >
                <Link href={item.path} className="space-y-3" target={"_blank"} >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Food Delivery Section */}
      <section className="py-28" id={"news"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Food Delivery
            </h1>
            <p className="text-gray-600 mt-2">
              Stay up to date on what is happening in Thailand and around the region.
            </p>
          </div>
          <ul className="mt-12 divide-y space-y-3">
            {FoodDelivery.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                <Link href={item.path} className="space-y-3" target={"_blank"}>
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Plant Based Section */}
      <section className="py-28" id={"plant-based"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Plant-Based
            </h1>
            <p className="text-gray-600 mt-2">
              We're currently looking talent software engineers, and designers
              to help us in our missions and to grow up.
            </p>
          </div>
          <ul className="mt-12 divide-y space-y-3">
            {PlantBased.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                <Link href={item.path} className="space-y-3" target={"_blank"} >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Transportation Section */}
      <section className="py-28" id={"plant-based"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Transportation
            </h1>
            <p className="text-gray-600 mt-2">
              We're currently looking talent software engineers, and designers
              to help us in our missions and to grow up.
            </p>
          </div>
          <ul className="mt-12 divide-y space-y-3">
            {Transportation.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                <Link href={item.path} className="space-y-3" target={"_blank"} >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Others Section */}
      <section className={"py-28 bg-stone-200"} id={"others"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Others
            </h1>
            <p className="text-gray-600 mt-2">
              From Mobile and Internet Packages, to Airline Booking Platforms and Transportation
            </p>
          </div>
          <ul className="mt-12 divide-y space-y-3">
            {Others.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                <Link href={item.path} className="space-y-3" target={"_blank"} >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
