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
        description={`From party boats to themed clubs, dance your ass off at these nightclubs and bars.`} />
    </>
  )
}