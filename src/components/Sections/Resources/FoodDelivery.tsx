import FoodDeliveryCards from "@/components/Cards/Resources/FoodDeliveryCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function FoodDelivery() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-white"}
        title={"Food Delivery"}
        description={`Feeling lazy to cook or go out? 
        Explore these food delivery apps and get your meal delivered to your doorstep.`}
        descColor={"text-cyan-700"}
        id={"food-delivery"}
        cards={<FoodDeliveryCards />} />
    </>
  )
}