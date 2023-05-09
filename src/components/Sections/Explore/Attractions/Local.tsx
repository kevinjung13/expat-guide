import ExploreLayout from "@/components/Layout/ExploreLayout";
import LocalCards from "@/components/Cards/Explore/Attractions/LocalCards";

export default function Local() {
  return (
    <>
      {/* Cultural */}
      <ExploreLayout
        bgColor={"white"}
        cards={<LocalCards />}
        title={"Local"}
        description={`Local Neighbourhoods to get a sense of how people live.`} />
    </>
  )
}