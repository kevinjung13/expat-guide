import ExploreLayout from "@/components/Layout/ExploreLayout";
import NightclubsCards from "@/components/Cards/Explore/Nightlife/NightclubsCards";

export default function Nightclubs() {
  return (
    <>
      {/* Bars */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<NightclubsCards />}
        title={"Nightclubs"}
        description={`Dance your ass off at these nightclubs`} />
    </>
  )
}