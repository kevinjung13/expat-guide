import DiningCard from "@/components/Layout/DiningLayout/DiningCard"

export default function MiddleEastAndAfricaCards() {
  return (
    <>
      <ul className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
         {/* Taye */}
       <DiningCard
        picture={"/img/explore/dining/middle/icons/taye.jpg"}
        name={"Taye"}
        station={"BTS Station: Nana"}
        description={`Taye is a unique restaurant, bringing the authentic flavors of Ethiopia to the city. 
        The restaurant's specialties include traditional Ethiopian dishes such as Doro Wat, Injera, and Kitfo, all prepared with a perfect blend of spices and fresh ingredients.
        Being one of the only Ethiopian establishments in Bangkok, Taye is extremely underrated and overlooked by many expats.
        With its warm atmosphere and attentive staff, Taye creates a pleasant environment to enjoy lunch or dinner with friends or family.
        Taye is a must-visit venue for food enthusiasts.`}
        href={"https://goo.gl/maps/vgL8e4qucHvfv3Cm6"} />
        {/* Mama Dolores */}
        <DiningCard
        picture={"/img/explore/dining/middle/icons/mamadolores.jpg"}
        name={"Mama Dolores"}
        station={"MRT Station: Khlong Toei"}
        description={`Mama Dolores is a cozy Mediterranean restaurant located in the Yen Akat. 
        The restaurant is named after the owner's mother, who inspired her love of Mediterranean cuisine. 
        Mama Dolores has been serving up authentic Mediterranean dishes since 2011 and specialties include a variety of delicious mezze platters, homemade dips, grilled meats, and seafood dishes. 
        The menu features classic Mediterranean recipes, made with fresh ingredients sourced locally and imported from the region.
        It is a hidden gem of a restaurant that serves up some of the best Mediterranean food in Bangkok and is perfect for group dinners with friends and family.`}
          href={"https://goo.gl/maps/fLK15RLEX9NhmMgb6"} />
        {/* Beirut Restaurant */}
        <DiningCard
        picture={"/img/explore/dining/middle/icons/beirut.jpg"}
        name={"Beirut Restaurant"}
        station={"BTS Station: Sala Daeng / MRT Station: Silom"}
        description={`Beirut is a highly-rated Lebanese restaurant founded in 2014 by a passionate Lebanese family determined to bring the authentic flavors of their home country to Thailand.
        Specialties at Beirut include a variety of delicious mezze platters, grilled meats, and fresh seafood dishes.       
        The restaurant's intimate and inviting ambiance, featuring traditional Lebanese decor and music, creates a warm and welcoming atmosphere.        
        Overall, Beirut is a must-visit restaurant for anyone who loves Lebanese food.`}
          href={"https://goo.gl/maps/fU8eBD2NZXHjj39v5"} /> 
        {/* Nadimos */}
        <DiningCard
        picture={"/img/explore/dining/middle/icons/nadimos.jpg"}
        name={"Nadimos"}
        station={"BTS Station: Phrom Pong"}
        description={`Nadimos is also another highly-regarded Lebanese and Greek restaurant. 
        The restaurant was also founded by a Lebanese family in 1999, which now has 2 locations.
        Specialties at Nadimos include a wide variety of delicious mezze dishes, as well as grilled meats and fresh seafood.`}
          href={"https://goo.gl/maps/FkdzZVYSuAoUuhCr9"} /> 
        {/* Al Saray */}
        <DiningCard
        picture={"/img/explore/dining/middle/icons/alsaray.jpg"}
        name={"Al Saray"}
        station={"MRT Station: Lumphini"}
        description={`Al Saray is a popular Lebanese restaurant established in 2015.
        Specialties at Al Saray include a wide range of mezze dishes, grilled meats, and fresh seafood. `}
        href={"https://goo.gl/maps/otVuMcWDiYKkPXxn8"} /> 
      </ul>
  </>
  )
}