import AsiaCards from "@/components/Cards/Explore/Dining/AsiaCards";
import ExploreLayout from "@/components/Layout/ExploreLayout";

export default function Asia() {
  return (
    <>
      {/* Asia */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<AsiaCards />}
        title={"Asia"}
        description={`Craving dishes from other parts of the continent? 
        Here are some of my favorite non-Thai Asian restaurants in the city.`} />
    </>
  );
}
