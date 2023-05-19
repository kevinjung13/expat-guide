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
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/resources-img.jpg")]`}
        headTitle={"Resources | Farang"}
        title={"RESOURCES"}
        titleCSS={"text-5xl sm:text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"Stay Informed"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"}/>
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
