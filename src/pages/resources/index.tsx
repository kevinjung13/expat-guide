import HeroLayout from "@/components/Layout/HeroLayout";
import News from "@/components/Sections/Resources/News";
import FacebookGroups from "@/components/Sections/Resources/FacebookGroups";
import FoodDelivery from "@/components/Sections/Resources/FoodDelivery";
import PlantBased from "@/components/Sections/Resources/PlantBased";
import Transportation from "@/components/Sections/Resources/Transportation";
import Others from "@/components/Sections/Resources/Others";


export default function Resources() {
  return (
    <>
      <HeroLayout
        bgImg={`bg-[url("/img/sections/resources-img.jpg")]`}
        headTitle={"Resources | Farang"}
        title={"RESOURCES"}
        titleCSS={"text-6xl text-center md:text-8xl pb-3"}
        subtitle={"Stay Informed"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"}/>
      {/* News Section */}
      <News />
      {/* Facebook Groups Section */}
      <FacebookGroups />
      {/* Food Delivery Section */}
      <FoodDelivery />
      {/* Plant Based Section */}
      <PlantBased />
      {/* Transportation Section */}
      <Transportation />
      {/* Others Section */}
      <Others />
    </>
  );
}
