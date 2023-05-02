import Head from "next/head";
import HeroLayout from "@/components/Layout/HeroLayout";
import Introduction from "@/components/Sections/Home/Introduction";
import Explore from "@/components/Sections/Home/Explore";
import Neighbourhoods from "@/components/Sections/Home/Neighbourhoods";
import Resources from "@/components/Sections/Home/Resources";

export default function Home() {
  return (
    <>
      <Head>
        <title> Farang | Bangkok Expat Guide</title>
      </Head>
      {/* Image Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/home-img.jpg")]`}
        title={"BANGKOK"}
        subtitle={"Thailand"} />
      {/* Introduction Section */}
      <Introduction />
      {/* Explore Section */}
      <Explore />
      {/* Neighbourhoods Section */}
      <Neighbourhoods />
      {/* Resources Section */}
      <Resources />
    </>
  );
}
