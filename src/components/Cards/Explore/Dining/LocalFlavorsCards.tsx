import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function LocalFlavorsCards() {
  return (
     <>
      <ul className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
       {/* Chinatown */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/chinatown.jpg"}
        name={"Chinatown"}
        station={"MRT Station: Wat Mangkon"}
        description={`A vibrant district filled with bustling markets, authentic Chinese cuisine, and cultural landmarks. 
        Yaowarat is the main road that runs through Chinatown and is a food lover's paradise, offering a wide variety of street food and traditional Chinese dishes. 
        From seafood to dim sum to sweet desserts, Chinatown has something to satisfy every craving and is an experience that should not be missed.`}
        href={"https://goo.gl/maps/yjTcWfaZ6sWjCeJX6"} />
       {/* Polo Fried Chicken */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/polo.jpg"}
        name={"Polo Fried Chicken"}
        station={"MRT Station: Lumphini"}
        description={`Polo Fried Chicken specializes in serving delicious and crispy fried chicken. 
        The restaurant has been around for over 50 years and is known for its secret recipe that uses a blend of herbs and spices to give the chicken its unique and flavorful taste.
        Apart from the fried chicken, the restaurant also serves a variety of other dishes, including rice, noodles, and salads.`}
        href={"https://goo.gl/maps/sNJYtvwqcXeSiogd7"} />
        {/* Wattana Panich */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/panich.jpg"}
        name={"Wattana Panich"}
        station={"BTS Station: Ekkamai"}
        description={`Wattana Panich is known for its delicious and flavorful beef noodle soup. 
        The restaurant has been serving customers for over 50 years and is a favorite among locals and tourists alike.
        The rich and savory broth was made half a century ago and has been slow-cooking ever since! Perfect for Beef noodle soup lovers.
        Their menu also includes a variety of other dishes, such as stir-fried noodles and rice dishes.`}
        href={"https://goo.gl/maps/3xEL9z1YgcG7Wmk58"} />
        {/* Sabaijai */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/sabaijai.jpg"}
        name={"Sabaijai"}
        station={"BTS Station: Ekkamai"}
        description={`Sabaijai serves a wide range of fresh and flavorful Thai dishes, from hearty soups and rich curries to savory stir-fries and comforting noodles.
        Signature dishes include the spicy papaya salad (Som-Tam), the tangy tom yum soup, and the aromatic green curry with chicken.
        The restaurant has a cozy ambiance, with traditional Thai decor and comfortable seating, making it the perfect spot for a relaxed meal with friends or family.`}
        href={"https://goo.gl/maps/bga9aVX2FWgL5bAk8"} />
        {/* Saengchai Phochana*/}
       <DiningCard
        picture={"/img/explore/dining/local/icons/saengchai.jpg"}
        name={"Saengchai Phochana"}
        station={"BTS Station: Phrom Pong"}
        description={`Saengchai Pochana specializes in Thai-Chinese cuisine. 
        Known for its generous portions, the restaurant's menu features a wide selection of thai dishes, including seafood and meat-based options.
        Signature dishes include the sweet and sour pork, the spicy basil stir-fry with minced pork, and the crispy deep-fried sea bass. 
        Due to its casual atmosphere, it is perfect for a quick lunch or a leisurely dinner.`}
        href={"https://goo.gl/maps/9dVc1SwmPrtT6kENA"} />
        {/* Jay Fai */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/jayfai.jpg"}
        name={"Jay Fai ⭐"}
        station={"MRT Station: Sam Yot"}
        description={`Jay Fai (name of the restaurant and legendary owner/head chef) is a world-renowned 1 michelin star street food restaurant, famous for its "drunken noodles" and crab omelet. 
        A-list hollywood stars such as "John Legend" and "Russell Crowe" are known to have dined there.
        Her story and restaurant was also featured on Netflix's "Street Food" Series.
        Reservations are difficult and may need to be done months ahead.`}
        href={"https://goo.gl/maps/MtkcrWp5RdjUnbNk9"} />
        {/* Ter Sab Woey */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/tersabwoey.jpg"}
        name={"Ter Sab Woey"}
        station={"BTS Station: Chong Nonsi"}
        description={`Ter Sab Woey offers a unique take on the fushion of traditional Thai cuisine and western dishes. 
        Popular dishes include the spicy pork ribs, the green curry pasta, and the fried chicken with tamarind sauce.
        The restaurant has a laid-back vibe that makes it a popular spot for both expats and locals.
        Perfect for a local and casual dinner with friends or family.`}
        href={"https://goo.gl/maps/xGxTC5S6DLPdhLX97"} />
        {/* Laab Ubon */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/laabubon.jpg"}
        name={"Laab Ubon"}
        station={"BTS Station: Surasak"}
        description={`Laab Ubon specializes in authenic Northeastern Thai cuisine, also known as "Isan cuisine". 
        Popular dishes include "laab" (a spicy minced meat salad), grilled pork neck, the papaya salad, and the spicy minced pork with herbs.
        A casual atmosphere that is perfect for a relaxed dining experience.
        The restaurant is a favorite among expats and locals alike and is a must.`}
        href={"https://goo.gl/maps/ZgWsbsQdrZHbKzfz9"} />
        {/* Moohun Song Phi Nong */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/moo.jpg"}
        name={"Moohun Song Phi Nong"}
        station={"BTS Station: Chong Nonsi"}
        description={`Moohun Song Phi Nong features a range of Thai dishes, but is primarily known for its pork dishes.
        Some signature dishes include the "moo hong", a tender and flavorful pork stew that is a must-try for any first-time visitor, as well as its crispy "baby pork".
        Popular for casual group dinners.`}
        href={"https://goo.gl/maps/jHRo42GEsb9d1K9F6"} />
        {/* Baan Nual */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/baannual.jpg"}
        name={"Baan Nual"}
        station={"MRT Station: Sam Yot"}
        description={`Baan Nual is a family-style restaurant that specializes in traditional Thai home-cooked dishes. 
        With only 2 large wooden tables, the menu features a range of dishes made with fresh, locally-sourced ingredients.
        Demand is high and reservations and food orders are required in advance. 
        Excellent choice for authentic dinners with friends or family.`}
        href={"https://goo.gl/maps/1B1ioh1QjT1f5Uqs6"} />
        {/* HAAWM */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/haawm.jpg"}
        name={"HAAWM"}
        station={"BTS Station: On Nut"}
        description={`Haawm is a private dining venue, hosted by chef Dylan Eitharong, a well renouned Thai-American chef.
        Reservations are usually booked up months in advance, so it is recommended to make them in advance.
        Diners share dishes in 1 large table and if you do not book the whole table, you will be dining with others - a fun way to enjoy epic multi-course meals, make new friends and meet fellow foodies.
        Perfect for a large group of friends or family.`}
        href={"https://goo.gl/maps/4WCw1GsZLYKMEP6J6"} />
        {/* Charm Eatery and Bar */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/charm.jpg"}
        name={"Charm Eatery and Bar"}
        station={"BTS Station: Chong Nonsi"}
        description={`Charm Eatery and Bar is a modern and trendy restaurant and bar offering a unique blend of Thai and Western cuisine. 
        The menu features a variety of flavorful and creative dishes, including the spicy pork belly sliders, the crispy pork belly with apple chutney, and the seared tuna with wasabi cream.
        Charm Eatery and Bar also offers a great selection of craft cocktails, making it a popular spot for a night out with friends.`}
        href={"https://goo.gl/maps/AAAirZUMJMRjHfy98"} />
        {/* Lon Lon Local Diner */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/lonlon.jpg"}
        name={"Lon Lon Local Diner"}
        station={"BTS Station: Chong Nonsi"}
        description={`Lon Lon Local Diner is a cozy Thai restaurant that is popular among locals.
        It offers a range of authentic Thai dishes and signature dishes include Tamarind Shrimp, Pickle Cabbage Basil Omelet and Bird Eye's stir fry prawn meat.
        Perfect for a slow lunch or a leisurely dinner, as well as for those seeking for truly authentic Thai cuisine.`}
        href={"https://goo.gl/maps/RxmwfnfRkhAgfaNB9"} />
        {/* Supanniga Eating Room */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/supanniga.jpg"}
        name={"Supanniga Eating Room"}
        station={"BTS Station: Thong Lor / Chong Nonsi"}
        description={`Located across three different areas of the city (Thong Lor, Sathorn, and Tha Tien), 
        Supanniga Eating Room is an esteemed restaurant renowned for its unique take on traditional Thai cuisine.
        Established with a mission to revive and promote authentic Thai cuisine, their menu boasts a range of classic Thai dishes from different regions, with a modern twist. 
        popular dishes include Isaan-style spicy salad and the Southern-style yellow curry with crab.
        A great treat for those new to Thai cuisine.`}
        href={"https://goo.gl/maps/K7Zj2oMmb5wGenEP7"} />
        {/* Rongros */}
       <DiningCard
        picture={"/img/explore/dining/local/icons/rongros.jpg"}
        name={"Rongros"}
        station={"MRT Station: Sanam Chai"}
        description={`Situated along the Chao Phraya river and just across Wat Arun (The Temple of Dawn), 
        Rongros is a sleek and stylish restaurant that specializes in Thai fusion cuisine. 
        The restaurant's menu features a variety of dishes that blend Thai flavors and cooking techniques with international influences. 
        Some popular dishes include the crispy pork belly with tamarind sauce, the green curry with seared duck breast, and the tom yum seafood risotto.
        Perfect for dinner dates or a meal with friends and family.`}
        href={"https://goo.gl/maps/7YAzXsR7j9t2jgKNA"} />
      </ul>
    </>
  )
}