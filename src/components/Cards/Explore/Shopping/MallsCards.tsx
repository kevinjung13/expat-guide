import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MallsCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* EmQuartier */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/emquartier.jpg"}
          name={"EmQuartier"}
          title={"BTS Station: Phrom Pong"}
          buttonText={"Location"}
          description={`One of my favorite malls, due to its location and diverse range of shops and boutiques, catering to different interests and budgets. 
          Alongside luxury brands, you'll find a mix of mid-range and local retailers, as well as specialty stores selling unique products.
          Also has some great restaurants, food court and bars.`}
          href={"https://goo.gl/maps/ZpSKNqbfBRhGCG3y8"} />
        { /* Central World & Siam Paragon */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/centralworld.jpg"}
          name={"Central World & Siam Paragon"}
          title={"BTS Station: Chitlom / Siam"}
          buttonText={"Location"}
          description={`Central World is the biggest mall in Thailand so its guaranteed that you will find everything you need here.
          Great place to stick with if you don't feel like checking different malls and usually my go to mall if I am in the area.
          Siam Paragon is also easily accesible by foot via the sky bridge but mostly hosts luxury/high end goods and brands.`}
          href={"https://goo.gl/maps/3CWdccY4D5Litxkw5"} />
          { /* Icon Siam */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/iconsiam.jpg"}
          name={"Icon Siam"}
          title={"BTS Station: Charoen Nakhon"}
          buttonText={"Location"}
          description={`Located across the river, another fancy mall with mostly luxury brands and goods.
          Has great restaurants and bars overlooking the river and also has a large Apple Store.
          Also a place where many river cruises leave from. 
          The basement has one of my favorite food courts, due to its unique design.
          Worth checking it out at least once.`}
          href={"https://goo.gl/maps/93TDDJJoW3f1QPSx5"} />
      </ul>
    </>
  )
}