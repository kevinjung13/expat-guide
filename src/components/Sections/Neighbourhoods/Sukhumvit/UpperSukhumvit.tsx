import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function UpperSukhumvit() {
  return (
    <>
      {/* Upper Sukhumvit */}
      <NeighbourhoodsLayout
        bgColor={"white"}
        cardsOne={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Phra Khanong"}
            description={"Soi 48-71"}
            href={"https://goo.gl/maps/paSL9Pmurn88rqFU7"}
            buttonText={`Location`}
            featureTextOne={`Walking distance to W District`}
            featureTextTwo={`Easy access to Stonegoat Climbing Gym`}
            featureTextThree={`Close to Sansiri Backyard T77 Community`} />}
        cardsTwo={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"On Nut"}
            description={"Soi 48-87"}
            href={"https://goo.gl/maps/c3NrnXEtjX4dqpmz5"}
            buttonText={`Location`}
            featureTextOne={`Easy access to mall and grocery store`}
            featureTextTwo={`Quiet compared to Lower and Central Sukhumvit`}
            featureTextThree={`Affordable rent`} />}
        cardsThree={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Bang Chak to Bang Na"}
            description={"Soi 89 and Beyond"}
            href={"https://goo.gl/maps/o4PCzH9r9sK9gvNu6"}
            buttonText={`Location`}
            featureTextOne={`Closer to IKEA and Top Golf`}
            featureTextTwo={`Affordable rent`}
            featureTextThree={`Most quiet areas in Sukhumvit`} />}
        title={"Upper Sukhumvit"}
        description={`Soi 65 and beyond`} />
    </>
  )
}