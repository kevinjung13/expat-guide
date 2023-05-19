import HeroLayout from "@/components/Layout/HeroLayout";
import NeighbourhoodsCards from "@/components/Cards/Neighbourhoods/NeighbourhoodsCards";

export default function Neighbourhoods() {

  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/neighbourhoods-img.jpg")]`}
        href={"/img/sections/neighbourhoods-img.jpg"}
        headTitle={"Neighbourhoods | Farang"}
        title={"NEIGHBOURHOODS"}
        titleCSS={"text-4xl sm:text-5xl text-center md:text-7xl pb-3"}
        subtitle={"Home Away From Home"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"} />
      {/* Neighbourhoods Section */}
      <section className={"py-16 w-full bg-stone-200"}>
        <div className={"mx-auto px-4 md:px-8"}>
          <div className={"text-center"}>
            {/* Title */}
            <h1 className={"text-gray-800 text-4xl font-extrabold md:text-5xl"}>
              Areas
            </h1>
            {/* Description */}
            <p className={"text-cyan-700 mt-2"}>
              Explore the different areas of Bangkok and find your new
              neighbourhood.
            </p>
          </div>
          <NeighbourhoodsCards />
        </div>
      </section>
    </>
  );
}
