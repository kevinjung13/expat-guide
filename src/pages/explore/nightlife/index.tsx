import HeroLayout from "@/components/Layout/HeroLayout";

export default function Nightlife() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/nightlife-img.jpg")]`}
        headTitle={"Nightlife | Farang"}
        title={"NIGHTLIFE"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"Sin City"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"} />
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
  );
}
