import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function FacebookGroupCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
        {/* Bangkok Expats */}
        <ResourcesCards
          name={"Bangkok Expats"}
          type={"Group"}
          description={`There is both "Bangkok Expats" and "BANGKOK EXPATS".`}
          href={"https://www.facebook.com/groups/bkexpats.kc/"}
          icon={
            <img
              src={"/img/resources/icons/bangkok-expats.jpg"}
              alt={"BKK expats Logo"}
              className={"w-8 h-8"} />} />
        {/* Bangkok Expats Classified Forum */}
        <ResourcesCards
          name={"Bangkok Expats Classified Forum"}
          type={"Forum and Marketplace"}
          description={"Place to look for condo rental and secondhand items"}
          href={"https://www.facebook.com/groups/BangkokClassifiedsForum/"}
          icon={
            <img
              src={"/img/resources/icons/bangkok-classifieds.jpg"}
              alt={"BKK classifieds Logo"}
              className={"w-8 h-8"} />} />
        {/* Farang Girls in Bangkok */}
        <ResourcesCards
          name={"Farang Girls in Bangkok"}
          type={"Group"}
          description={`An all-female expat group to share information, 
          with an aim to make friends and get together.`}
          href={"https://www.facebook.com/groups/fgibkk"}
          icon={
            <img
              src={"/img/resources/icons/farang-girls-bkk.jpg"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
      </ul>
    </>
  )
}