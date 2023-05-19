import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function CentralSukhumvit() {
  return (
    <>
      {/* Central Sukhumvit */}
      <NeighbourhoodsLayout
        bgColor={"stone-200"}
        title={"Central Sukhumvit"}
        description={`Soi 22-65`}
        cardsOne={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            title={"Phrom Pong"}
            borderColor={"border-stone-200"}
            description={"Soi 22-43"}
            href={"https://goo.gl/maps/CgScmapBM18GEDTN6"}
            buttonText={`Location`}
            featureTextOne={`Walking distance to Benjasiri Park`}
            featureTextTwo={`Malls: EmQuartier & Emporium`}
            featureTextThree={`Easy access to The Racquet Club`} />}
        cardsTwo={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Thong Lor"}
            description={"Soi 34-59"}
            href={"https://goo.gl/maps/utpFrZT5aZiB9fqU8"}
            buttonText={`Location`}
            featureTextOne={`Close to many bars and clubs`}
            featureTextTwo={`Hub for Japanese food`}
            featureTextThree={`Easy access to BTS`} />}
        cardsThree={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Ekkamai"}
            description={"Soi 40-65"}
            href={"https://goo.gl/maps/EUZzLFSKmpBPYEfGA"}
            buttonText={`Location`}
            featureTextOne={`Hospital: Sukhumvit Hospital`}
            featureTextTwo={`Easy access to Ekkamai Bus Terminal`}
            featureTextThree={`Walking distance to Thong Lor`} />} />
    </>
  )
}