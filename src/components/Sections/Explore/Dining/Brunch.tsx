import BrunchCards from "@/components/Cards/Dining/BrunchCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function Brunch() {
  return (
    <>
      <DiningLayout
        cards={<BrunchCards />}
        title={"Brunch"}
        description={"Brunch Cafes"}>
      </DiningLayout>
  </>
  )
}