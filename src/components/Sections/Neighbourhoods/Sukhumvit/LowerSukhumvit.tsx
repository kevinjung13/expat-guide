import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function LowerSukhumvit() {
  return (
    <>
      {/* Pathum Wan & Lower Sukhumvit */}
      <NeighbourhoodsLayout
        bgColor={"white"}
        cardsOne={
          <NeighbourhoodsCards
            title={"Pathum Wan"}
            description={"Embassies & Shopping Centers"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={`BTS: Phloen Chit to National Stadium`}
            featureTextTwo={`BTS: Ratchadamri`}
            featureTextThree={`Wireless Road`} />
        }
        cardsTwo={
          <NeighbourhoodsCards
            title={"Nana"}
            description={"Soi 1-13"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={`C`} />
        }
        cardsThree={
          <NeighbourhoodsCards
            title={"Asoke"}
            description={"Soi 12-23"}
            href={""}
            buttonText={`Discover`}
            featureTextOne={`A`}
            featureTextTwo={`B`}
            featureTextThree={`C`} />
        }
        title={"Pathum Wan & Lower Sukhumvit"}
        description={`Central Bangkok`} />
    </>
  )
}