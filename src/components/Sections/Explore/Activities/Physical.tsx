import PhysicalCards from "@/components/Cards/Explore/Activities/PhysicalCards";
import ExploreLayout from "@/components/Layout/ExploreLayout";

export default function Physical() {
  return (
    <>
      {/* Physical */}
      <ExploreLayout
        bgColor={"bg-white"}
        cards={<PhysicalCards />}
        title={"Physical"}
        description={`Improve your physical capabilities by moving your body and challenging yourself with these activities.`} />
    </>
  )
}