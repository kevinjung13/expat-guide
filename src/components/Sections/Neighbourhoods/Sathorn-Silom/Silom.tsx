import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function Silom() {
  return (
    <>
      {/* Silom */}
      <NeighbourhoodsLayout
        bgColor={"white"}
        cardsOne={
          <NeighbourhoodsCards
            title={"Sala Daeng"}
            description={""}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={`Other popular locations include: `} />
        }
        cardsTwo={
          <NeighbourhoodsCards
            title={"Chong Nonsi"}
            description={""}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={`Other popular locations include: `} />
        }
        cardsThree={
          <NeighbourhoodsCards
            title={"Surasak"}
            description={""}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={`Other popular locations include: `} />
        }
        title={"Silom"}
        description={`Popular Areas in Silom`} />
    </>
  )
}