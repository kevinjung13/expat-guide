import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function LatinAmericanCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* Ojo */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/ojo.jpg"}
        name={"Ojo"}
        station={"BTS Station: Saint Louis / Chong Nonsi"}
          description={`Ojo Bangkok is a Mexican restaurant located on the 76th floor of the King Power Mahanakhon building, making it the highest restaurant in Thailand. 
        The restaurant opened in June 2022 and is part of The Standard Bangkok Mahanakhon.
        The restaurant's name comes from the Spanish word for "eye," and it offers 360-degree views of Bangkok.
        The restaurant's designer and artist, Nopadon "Ou" Baholyodhin, created a glamorous design for the restaurant.
        Chef Paco Ruano's goal is to present a wide spectrum of Mexican fare, beyond the ubiquitous tacos and burritos, and to serve stylish-looking dishes that guests can share while taking in gorgeous vistas of the city.
        The restaurant offers a variety of dishes, including appetizers like ceviche and grilled octopus, and hearty mains like the grilled Pescado Zarandeado and bone-in ribeye Carne Asada.
        The restaurant also offers a selection of cocktails and tequilas.
        Dining at Ojo Bangkok is a unique experience, as it offers not only delicious food but also stunning views of Bangkok.`}
        href={"https://goo.gl/maps/Qx5Bzg5adQ2MiYiF7"} />
       {/* The Missing Burro */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/missingburro.jpg"}
        name={"The Missing Burro"}
        station={"BTS Station: Thong Lor"}
          description={`The Missing Burro is a Mexican restaurant located in the peaceful Thonglor Soi 7 area of Bangkok. 
        The restaurant has been open since September 2016 and is known for serving authentic Mexican food.
        The restaurant is run by two Mexican brothers, Itzco and Tlahui Calva, who cook up time-tested recipes inspired by the traditional Yucatan cuisine they were raised on back home.
        The restaurant is known for its enchiladas, which are a must-try dish.
        The restaurant is popular among locals and tourists alike and has received much heartwarming feedback.
        Dining at The Missing Burro is important because it offers a unique and authentic Mexican dining experience in Bangkok.
        The restaurant is tucked away in a garden, providing a peaceful and relaxing atmosphere away from the bustle of the main drag.`}
        href={"https://goo.gl/maps/FswutzH4SZFoUnRH7"} />
       {/* La Monita Taqueria */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/lamonita.jpg"}
        name={"La Monita Taqueria"}
        station={"BTS Station: Phloen Chit"}
          description={`La Monita Taqueria is one of the first Mexican restaurants in Bangkok, having opened in 2009. 
        The restaurant is still a favorite in Bangkok's busy eating-out scene, offering reasonably priced authentic Mexican cuisine in a pleasant atmosphere.
        The restaurant is known for its amazing Mexican fare, including staples from south of the border like tacos, burritos, and quesadillas.
        The restaurant's owner, Billy Bautista, has added a hint of California to the dishes, which can be seen in the wide variety of fillings and salsas.
        La Monita Taqueria is important to dine at because it offers a true Mexican dining experience in Bangkok, with authentic flavors and a welcoming atmosphere.
        The restaurant has developed into a real franchise with restaurants in fancy locations around Bangkok, making it a popular choice among locals and tourists alike.`}
        href={"https://goo.gl/maps/yLur9K9nTqXGDyHp6"} />
       {/* Sabor Brasil */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/saborbrasil.jpg"}
        name={"Sabor Brasil"}
        station={"BTS Station: Asoke"}
          description={`Sabor Brasil is a unique restaurant in Bangkok that offers a taste of authentic Brazilian cuisine. 
        The restaurant was founded by a Brazilian couple who wanted to share their love for their country's food with the people of Thailand. 
        Sabor Brasil's menu is full of flavorful dishes that are made using traditional Brazilian recipes, such as feijoada, picanha, and moqueca.
        One of the specialties of Sabor Brasil is their churrasco, which is a Brazilian-style barbecue that features a variety of meats that are cooked on skewers over an open flame. 
        The restaurant also offers a range of vegetarian and vegan options, such as the popular dish, moqueca de banana da terra.
        Dining at Sabor Brasil is important because it provides an opportunity to experience the unique flavors and culture of Brazil in the heart of Bangkok.
        The restaurant's warm and welcoming atmosphere, combined with its delicious food and attentive service, make it a must-visit destination for anyone who loves Brazilian cuisine or wants to try something new.`}
        href={"https://goo.gl/maps/6Y5ocR7Kn5DSK6pR6"} />
        {/* El Gaucho */}
       <DiningCard
        picture={"/img/explore/dining/latin/icon/elgaucho.jpg"}
        name={"El Gaucho"}
        station={"BTS Station: Asoke, Nana, Thong Lor"}
          description={`El Gaucho is a premier Argentinean steakhouse located in the heart of Bangkok, Thailand. 
          Established by a group of passionate food enthusiasts, the restaurant aims to bring the authentic taste of Argentina's traditional asados (barbecues) to the vibrant city of Bangkok.
          The restaurant's specialty lies in its premium-quality steaks, sourced from the finest cuts of beef and cooked to perfection using traditional Argentinean methods. 
          El Gaucho also offers an array of delicious appetizers, salads, and desserts that perfectly complement the main courses. 
          The extensive wine list, featuring a selection of fine Argentinean and international wines, adds to the overall dining experience.         
          Dining at El Gaucho is essential for those seeking a true Argentinean culinary journey.
          The warm and elegant atmosphere, combined with the mouthwatering food and exceptional service, creates a memorable dining experience for meat lovers and food connoisseurs alike.
          Don't miss the opportunity to indulge in the rich flavors and traditions of Argentina at El Gaucho in Bangkok.`}
        href={"https://goo.gl/maps/JqrXeJgE7F36RCWe7"} />
      </ul>
  </>
  )
}