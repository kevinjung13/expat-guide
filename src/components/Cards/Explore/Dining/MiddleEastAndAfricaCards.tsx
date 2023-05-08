import DiningCard from "@/components/Layout/DiningLayout/DiningCard"

export default function MiddleEastAndAfricaCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {/* Taye */}
       <DiningCard
        picture={"/img/explore/dining/middle/icons/taye.jpg"}
        name={"Taye"}
        station={"BTS Station: Nana"}
          description={`"Taye" is a unique Ethiopian restaurant. Established in 2015, Taye brings the authentic flavors of Ethiopia to the city, offering a delightful culinary experience for both locals and tourists alike. 
        The restaurant's specialties include traditional Ethiopian dishes such as Doro Wat, Injera, and Kitfo, all prepared with a perfect blend of spices and fresh ingredients.
        One of the few Ethiopian establishments in Bangkok, Taye is dedicated to preserving and promoting the rich Ethiopian culinary heritage.
        The cozy and warm atmosphere of the restaurant, coupled with its attentive and friendly staff, ensures a memorable dining experience for everyone.
        Dining at Taye is not only about enjoying delicious food but also about discovering the unique customs and traditions of Ethiopian culture.
        With its authentic cuisine and welcoming ambiance, Taye is a must-visit destination for food enthusiasts seeking to explore the diverse flavors of the world.`}
        href={"https://goo.gl/maps/vgL8e4qucHvfv3Cm6"} />
        {/* Mama Dolores */}
        <DiningCard
        picture={"/img/explore/dining/middle/icons/mamadolores.jpg"}
        name={"Mama Dolores"}
        station={"MRT Station: "}
        description={`"Mama Dolores" is a cozy Mediterranean restaurant located in the Yen Akat area of Bangkok, Thailand. The restaurant is named after the owner's mother, who inspired her love of Mediterranean cuisine. Mama Dolores has been serving up authentic Mediterranean dishes to the people of Bangkok since 2011.
        Specialties at Mama Dolores include a variety of delicious mezze platters, homemade dips, grilled meats, and seafood dishes. The menu features classic Mediterranean recipes, made with fresh ingredients sourced locally and imported from the region.
        Dining at Mama Dolores is a must for anyone who loves Mediterranean food and wants to experience it in Bangkok. The restaurant's intimate and inviting ambiance, featuring warm lighting and rustic decor, creates a relaxed and cozy atmosphere. The staff are friendly and knowledgeable about the menu, providing helpful recommendations and ensuring a memorable dining experience.      
        Overall, Mama Dolores is a hidden gem of a restaurant that serves up some of the best Mediterranean food in Bangkok. Whether you're in the mood for mezze, grilled meats, or fresh seafood, Mama Dolores has something for everyone.`}
          href={"https://goo.gl/maps/fLK15RLEX9NhmMgb6"} />
        {/* Beirut Restaurant */}
        <DiningCard
        picture={"/img/explore/dining/middle/icons/beirut.jpg"}
        name={"Beirut Restaurant"}
        station={"BTS Station: Sala Daeng / MRT Station: Silom"}
        description={`"Beirut" is a highly-rated Lebanese restaurant located in the heart of Bangkok, Thailand. The restaurant was founded in 2014 by a Lebanese family with a passion for bringing the authentic flavors of their home country to Thailand.
        Specialties at Beirut include a variety of delicious mezze platters, grilled meats, and fresh seafood dishes. The menu features classic Lebanese recipes, made with fresh ingredients sourced locally and imported from the region.       
        Dining at Beirut is a unique and exciting experience, offering guests the opportunity to explore the vibrant and diverse flavors of Lebanese cuisine. The restaurant's intimate and inviting ambiance, featuring traditional Lebanese decor and music, creates a warm and welcoming atmosphere. The staff are knowledgeable and friendly, providing helpful recommendations and ensuring a memorable dining experience.       
        Overall, Beirut is a must-visit restaurant for anyone who loves Mediterranean food and wants to experience the authentic taste of Lebanon in Bangkok. With its delicious and diverse menu, warm and inviting atmosphere, and friendly service, Beirut is a restaurant that should not be missed.`}
          href={"https://goo.gl/maps/fU8eBD2NZXHjj39v5"} /> 
        {/* Nadimos */}
        <DiningCard
        picture={"/img/explore/dining/middle/icons/nadimos.jpg"}
        name={"Nadimos"}
        station={"BTS Station: Phrom Pong"}
        description={`"Nadimos" is a highly-regarded Lebanese restaurant located in the heart of Bangkok, Thailand. The restaurant was founded by a Lebanese family in 1999 with a vision to bring the traditional flavors and hospitality of their homeland to Thailand.
        Specialties at Nadimos include a wide variety of delicious mezze dishes, as well as grilled meats and fresh seafood. The menu features classic Lebanese recipes, made with fresh ingredients sourced locally and imported from the region.        
        Dining at Nadimos is an experience that should not be missed for anyone who loves Mediterranean food. The restaurant's elegant and welcoming atmosphere, featuring traditional Lebanese decor, creates a warm and inviting ambiance. The staff are knowledgeable and friendly, providing exceptional service and recommendations to ensure a memorable dining experience.        
        Overall, Nadimos is a must-visit restaurant for anyone looking to enjoy authentic Lebanese cuisine in Bangkok. With its diverse and delicious menu, elegant and welcoming atmosphere, and friendly service, Nadimos is a restaurant that promises to deliver an unforgettable dining experience.`}
          href={"https://goo.gl/maps/FkdzZVYSuAoUuhCr9"} /> 
        {/* Al Saray */}
        <DiningCard
        picture={"/img/explore/dining/middle/icons/alsaray.jpg"}
        name={"Al Saray"}
        station={"MRT Station: Lumphini"}
        description={`"Al Saray" is a popular Lebanese restaurant located in the heart of Bangkok, Thailand. The restaurant was established in 2015 with the aim of bringing the authentic taste of Lebanese cuisine to Thailand.
        Specialties at Al Saray include a wide range of mezze dishes, grilled meats, and fresh seafood. The menu features classic Lebanese recipes, made with fresh ingredients sourced locally and imported from the region.       
        Dining at Al Saray is a unique experience that should not be missed for anyone who loves Mediterranean food. The restaurant's elegant and stylish decor, featuring a beautiful Middle Eastern-inspired design, creates a warm and inviting atmosphere. The staff are friendly and knowledgeable, providing exceptional service and recommendations to ensure a memorable dining experience.       
        Overall, Al Saray is a must-visit restaurant for anyone looking to enjoy delicious Lebanese cuisine in Bangkok. With its diverse and flavorful menu, elegant decor, and friendly service, Al Saray is a restaurant that promises to deliver an unforgettable dining experience.`}
        href={"https://goo.gl/maps/otVuMcWDiYKkPXxn8"} /> 
      </ul>
  </>
  )
}