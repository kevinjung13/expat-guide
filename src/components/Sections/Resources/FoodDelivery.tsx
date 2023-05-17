import FoodDeliveryCards from "@/components/Cards/Resources/FoodDeliveryCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function FoodDelivery() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-white"}
        title={"Food Delivery"}
        description={"Stay up to date on what is happening in Thailand and around the region."}
        descColor={"text-cyan-700"}
        id={"food-delivery"}
        cards={<FoodDeliveryCards />} />
    </>
  )
}