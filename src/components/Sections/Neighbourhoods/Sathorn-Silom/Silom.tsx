import NeighbourhoodsLayout from "@/components/Layout/NeighbourhoodsLayout";
import NeighbourhoodsCards from "@/components/Layout/NeighbourhoodsLayout/NeighbourhoodsCards";

export default function Silom() {
  return (
    <>
      {/* Silom */}
      <NeighbourhoodsLayout
        bgColor={"stone-200"}
        cardsOne={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Sala Daeng"}
            description={"Offices and Condominiums"}
            href={"https://goo.gl/maps/oM2gFBgTA6wg2gcw5"}
            buttonText={`Location`}
            featureTextOne={`Easy access to BTS and MRT`}
            featureTextTwo={`Close to Sukhumvit`}
            featureTextThree={`Park: Lumphini Park`} />}
        cardsTwo={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Chong Nonsi"}
            description={"Offices and Condominiums"}
            href={"https://goo.gl/maps/syTj71uSYsFWAohGA"}
            buttonText={`Location`}
            featureTextOne={`Meeting point between Sathorn and Silom`}
            featureTextTwo={`Easy access to many offices`}
            featureTextThree={`Fancy condos`} />
        }
        cardsThree={
          <NeighbourhoodsCards
            bgColor={"bg-white"}
            borderColor={"border-stone-200"}
            title={"Surasak"}
            description={"Offices and Condominiums"}
            href={"https://goo.gl/maps/dfNCW5B18WjLDQ2BA"}
            buttonText={`Location`}
            featureTextOne={`More quiet compared to the other two`}
            featureTextTwo={`Closer to the river`}
            featureTextThree={`Easy access to BTS`} />
        }
        title={"Silom"}
        description={`Popular Areas in Silom`} />
    </>
  )
}