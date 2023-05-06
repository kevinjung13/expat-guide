import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";

export default function Shopping() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/shopping-img.jpg")]`}
        headTitle={"Shopping | Farang"}
        title={"SHOPPING"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"Shop Till You Drop"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"} />
      {/* Second Section */}
      <section className={"bg-gray-200 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>Malls</h1>
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
  );
}
