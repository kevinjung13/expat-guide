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
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Bang Kapi"}
            description={"Residential Area"}
            href={"https://goo.gl/maps/JMG3Zx4ih2Ddnu4RA"}
            buttonText={`Location`}
            featureTextOne={`Affordable living costs`}
            featureTextTwo={`More quiet as it is less developed`}
            featureTextThree={`Very local area`} />}
        cardsTwo={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Huai Khwang"}
            description={"Condos and Offices"}
            href={"https://goo.gl/maps/5Q7umGv45KqV4c527"}
            buttonText={`Location`}
            featureTextOne={`Easy access to MRT and Airport Link`}
            featureTextTwo={`Close to Central Sukhumvit`}
            featureTextThree={`Quiet compared to other locations`} />}
        cardsThree={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Din Daeng"}
            description={"Condos, Offices & Malls"}
            href={"https://goo.gl/maps/iLrfSAwPTtEzYQQz5"}
            buttonText={`Location`}
            featureTextOne={`Local charm`}
            featureTextTwo={`Easy access to MRT and Airport Link`}
            featureTextThree={`Affordable complared to other places`} />}
        title={"Main Areas"}
        description={`Discover Bangkok's most trending local residential districts`} />
    </>
  )
}