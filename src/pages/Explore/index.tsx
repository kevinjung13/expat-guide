import HeroLayout from "@/components/Layout/HeroLayout";
import Options from "@/components/Sections/Explore/Options";

export default function Explore() {

  return (
    <>
      <HeroLayout
        bgImg={`bg-[url("/img/sections/explore-img.jpg")]`}
        headTitle={"Explore | Farang"}
        title={"EXPLORE"}
        subtitle={"Your New Home"} />
      {/* Options */}
      <Options />
    </>
  );
}
