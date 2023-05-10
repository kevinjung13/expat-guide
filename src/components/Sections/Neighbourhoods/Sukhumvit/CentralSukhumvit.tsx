import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function CentralSukhumvit() {
  return (
    <>
      {/* Central Sukhumvit */}
      <NeighbourhoodsLayout
        bgColor={"white"}
        cardsOne={
          <NeighbourhoodsCards
            title={"Phrom Pong"}
            description={"Soi 22-43"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        cardsTwo={
          <NeighbourhoodsCards
            title={"Thong Lor"}
            description={"Soi 34-59"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        cardsThree={
          <NeighbourhoodsCards
            title={"Ekkamai"}
            description={"Soi 40-65"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        title={"Central Sukhumvit"}
        description={`Soi 22-65`} />
    </>
  )
}