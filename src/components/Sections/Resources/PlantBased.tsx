import PlantBasedCards from "@/components/Cards/Resources/PlantBasedCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function PlantBased() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-stone-200"}
        title={"Plant-Based"}
        description={`Are you a Vegan/Vegeterian wanting to discover the plant-based scene in Bangkok? 
        Here is a list of platforms that will be extremely helpful.`}
        descColor={"text-cyan-700"}
        id={"plant-based"}
        cards={<PlantBasedCards />} />
    </>
  )
}