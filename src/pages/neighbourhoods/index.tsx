import HeroLayout from "@/components/Layout/HeroLayout";
import NeighbourhoodsCards from "@/components/Cards/Neighbourhoods/NeighbourhoodsCards";

export default function Neighbourhoods() {

  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/neighbourhoods-img.jpg")]`}
        headTitle={"Neighbourhoods | Farang"}
        title={"NEIGHBOURHOODS"}
        subtitle={"Home Away From Home"} />
      {/* Neighbourhoods */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">
              Areas
            </h1>
            <p className="text-gray-600 mt-2">
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
