import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function LatinAmericanCards() {
  return (
    <>
      <ul className={"grid gap-6 sm:grid-cols-2"}>
       {/* Ojo */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/ojo.jpg"}
        name={"Ojo"}
        station={"BTS Station: Chong Nonsi"}
        description={`Ojo Bangkok is a Mexican restaurant located on the 76th floor of the King Power Mahanakhon building (part of The Standard Bangkok Mahanakhon), 
        making it the highest restaurant in Thailand. 
        The name comes from the Spanish word for "eye," and offers 360-degree views of Bangkok.
        Led by one of Mexico's top chefs, Chef Paco Ruano presents a wide spectrum of Mexican fare, beyond the ubiquitous tacos and burritos.
        Specialities include appetizers like ceviche and grilled octopus, and hearty mains like the grilled Pescado Zarandeado and bone-in ribeye Carne Asada.
        A wide selection of cocktails and tequilas are also offered to compliment the food.
        Highly recommended for special occasions or romantic dates.`}
        href={"https://goo.gl/maps/Qx5Bzg5adQ2MiYiF7"} />
       {/* The Missing Burro */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/missingburro.jpg"}
        name={"The Missing Burro"}
        station={"BTS Station: Thong Lor"}
        description={`The Missing Burro is a Mexican restaurant known for serving authentic Mexican food.
        Tucked away in a small garden, the restaurant provides a peaceful and relaxing atmosphere away from the bustle of the main drag.
        The restaurant was founded by two Mexican brothers, Itzco and Tlahui Calva, who cook up time-tested recipes inspired by the traditional Yucatan cuisine they were raised on back home.
        Their main speciality is enchiladas, which are a must-try dish. Other popular dishes include "Barbacoa" and "Shrimp Tacos".
        The restaurant is very popular among locals and expats. A perfect place for a casual dinner.`}
        href={"https://goo.gl/maps/FswutzH4SZFoUnRH7"} />
       {/* La Monita Taqueria */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/lamonita.jpg"}
        name={"La Monita Taqueria"}
        station={"BTS Station: Phloen Chit"}
        description={`La Monita Taqueria is one of the first Mexican restaurants in Bangkok, having opened in 2009. 
        It is still a favorite in Bangkok's busy eating-out scene, offering reasonably priced authentic Mexican cuisine.
        The restaurant boasts a wide range of tacos, burritos, and quesadillas.
        The restaurant's owner, Billy Bautista, has added a hint of California to the dishes, which can be seen in the wide variety of fillings and salsas.
        La Monita Taqueria is the perfect place to have a casual meal with friends and has developed into a franchise with 2 locations in the city.`}
        href={"https://goo.gl/maps/yLur9K9nTqXGDyHp6"} />
       {/* Sabor Brasil */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/saborbrasil.jpg"}
        name={"Sabor Brasil"}
        station={"BTS Station: Asoke"}
        description={`Sabor Brasil is a casual Brazilian restaurant serving authentic Brazilian cuisine. 
        The restaurant was founded by a Brazilian couple who wanted to share their love for their country's food with the people of Thailand. 
        Its dishes include traditional Brazilian recipes, such as feijoada, picanha, and moqueca.
        One of the specialties of Sabor Brasil is their churrasco, which is a Brazilian-style barbecue that features a variety of meats that are cooked on skewers over an open flame. 
        The restaurant also offers a range of vegetarian and vegan options, such as the popular dish, moqueca de banana da terra.
        It is probably the most authentic Brazilian food I have had in a while and is a must-visit venue for anyone who loves Brazilian cuisine or wants to try it.`}
        href={"https://goo.gl/maps/6Y5ocR7Kn5DSK6pR6"} />
        {/* El Gaucho */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/elgaucho.jpg"}
        name={"El Gaucho"}
        station={"BTS Station: Asoke, Nana, Thong Lor & Chit Lom"}
        description={`El Gaucho is a chain of premier Argentinean steakhouse, located in Thong Lor, Asoke. 
        The restaurant was founded in Vietnam, with the aim to bring the authentic taste of Argentina's traditional asados (barbecues) to the city but has since expanded to Thailand.
        Their specialty lies in its premium-quality steaks, sourced from the finest cuts of beef and cooked to perfection using traditional Argentinean methods. 
        El Gaucho also offers an array of appetizers, salads, and desserts that perfectly complement the main courses. 
        Their extensive wine list, featuring a selection of fine Argentinean and international wines, adds to the overall dining experience.         
        Dining at El Gaucho is crucial for steak lovers.`}
        href={"https://goo.gl/maps/JqrXeJgE7F36RCWe7"} />
      </ul>
  </>
  )
}