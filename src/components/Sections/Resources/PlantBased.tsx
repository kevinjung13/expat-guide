import PlantBasedCards from "@/components/Cards/Resources/PlantBasedCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function PlantBased() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-stone-200"}
        title={"Plant-Based"}
        description={"Stay up to date on what is happening in Thailand and around the region."}
        descColor={"text-cyan-700"}
        id={"plant-based"}
        cards={<PlantBasedCards />} />
    </>
  )
}