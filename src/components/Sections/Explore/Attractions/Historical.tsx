import ExploreLayout from "@/components/Layout/ExploreLayout";
import HistoricalCards from "@/components/Cards/Explore/Attractions/HistoricalCards";

export default function Historical() {
  return (
    <>
      {/* Cultural */}
      <ExploreLayout
        bgColor={"white"}
        cards={<HistoricalCards />}
        title={"History"}
        description={`Discover the history of Bangkok by visiting the following locations.`} />
    </>
  )
}