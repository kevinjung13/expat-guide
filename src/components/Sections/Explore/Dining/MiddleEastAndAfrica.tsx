import MiddleEastAndAfricaCards from "@/components/Cards/Dining/MiddleEastAndAfricaCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function MiddleEastAndAfrica() {
  return (
    <>
      <DiningLayout
        cards={<MiddleEastAndAfricaCards />}
        title={"Middle East & Africa"}
        description={"Middle Eastern and African Cuisine"} />
    </>
  )
}