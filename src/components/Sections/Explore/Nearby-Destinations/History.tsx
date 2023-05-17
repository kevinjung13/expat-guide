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
        description={`Want to expand your knowledge on Thai history beyond Bangkok? 
        Here are some historical locations outside the city that I recommend you visit.`} />
    </>
  )
}