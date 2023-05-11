import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function AsiaCards() {
  return (
    <>
      <ul className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
       {/* Liaoning Chinese Cuisine */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/liaoning.jpg"}
        name={"Liaoning Chinese Cuisine"}
        station={"BTS Station: Chong Nonsi"}
        description={`Liaoning Chinese Cuisine is for anyone seeking an authentic Chinese dining experience.
         Liaoning has been serving up traditional Chinese cuisine for over four decades, making it one of the oldest Chinese restaurants in the city.
         It is best known for its signature dishes from the Liaoning province in Northeast China, such as stir-fried lamb with cumin, sautéed diced chicken with chili and peanuts, and braised eggplant with garlic sauce.
         Perfect for lunch with friends or family.`}
        href={"https://goo.gl/maps/fNEXjtWwfezZHEhS7"} />
       {/* Mensho Tokyo */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/mensho.jpg"}
        name={"Mensho Tokyo"}
        station={"BTS Station: Phrom Pong"}
        description={`Mensho Tokyo is a renowned ramen restaurant known for its authentic Japanese flavors. 
        Originally founded in 2012 in Tokyo, it has since expanded to Bangkok and is a favorite among locals and tourists alike.
        The restaurant's menu offers a variety of ramen dishes, with tender slices of chashu pork, bamboo shoots, and green onions.
        All chefs are trained in Japan and the ramen noodles are cooked to perfection, with just the right amount of chewiness and texture.`}
        href={"https://goo.gl/maps/QjhP5PhocCYrcMW9A"} />
        {/* Masu Maki Sushi & Bar */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/masu.jpg"}
        name={"Masu Maki Sushi & Bar"}
        station={"BTS Station: Phrom Pong"}
        description={`Masu Maki Sushi is a contemporary Japanese restaurant known for its innovative sushi creations. 
        It has quickly gained a reputation for its high-quality ingredients and expertly crafted dishes.
        What sets Masu Maki apart is its commitment to using only the freshest ingredients and incorporating modern twists on traditional Japanese cuisine.
        A must-visit for anyone seeking innovative and high-quality Japanese sushi in Bangkok.`}
        href={"https://goo.gl/maps/mh1k9mZwWkBuFvV3A"} />
        {/* Bangkok Banjom */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/banjom.jpg"}
        name={"Bangkok Banjom"}
        station={"BTS Station: Ekkamai"}
        description={`Bangkok Banjom offers a fusion of Chinese and Korean cuisine. 
        The restaurant has quickly become a popular for local Thais and Korean expats.
        The menu at Bangkok Banjom features a range of Chinese-Korean dishes, such as jajangmyeon (black bean noodles), 
        jjamppong (spicy seafood noodle soup), and tangsuyuk (sweet and sour pork). 
        The restaurant is particularly well-known for its jjajangbap (black bean sauce over rice) and jjamppongbap (spicy seafood noodle soup over rice) dishes. 
        Underrated and undiscovered for many expats.`}
        href={"https://goo.gl/maps/wrJR34HyAPiVfJKF9"} />
        {/* Korean Plaza */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/korean.jpg"}
        name={"Korean Plaza"}
        station={"BTS Station: Nana"}
          description={`Korean Plaza, also known as Sukhumvit Plaza, is a popular location for Korean food lovers. 
        It is a hub for Korean culture in the city, with a range of korean restaurants, shops and grocery stores catering to the Korean community and beyond.
        The plaza also hosts regular events and festivals celebrating Korean culture, such as the Korean Food Festival and Korean Pop Culture Festival.
        Recommended for those who love Korean food.`}
        href={"https://goo.gl/maps/tiHNGTRWmKx99saH8"} />
        {/* Haoma */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/haoma.jpg"}
        name={"Haoma ⭐"}
        station={"BTS Station: Asoke / MRT Station: Sukhumvit"}
        description={`Haoma offers a true farm-to-table Indian-Thai fusion dining experience using organic produce grown on-site. 
        Led by 1 michelin star Chef Deepanker Khosla, the concept revolves around a sustainable closed-loop ecosystem, where ingredients are grown in the restaurant's rooftop garden and hydroponic farm, then used to create the menu. 
        Some of the restaurant's specialties include the "Garden of Babylon" dish, and the "Jackfruit Tacos".
        Haoma is fully commitmented to sustainability and reducing their carbon footprint.`}
        href={"https://goo.gl/maps/bjNEUeHewqddyxpcA"} />
        {/* Teppen */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/teppen.jpg"}
        name={"Teppen"}
        station={"BTS Station: Chong Nonsi"}
        description={`Teppen offers an authentic teppanyaki dining experience. 
        Established in 1978, Teppen is renowned for its top-quality ingredients, including fresh seafood and high-grade meats, which are prepared in front of diners on a teppan grill by skilled chefs with years of experience in Japanese cuisine. 
        The result is a unique and theatrical culinary experience that has delighted diners for decades.
        Teppen's signature dishes include Wagyu beef, lobster, and sushi, all prepared with a meticulous attention to detail and served in a cozy and intimate atmosphere.
        Perfect place to enjoy food and drinks on a night out.`}
        href={"https://goo.gl/maps/kVgGTGuuwwHsPZM18"} />
        {/* Daimasu */}
       <DiningCard
        picture={"/img/explore/dining/asia/icon/daimasu.jpg"}
        name={"Daimasu"}
        station={"BTS Station: Chong Nonsi"}
        description={`Daimasu is a popular Japanese Izakaya-style restaurant.
        It was founded in 1986 and has become a well-known venue for authentic Japanese cuisine in the city.
        The menu at Daimasu features a range of traditional Japanese dishes, with a focus on fresh seafood and high-quality ingredients. 
        Some of the restaurant's specialties include sushi, sashimi, tempura and grilled meat.
        The restaurant imports many of its ingredients directly from Japan to ensure that its dishes are as authentic as possible. 
        Perfect for dinner with a group of friends.`}
        href={"https://goo.gl/maps/ocZsLJv2FVCK2Pg29"} />
      </ul>
    </>
  )
}