import PhysicalCards from "@/components/Cards/Explore/Activities/PhysicalCards";
import ExploreLayout from "@/components/Layout/ExploreLayout";

export default function Physical() {
  return (
    <>
      {/* Physical */}
      <ExploreLayout
        bgColor={"white"}
        cards={<PhysicalCards />}
        title={"Physical"}
        description={`Improve your physical fitness by challenging yourself with these activities. Here are my recommendations.`} />
    </>
  )
}