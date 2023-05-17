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
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
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
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
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
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
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