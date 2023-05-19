import ExploreLayout from "@/components/Layout/ExploreLayout";
import LocalCards from "@/components/Cards/Explore/Attractions/LocalCards";

export default function Local() {
  return (
    <>
      {/* Local */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<LocalCards />}
        title={"Local"}
        description={`Local neighbourhoods and areas that will help you to get a sense of how the locals live.`} />
    </>
  )
}