import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";

export default function Ari() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/ari-img.jpg")]`}
        headTitle={"Ari | Neighbourhoods"}
        title={"ARI-CHATUCHAK"}
        titleCSS={"text-6xl text-center md:text-8xl pb-3"}
        subtitle={"TBA"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"} />
      {/* Second Section */}
      <section className={"bg-gray-200 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>LOCAL FLAVORS</h1>
        </div>
        <div className={"flex-col place-content-center p-6"}>
          <p className={"text-lg "}>
            TBA
          </p>
          <br />
          <p className={"text-lg "}>
            TBA
          </p>
        </div>
      </section>
    </>
  )
}