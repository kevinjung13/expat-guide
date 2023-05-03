import AsiaCards from "@/components/Cards/Dining/AsiaCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function Asia() {
  return (
    <>
      <DiningLayout
        bgColor={"stone-200"}
        cards={<AsiaCards />}
        title={"Asia"}
        description={"Non-Thai Asian Restaurants"}>
      </DiningLayout>
  </>
  )
}