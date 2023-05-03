import BrunchCards from "@/components/Cards/Dining/BrunchCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function Brunch() {
  return (
    <>
      <DiningLayout
        bgColor={"stone-200"}
        cards={<BrunchCards />}
        title={"Brunch"}
        description={"Brunch Cafes"}>
      </DiningLayout>
  </>
  )
}