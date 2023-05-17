import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function FoodDeliveryCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
        {/* Food Panda */}
        <ResourcesCards
          name={"Food Panda"}
          type={"Food Panda"}
          description={`There is both "Bangkok Expats" and "BANGKOK EXPATS".`}
          href={"https://www.foodpanda.co.th/?gclid=CjwKCAjwxr2iBhBJEiwAdXECwymjhHt0W-igqPIy1i9YQE_0rp4JvCU6FQVz--HRCu-rZZbBllM9FBoCIasQAvD_BwE"}
          icon={
            <img
              src={"/img/resources/icons/food-panda.jpg"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
        {/* Grab Food */}
        <ResourcesCards
          name={"Grab Food"}
          type={"Grab Food"}
          description={"Place to look for condo rental and secondhand items"}
          href={"https://food.grab.com/th/en/"}
          icon={
            <img
              src={"/img/resources/icons/grab-food.jpg"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
        {/* LINE Man */}
        <ResourcesCards
          name={"LINE Man"}
          type={"LINE Man"}
          description={`An all-female expat group to share information, 
          with an aim to make friends and get together.`}
          href={"https://lineman.line.me/"}
          icon={
            <img
              src={"/img/resources/icons/lineman.png"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
        </ul>
    </>
  )
}