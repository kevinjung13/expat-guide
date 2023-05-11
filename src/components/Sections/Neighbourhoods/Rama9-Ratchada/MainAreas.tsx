import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function MainAreas() {
  return (
    <>
      {/* Rama 9 */}
      <NeighbourhoodsLayout
        bgColor={"white"}
        cardsOne={
          <NeighbourhoodsCards
            title={"Bang Kapi"}
            description={""}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        cardsTwo={
          <NeighbourhoodsCards
          title={"Huai Khwang"}
          description={""}
          href={""}
          buttonText={`Discover`}
          featureTextOne={`Rama 9`}
          featureTextTwo={`Thailand Cultural Center`}
          featureTextThree={`Jodd Fairs`} />
        }
        cardsThree={
          <NeighbourhoodsCards
          title={"Din Daeng"}
          description={""}
          href={""}
          buttonText={`Discover`}
          featureTextOne={`Fortune Town`}
          featureTextTwo={`The Street Ratchada`}
          featureTextThree={``} />
        }
        title={"Main Areas"}
        description={`Discover Bangkok's newest and upcoming residential districts`} />
    </>
  )
}