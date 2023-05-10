import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function Sathorn() {
  return (
    <>
      {/* Sathorn */}
      <NeighbourhoodsLayout
        bgColor={"white"}
        cardsOne={
          <NeighbourhoodsCards
            title={"Yennakart"}
            description={""}
            href={""}
            buttonText={`Discover`}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={`Other popular locations include: `} />
        }
        cardsTwo={
          <NeighbourhoodsCards
            title={"Suan Plu"}
            description={""}
            href={""}
            buttonText={"Discover"}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={``} />
        }
        cardsThree={
          <NeighbourhoodsCards
            title={"Riverside"}
            description={""}
            href={""}
            buttonText={"Discover"}
            featureTextOne={``}
            featureTextTwo={``}
            featureTextThree={` `} />
        }
        title={"Sathorn"}
        description={`Popular Areas in Sathorn`} />
    </>
  )
}