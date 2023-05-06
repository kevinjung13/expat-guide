import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function AsiaCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* Liaoning Chinese Cuisine */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/liaoning.jpg"}
        name={"Liaoning Chinese Cuisine"}
        station={"BTS Station: Chong Nonsi"}
        description={`Liaoning Chinese Cuisine is a must-visit restaurant for anyone seeking an authentic Chinese dining experience.
         Established in 1979, Liaoning has been serving up traditional Chinese cuisine for over four decades, making it one of the oldest Chinese restaurants in the city.
         Its menu boasts a variety of Chinese dishes, including dim sum, soups, seafood, poultry, pork, and vegetarian options.
         However, Liaoning is best known for its signature dishes from the Liaoning province in Northeast China, such as stir-fried lamb with cumin, sautéed diced chicken with chili and peanuts, and braised eggplant with garlic sauce.
         Highly recommened for those seeking authentic Northeastern Chinese food.`}
        href={"https://goo.gl/maps/fNEXjtWwfezZHEhS7"} />
       {/* Mensho Tokyo */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/mensho.jpg"}
        name={"Mensho Tokyo"}
        station={"BTS Station: Phrom Pong"}
          description={`Mensho Tokyo is a renowned ramen restaurant known for its authentic Japanese flavors and exceptional service. 
        Originally founded in 2012 in Tokyo, it has since expanded to Bangkok and is a favorite among locals and tourists alike.
        The restaurant's menu offers a variety of ramen dishes, including its signature shoyu ramen, which is made using a special soy sauce-based broth and topped with tender slices of chashu pork, bamboo shoots, and green onions.
        The restaurant's chefs are trained in Japan and the ramen noodles are cooked to perfection, with just the right amount of chewiness and texture.`}
        href={"https://goo.gl/maps/QjhP5PhocCYrcMW9A"} />
        {/* Masu Maki Sushi & Bar */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/masu.jpg"}
        name={"Masu Maki Sushi & Bar"}
        station={"BTS Station: Phrom Pong"}
          description={`Masu Maki Sushi and Bar is a contemporary Japanese restaurant known for its innovative sushi creations. 
        Established in 2018, Masu Maki has quickly gained a reputation for its high-quality ingredients and expertly crafted dishes.
        The restaurant's menu features a range of sushi rolls, sashimi, and Japanese-inspired dishes, such as the Masu Roll, which is made with salmon, avocado, and tempura flakes, and the Wagyu Beef Tataki, which is seared and served with garlic chips and ponzu sauce.
        What sets Masu Maki apart is its commitment to using only the freshest ingredients and incorporating modern twists on traditional Japanese cuisine.
        A must-visit for anyone seeking innovative and high-quality Japanese sushi in Bangkok.`}
        href={"https://goo.gl/maps/mh1k9mZwWkBuFvV3A"} />
        {/* Bangkok Banjom */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/banjom.jpg"}
        name={"Bangkok Banjom"}
        station={"BTS Station: Ekkamai"}
        description={`Bangkok Banjom offers a fusion of Chinese and Korean cuisine. 
        Established in 2015, the restaurant has quickly become a popular for local Thais and Koreans.
        The menu at Bangkok Banjom features a range of Chinese-Korean dishes, such as jajangmyeon (black bean noodles), 
        jjamppong (spicy seafood noodle soup), and tangsuyuk (sweet and sour pork). 
        The restaurant is particularly well-known for its jjajangbap (black bean sauce over rice) and jjamppongbap (spicy seafood noodle soup over rice) dishes. 
        Underrated and not so known yet.`}
        href={"https://goo.gl/maps/wrJR34HyAPiVfJKF9"} />
        {/* Korean Plaza */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/korean.jpg"}
        name={"Korean Plaza"}
        station={"BTS Station: Nana"}
          description={`Korean Plaza, also known as Sukhumvit Plaza, is a popular location for Korean food lovers. 
        Established in 1999, the plaza has become a hub for Korean culture in the city, with a range of korean restaurants, shops and grocery stores catering to the Korean community and beyond.
        From traditional Korean dishes like bibimbap and kimchi jjigae to Korean-style barbecue and fried chicken, Korean Plaza has something for every taste.
        The plaza also hosts regular events and festivals celebrating Korean culture, such as the Korean Food Festival and Korean Pop Culture Festival.`}
        href={"https://goo.gl/maps/tiHNGTRWmKx99saH8"} />
        {/* Haoma */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/haoma.jpg"}
        name={"Haoma"}
        station={"BTS Station: Asoke / MRT Station: Sukhumvit"}
        description={`Haoma offers a sustainable Indian-Thai fusion dining experience using organic produce grown on-site. 
        The restaurant was founded in 2017 by Chef Deepanker Khosla, with the concept revolving around a sustainable closed-loop ecosystem, where ingredients are grown in the restaurant's rooftop garden and hydroponic farm, then used to create the menu.
        Haoma is named after a plant in ancient Persian mythology that symbolizes immortality, health, and fertility. 
        Some of the restaurant's specialties include the "Garden of Babylon" dish, a colorful platter of vegetables and herbs grown on-site, and the "Jackfruit Tacos," which feature jackfruit cooked in Indian spices and served in a Thai-style taco shell.
        What makes Haoma unique is its commitment to sustainability and reducing food waste. The restaurant's innovative system of growing and sourcing ingredients allows them to offer a truly farm-to-table experience, while also reducing their carbon footprint.`}
        href={"https://goo.gl/maps/bjNEUeHewqddyxpcA"} />
        {/* Teppen */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/teppen.jpg"}
        name={"Teppen"}
        station={"BTS Station: Chong Nonsi"}
        description={``}
        href={"https://goo.gl/maps/kVgGTGuuwwHsPZM18"} />
        {/* Daimasu */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/daimasu.jpg"}
        name={"Daimasu"}
        station={"BTS Station: Asoke / MRT Station: Sukhumvit"}
        description={``}
        href={"https://goo.gl/maps/ocZsLJv2FVCK2Pg29"} />
      </ul>
    </>
  )
}