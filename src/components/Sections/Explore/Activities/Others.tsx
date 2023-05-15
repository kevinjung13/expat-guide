import ExploreLayout from "@/components/Layout/ExploreLayout";
import OthersCards from "@/components/Cards/Explore/Activities/OthersCards";

export default function Entertainment() {
  return (
    <>
      {/* Others */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<OthersCards />}
        title={"Others"}
        description={`Tried all of the above and want something new? Discover the following activities for something different.`} />
    </>
  )
}