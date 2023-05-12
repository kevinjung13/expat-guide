import ExploreLayout from "@/components/Layout/ExploreLayout";
import DanceCards from "@/components/Cards/Explore/Nightlife/DanceCards";

export default function Nightclubs() {
  return (
    <>
      {/* Bars */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<DanceCards />}
        title={"Dance"}
        description={`Dance your ass off at these nightclubs and bars.`} />
    </>
  )
}