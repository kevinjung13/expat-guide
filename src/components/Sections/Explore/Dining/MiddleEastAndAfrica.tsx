import MiddleEastAndAfricaCards from "@/components/Cards/Explore/Dining/MiddleEastAndAfricaCards";
import ExploreLayout from "@/components/Layout/ExploreLayout";

export default function MiddleEastAndAfrica() {
  return (
    <>
      {/* Middle East & Africa */}
      <ExploreLayout
        bgColor={"white"}
        cards={<MiddleEastAndAfricaCards />}
        title={"Middle East & Africa"}
        description={`Here is a list of my favorite restaurants from the Middle East and Africa.`} />
    </>
  );
}
