import ExploreLayout from "@/components/Layout/ExploreLayout";
import HistoryCards from "@/components/Cards/Explore/Nearby-Destinations/HistoryCards";

export default function History() {
  return (
    <>
      {/* History */}
      <ExploreLayout
        bgColor={"white"}
        cards={<HistoryCards />}
        title={"History"}
        description={`Historical Destinations`} />
    </>
  )
}