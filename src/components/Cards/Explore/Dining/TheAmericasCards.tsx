import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function TheAmericasCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        {/* Ojo */}
        <ExploreCard
          picture={"/img/explore/dining/latin/icon/ojo.jpg"}
          name={`Ojo (Spanish for "eye")`}
          title={"BTS Station: Chong Nonsi"}
          buttonText={"Ojo"}
          description={`Mexican restaurant on the 76th floor of the King Power Mahanakhon building. 
          It is the highest restaurant in Thailand and offers 360-degree views of Bangkok.
          Led by one of Mexico's top chefs, Ojo presents a wide spectrum of Mexican flavors, beyond just tacos and burritos.
          Specialities include ceviche, grilled octopus, grilled Pescado Zarandeado and bone-in ribeye Carne Asada.
          Highly recommended for special occasions or fancy romantic dates.`}
          href={"https://goo.gl/maps/Qx5Bzg5adQ2MiYiF7"} />
        {/* The Smokin' Pug */}
        <ExploreCard
          picture={"/img/explore/dining/latin/icon/smokin.jpg"}
          name={"The Smokin' Pug"}
          title={"BTS Station: Ratchadamri"}
          buttonText={"The Smokin' Pug"}
          description={`Specializes in Southern US-style barbecue, that is rare to find in Thailand.
          Known for its smoked meats, including brisket, ribs, and pulled pork, along with sides like mac and cheese, collard greens, and cornbread. 
          The restaurant uses a traditional wood-fired smoker to slow-cook their meats, giving them a smoky and tender flavor that is hard to resist.
          Perfect for dinner with friends or family.`}
          href={"https://goo.gl/maps/5a5bzJroeyq6pjuSA"} />
        {/* The Missing Burro */}
        <ExploreCard
          picture={"/img/explore/dining/latin/icon/missingburro.jpg"}
          name={"The Missing Burro"}
          title={"BTS Station: Thong Lor"}
          buttonText={"The Missing Burro"}
          description={`Tucked away in a small garden, The Missing Burro is a restaurant was founded by two Mexican brothers, Itzco and Tlahui Calva, who cook up time-tested recipes inspired by the traditional Yucatan cuisine they were raised on back home.
          Their main speciality is enchiladas, which are a must-try dish. 
          Other popular dishes include "Barbacoa" and "Shrimp Tacos".
          The atmosphere is peaceful, relaxing, and is very popular among locals and expats.
          A perfect place for a casual dinner.`}
          href={"https://goo.gl/maps/FswutzH4SZFoUnRH7"} />
        {/* La Monita Taqueria */}
        <ExploreCard
          picture={"/img/explore/dining/latin/icon/lamonita.jpg"}
          name={"La Monita Taqueria"}
          title={"BTS Station: Phloen Chit"}
          buttonText={"La Monita Taqueria"}
          description={`One of the first Mexican restaurants in Bangkok and still a favorite in Bangkok's busy eating-out scene.
          Reasonably priced and boasts a wide range of tacos, burritos, and quesadillas.
          The owner, Billy Bautista, has added a hint of California to the dishes, which can be seen in the wide variety of fillings and salsas.
          La Monita is the perfect place to have a casual meal with friends and has developed into a franchise with 2 locations in the city.`}
          href={"https://goo.gl/maps/yLur9K9nTqXGDyHp6"} />
        {/* Sabor Brasil */}
        <ExploreCard
          picture={"/img/explore/dining/latin/icon/saborbrasil.jpg"}
          name={"Sabor Brasil"}
          title={"BTS Station: Asoke"}
          buttonText={"Sabor Brasil"}
          description={`A casual Brazilian restaurant serving authentic Brazilian cuisine. 
          Boasts traditional Brazilian dishes, such as feijoada, picanha, and moqueca, with one of their specialty being churrasco (a Brazilian-style barbecue that features a variety of meats that are cooked on skewers over an open flame.) 
          Vegetarian and vegan friendly.
          It is probably the most authentic Brazilian food I have had in a while and is a must-visit venue for anyone who loves Brazilian cuisine or wants to try it.`}
          href={"https://goo.gl/maps/6Y5ocR7Kn5DSK6pR6"} />
        {/* El Gaucho */}
        <ExploreCard
          picture={"/img/explore/dining/latin/icon/elgaucho.jpg"}
          name={"El Gaucho"}
          title={"BTS Station: Asoke, Nana, Thong Lor & Chit Lom"}
          buttonText={"El Gaucho"}
          description={`A chain of Argentinean steakhouses, located in Sukhumvit. 
          Started in Vietnam but has since expanded to Thailand, bringing Argentina's traditional asados (barbecues).
          The steaks are premium-quality, sourced from the finest cuts of beef and cooked to perfection using traditional Argentinean methods. 
          Also offers an extensive wine list, array of appetizers, salads, and desserts.         
          Dining at El Gaucho is crucial for steak lovers.`}
          href={"https://goo.gl/maps/JqrXeJgE7F36RCWe7"} />
      </ul>
    </>
  )
}