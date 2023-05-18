import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function PlantBasedCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
         {/* Root The Future */}
        <ResourcesCards
          name={"Root The Future"}
          type={"Plant Based Related News"}
          description={`A platform dedicated to promoting sustainable living, plant-based lifestyles, and eco-conscious choices.
          Root The Future offers a wealth of resources and information on veganism, sustainable living, and eco-friendly practices, with its website featuring articles, blog posts, and guides that provide insights into vegan-friendly restaurants, grocery stores, and markets in Bangkok.
          It also offers tips and recipes for vegan meals, information on eco-friendly products, and updates on local events and initiatives related to veganism and sustainability, allowing vegans to stay informed about the latest developments and trends in the local vegan community.`}
          href={`https://rootthefuture.com/`}
          icon={
            <img
              src={"/img/resources/icons/root-the-future.jpg"}
              alt={"RTF Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* Vegan Monkey */}
        <ResourcesCards
          name={"Vegan Monkey"}
          type={"Food Platform"}
          description={`A recently launched website dedicated to promoting veganism and providing resources for individuals following a plant-based lifestyle. 
          Vegan Monkey offers a wealth of information and resources specifically tailored to the vegan community and features articles, recipes, product reviews, and guides.
          It also provides insights into vegan-friendly restaurants, cafes, and food options available in the city, helping expats discover new dining experiences and navigate the local vegan scene.`}
          href={"https://veganmonkey.co/"}
          icon={
            <img
              src={"/img/resources/icons/vegan-monkey.png"}
              alt={"Vegan Monkey Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* Happy Cow */}
        <ResourcesCards
          name={"Happy Cow"}
          type={"Restaurant Finder and Blog"}
          description={`A popular online platform and mobile app that serves as a comprehensive guide for vegans and vegetarians around the world. 
          Happy Cow provides a wealth of information about vegan and vegetarian-friendly restaurants, cafes, and other food establishments. 
          The platform also includes reviews and ratings from users, making it a valuable resource for individuals seeking plant-based dining options.
          Overall, a great platform to find Vegan and Vegetarian restaurants near you.`}
          href={"https://www.happycow.net/"}
          icon={
            <img
              src={"/img/resources/icons/happy-cow.png"}
              alt={"Vegan Monkey Logo"}
              className={"rounded-full object-cover h-full"} />} />
      </ul>
    </>
  )
}