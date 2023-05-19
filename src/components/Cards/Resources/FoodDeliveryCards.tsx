import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function FoodDeliveryCards() {
  return (
    <>
      <ul className={"mt-12 divide-y space-y-3"}>
        {/* Food Panda */}
        <ResourcesCards
          name={"Food Panda"}
          type={"Delivery Platform"}
          description={`A well-reputed and popular food delivery platform that operates in Bangkok and various other cities worldwide.
          Easy to browse through menus, read reviews, and place orders with just a few taps or clicks. 
          The platform also allows customization options, enabling users to specify their preferences or dietary requirements.
          Food Panda also offers promotions, discounts, and exclusive deals often.`}
          href={"https://www.foodpanda.co.th/?gclid=CjwKCAjwxr2iBhBJEiwAdXECwymjhHt0W-igqPIy1i9YQE_0rp4JvCU6FQVz--HRCu-rZZbBllM9FBoCIasQAvD_BwE"}
          icon={
            <img
              src={"/img/resources/icons/food-panda.jpg"}
              alt={"Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* Grab Food */}
        <ResourcesCards
          name={"Grab Food"}
          type={"Delivery Platform"}
          description={`A popular food delivery service available in Bangkok and several other cities across Southeast Asia. 
          Grab Food partners with numerous local eateries, ranging from popular chains to smaller, independent establishments.
          Often provides real-time order tracking, allowing users to monitor the progress of their deliveries and also frequently offers promotions, discounts, and loyalty rewards.`}
          href={"https://food.grab.com/th/en/"}
          icon={
            <img
              src={"/img/resources/icons/grab-food.jpg"}
              alt={"Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* LINE Man */}
        <ResourcesCards
          name={"LINE Man"}
          type={"Delivery Platform"}
          description={`A popular on-demand delivery and concierge service available in Bangkok.
          Allows users to order a variety of items for delivery, including food from restaurants, groceries, medication, documents, and even personal items.
          Line Man has an extensive network of partner merchants and collaborates with a wide range of restaurants, supermarkets, pharmacies, and retail stores, offering expats a diverse selection of options to choose from.
          Lastly, it offers concierge services such as bill payment, appointment booking, and even assistance with various tasks, such as queueing for government services or purchasing event tickets, making it a convenient one-stop platform for expats in Bangkok.`}
          href={"https://lineman.line.me/"}
          icon={
            <img
              src={"/img/resources/icons/lineman.png"}
              alt={"Logo"}
              className={"rounded-full object-cover h-full"} />} />
        </ul>
    </>
  )
}