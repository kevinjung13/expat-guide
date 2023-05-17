import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function NorthBangkok() {
  return (
    <>
      {/* Main Areas */}
      <NeighbourhoodsLayout
        bgColor={"white"}
        cardsOne={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Ratchathewi & Phaya Thai"}
            description={"Universities & Residences"}
            href={"https://goo.gl/maps/TpxdvsCGcEQtp2qf6"}
            buttonText={`Location`}
            featureTextOne={`Close to Airport Railway Link`}
            featureTextTwo={`Only 1 Station from Siam`}
            featureTextThree={`Easy access to Ari`} />}
        cardsTwo={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Sanam Pao & Ari"}
            description={"Residential Area"}
            href={"https://goo.gl/maps/BFTQR8ZwNUPLi85U7"}
            buttonText={`Location`}
            featureTextOne={`Trendy and upcoming area`}
            featureTextTwo={`Quiet during the evening`}
            featureTextThree={`Has great restaurants and bars`} />}
        cardsThree={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Chatuchak"}
            description={"Offices & Condos"}
            href={"https://goo.gl/maps/ybxww2HUiAPJC29P9"}
            buttonText={`Location`}
            featureTextOne={`Easy access to Chatuchak Market`}
            featureTextTwo={`Close to Don Mueang Airport`}
            featureTextThree={`Fancy condos for affordable prices`} />}
        title={"Main Areas"}
        description={`Here are the main areas for the Ratchathewi and Phaya Thai districts and further up north.`} />
    </>
  )
}