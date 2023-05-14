import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MiddleEastAndAfricaCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        {/* Taye */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/taye.jpg"}
          name={"Taye"}
          title={"BTS Station: Nana"}
          buttonText={"Taye"}
          description={`A restaurant bringing the authentic flavors of Ethiopia to the city. 
          Specialties include traditional Ethiopian dishes such as Doro Wat, Injera, and Kitfo, all prepared with a perfect blend of spices and fresh ingredients.
          Extremely underrated and overlooked by many expats in my opinion.
          A pleasant environment to enjoy lunch or dinner with friends or family.
          A must-visit venue for food enthusiasts.`}
          href={"https://goo.gl/maps/vgL8e4qucHvfv3Cm6"} />
        {/* Beirut Restaurant */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/beirut.jpg"}
          name={"Beirut Restaurant"}
          title={"BTS Station: Sala Daeng / MRT Station: Silom"}
          buttonText={"Beirut Restaurant"}
          description={`One of my favorite Lebanese restaurants in Bangkok.
          Its menu offers a variety of delicious mezze platters, grilled meats, and fresh seafood dishes.             
          A must-visit restaurant for anyone who loves Lebanese food.`}
          href={"https://goo.gl/maps/fU8eBD2NZXHjj39v5"} />
        {/* Mama Dolores */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/mamadolores.jpg"}
          name={"Mama Dolores"}
          title={"MRT Station: Khlong Toei"}
          buttonText={"Mama Dolores"}
          description={`A cozy Mediterranean restaurant located in Yen Akat. 
          Named after the owner's mother, who inspired her love of Mediterranean cuisine. 
          A hidden gem that serves up some of the best Mediterranean food in Bangkok and is perfect for group dinners with friends and family. 
          Highly recommended.`}
          href={"https://goo.gl/maps/fLK15RLEX9NhmMgb6"} />    
        {/* Nadimos */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/nadimos.jpg"}
          name={"Nadimos"}
          title={"BTS Station: Phrom Pong"}
          buttonText={"Nadimos"}
          description={`A chain of Lebanese and Greek restaurants, with 2 locations in the city. 
          Founded by a Lebanese family in 1999, a great choice for those living in the Sukhumvit area.`}
          href={"https://goo.gl/maps/FkdzZVYSuAoUuhCr9"} />
        {/* Hummus Heads */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/beirut.jpg"}
          name={"Hummus Heads"}
          title={"BTS Station: Thong Lor"}
          buttonText={"Hummus Heads"}
          description={`Specializes in Middle Eastern cuisine with a focus on hummus. 
          Known for its delicious and flavorful hummus dishes, including classic hummus with pita bread, hummus bowls, and hummus wraps.
          Uses fresh and high-quality ingredients, including organic chickpeas and locally-sourced vegetables. 
          Vegan and vegetarian friendly.`}
          href={"https://goo.gl/maps/yqJhsgpzzVoSPTva8"} />
        {/* Al Saray */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/alsaray.jpg"}
          name={"Al Saray"}
          title={"MRT Station: Lumphini"}
          buttonText={"Al Saray"}
          description={`A popular Lebanese restaurant established in 2015.
          Another greta choice for those craving Lebanese food.`}
          href={"https://goo.gl/maps/otVuMcWDiYKkPXxn8"} />
      </ul>
    </>
  )
}