import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function NorthBangkok() {
  return (
    <>
      {/* North Bangkok */}
      <NeighbourhoodsLayout
        bgColor={"white"}
        cardsOne={
          <NeighbourhoodsCards
            title={"Ratchathewi"}
            description={""}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        cardsTwo={
          <NeighbourhoodsCards
          title={"Ari"}
          description={""}
          href={""}
          buttonText={`Discover`}
          featureTextOne={``}
          featureTextTwo={``}
          featureTextThree={``} />
        }
        cardsThree={
          <NeighbourhoodsCards
          title={"Chatuchak"}
          description={""}
          href={""}
          buttonText={`Discover`}
          featureTextOne={``}
          featureTextTwo={``}
          featureTextThree={``} />
        }
        title={"North Bangkok"}
        description={`Quiet`} />
    </>
  )
}