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
          buttonText={"Location"}
          description={`Authentic Ethiopian restaurant serving traditional dishes such as Doro Wat, Injera, and Kitfo, 
          all prepared with a perfect blend of spices and fresh ingredients.
          Extremely underrated and overlooked by many expats in my opinion.
          Great for lunch or dinner and a must-visit venue for food enthusiasts.`}
          href={"https://goo.gl/maps/vgL8e4qucHvfv3Cm6"} />
        {/* Beirut Restaurant */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/beirut.jpg"}
          name={"Beirut Restaurant"}
          title={"BTS Station: Sala Daeng / MRT Station: Silom"}
          buttonText={"Location"}
          description={`One of my favorite Lebanese restaurants in Bangkok.
          Its menu offers a variety of delicious mezze platters, grilled meats, and fresh seafood dishes.             
          A must-visit restaurant for anyone who loves Lebanese food and perfect for a casual meal with friends.
          For vegans and vegetarians: Hummus Heads is a better choice.`}
          href={"https://goo.gl/maps/fU8eBD2NZXHjj39v5"} />
        {/* Mama Dolores */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/mamadolores.jpg"}
          name={"Mama Dolores"}
          title={"MRT Station: Khlong Toei"}
          buttonText={"Location"}
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
          buttonText={"Location"}
          description={`A chain of Lebanese and Greek restaurants, with 2 locations in the city. 
          Founded by a Lebanese family in 1999, with the intention of sharing Lebanese food to the locals.
          A great choice for those living or located in the Sukhumvit area.
          Offers a good range of Greek dishes as well.`}
          href={"https://goo.gl/maps/FkdzZVYSuAoUuhCr9"} />
        {/* Hummus Heads */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/beirut.jpg"}
          name={"Hummus Heads"}
          title={"BTS Station: Thong Lor"}
          buttonText={"Location"}
          description={`Specializes in Middle Eastern cuisine with a focus on hummus. 
          Known for its hummus dishes, including classic hummus with pita bread, hummus bowls, and hummus wraps.
          Uses fresh and high-quality ingredients, including organic chickpeas and locally-sourced vegetables. 
          Vegan and vegetarian friendly.`}
          href={"https://goo.gl/maps/yqJhsgpzzVoSPTva8"} />
        {/* Al Saray */}
        <ExploreCard
          picture={"/img/explore/dining/middle/icons/alsaray.jpg"}
          name={"Al Saray"}
          title={"MRT Station: Lumphini"}
          buttonText={"Location"}
          description={`A popular and newer Lebanese restaurant established in 2015, with some Indian dishes as well.
          Another great choice for those craving Lebanese food and quite popular on food delivery apps. 
          The interior is modern and prices are higher than others.
          Perfect for dinners with friends or family.`}
          href={"https://goo.gl/maps/otVuMcWDiYKkPXxn8"} />
      </ul>
    </>
  )
}