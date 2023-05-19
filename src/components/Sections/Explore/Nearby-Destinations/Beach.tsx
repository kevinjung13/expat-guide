import ExploreLayout from "@/components/Layout/ExploreLayout";
import BeachCards from "@/components/Cards/Explore/Nearby-Destinations/BeachCards";

export default function Beach() {
  return (
    <>
      {/* Beach */}
      <ExploreLayout
        bgColor={"white"}
        cards={<BeachCards />}
        title={"Beach"}
        description={`In need of some vitamin-sea? 
        Here are my recommended beach destinations near the city.`} />
    </>
  )
}