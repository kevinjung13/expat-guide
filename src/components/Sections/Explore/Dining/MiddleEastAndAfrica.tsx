import MiddleEastAndAfricaCards from "@/components/Cards/Explore/Dining/MiddleEastAndAfricaCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function MiddleEastAndAfrica() {
  return (
    <>
      <DiningLayout
        bgColor={"white"}
        cards={<MiddleEastAndAfricaCards />}
        title={"Middle East & Africa"}
        description={"Here is a list of my favorite restaurants from the Middle East and Africa."}
      />
    </>
  );
}
