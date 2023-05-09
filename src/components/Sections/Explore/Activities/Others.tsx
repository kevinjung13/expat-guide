import ExploreLayout from "@/components/Layout/ExploreLayout";
import OthersCards from "@/components/Cards/Explore/Activities/OthersCards";

export default function Entertainment() {
  return (
    <>
      {/* Others */}
      <ExploreLayout
        bgColor={"white"}
        cards={<OthersCards />}
        title={"Others"}
        description={`Cooking Class, Bowling, Book Stores, Paintball, Archery, Shooting `} />
    </>
  )
}