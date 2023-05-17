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
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Yennakart"}
            description={"Residential Area"}
            href={"https://goo.gl/maps/4o2RX2zty7WR8f7HA"}
            buttonText={`Location`}
            featureTextOne={`Many great restaurants in the area`}
            featureTextTwo={`Quiet and peaceful during the night`}
            featureTextThree={`Easy access to Sukhumvit`} />}
        cardsTwo={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Suan Plu"}
            description={"Residential Area"}
            href={"https://goo.gl/maps/bYjxJMHEp5EZv3rv7"}
            buttonText={"Location"}
            featureTextOne={`Most quiet of out all three`}
            featureTextTwo={`Many affordable accomodation options`}
            featureTextThree={`Easy access to Yennakart`} />}
        cardsThree={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Riverside"}
            description={"Resorts, Condos and Restaurants"}
            href={"https://goo.gl/maps/Mcc1p7z3oCmfKkTT9"}
            buttonText={"Location"}
            featureTextOne={`Close to the River`}
            featureTextTwo={`Easy access to BTS and other areas`}
            featureTextThree={`Expensive but has the best view`} />}
        title={"Sathorn"}
        description={`Popular Areas in Sathorn`} />
    </>
  )
}