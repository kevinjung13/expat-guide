import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function PlantBasedCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
         {/* Root The Future */}
        <ResourcesCards
          name={"Root The Future"}
          type={"Plant Based Related News"}
          description={`aa`}
          href={`https://rootthefuture.com/`}
          icon={
            <img
              src={"/img/resources/icons/root-the-future.jpg"}
              alt={"RTF Logo"}
              className={"w-8 h-8"} />} />
        {/* Vegan Monkey */}
        <ResourcesCards
          name={"Vegan Monkey"}
          type={"Food Platform"}
          description={"Place to look for condo rental and secondhand items"}
          href={"https://veganmonkey.co/"}
          icon={
            <img
              src={"/img/resources/icons/vegan-monkey.png"}
              alt={"Vegan Monkey Logo"}
              className={"w-8 h-8"} />} />
        {/* Happy Cow */}
        <ResourcesCards
          name={"Happy Cow"}
          type={"Restaurant Finder and Blog"}
          description={`A great platform to find Vegan and Vegetarian restaurants near you.`}
          href={"https://www.happycow.net/"}
          icon={
            <img
              src={"/img/resources/icons/happy-cow.png"}
              alt={"Vegan Monkey Logo"}
              className={"w-8 h-8"} />} />
      </ul>
    </>
  )
}