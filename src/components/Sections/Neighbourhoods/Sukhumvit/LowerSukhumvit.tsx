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
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Pathum Wan"}
            description={"BTS Stations: Phloen Chit to National Stadium & Ratchadamri"}
            href={"https://goo.gl/maps/rpktnYP1XfMsQnm3A"}
            buttonText={`Location`}
            featureTextOne={`Easy access to malls and the BTS`}
            featureTextTwo={`Central location`}
            featureTextThree={`Close to embassies`} />}
        cardsTwo={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Nana"}
            description={"Soi 1-13"}
            href={"https://goo.gl/maps/an3RDaGXFi9muwr67"}
            buttonText={`Location`}
            featureTextOne={`Easy access to BTS`}
            featureTextTwo={`Close to tailor shops and main road`}
            featureTextThree={`Walking distance from Soi 11`} />}
        cardsThree={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Asoke"}
            description={"Soi 12-23"}
            href={"https://goo.gl/maps/5AUqLCo3XVYbLkvk6"}
            buttonText={`Location`}
            featureTextOne={`Easy access to both BTS and MRT`}
            featureTextTwo={`Walking distance to Benjakitti Park`}
            featureTextThree={`Shopping Center: Terminal 21`} />}
            title={"Pathum Wan & Lower Sukhumvit"}
            description={`Central Bangkok`} />
    </>
  )
}