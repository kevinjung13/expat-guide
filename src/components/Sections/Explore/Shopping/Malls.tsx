import ExploreLayout from "@/components/Layout/ExploreLayout";
import MallsCards from "@/components/Cards/Explore/Shopping/MallsCards";

export default function Malls() {
  return (
    <>
      {/* Malls */}
      <ExploreLayout
        bgColor={"white"}
        cards={<MallsCards />}
        title={"Malls"}
        description={`Discover my favorite malls to get everything you need.`} />
    </>
  )
}