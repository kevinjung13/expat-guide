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
            title={"Phra Khanong"}
            description={"Soi 48-71"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        cardsTwo={
          <NeighbourhoodsCards
            title={"On Nut"}
            description={"Soi 48-87"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        cardsThree={
          <NeighbourhoodsCards
            title={"Bang Chak to Bang Na"}
            description={"Soi 89 and Beyond"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        title={"Upper Sukhumvit"}
        description={`Soi 65 and beyond`} />
    </>
  )
}