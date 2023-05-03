import EuropeCards from "@/components/Cards/Dining/EuropeCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function Europe() {
  return (
    <>
     <DiningLayout
      cards={<EuropeCards />}
      title={"Europe"}
      description={"European cuisine"} />
    </>
  )
}