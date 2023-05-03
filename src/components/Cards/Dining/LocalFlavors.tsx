import Link from "next/link";

const localFlavors = [

    /* === CHINATOWN === */
    {
      picture: "/img/explore/dining/local/icons/chinatown.jpg", 
      name: "Chinatown",
      station: "MRT Station: Hua Lamphong / Wat Mangkon",
      description: `Chinatown is a vibrant district filled with bustling markets, authentic Chinese cuisine, and cultural landmarks. 
      Yaowarat is the main road that runs through Chinatown and is a food lover's paradise, offering a wide variety of street food and traditional Chinese dishes. 
      From seafood to dim sum to sweet desserts, Yaowarat has something to satisfy every craving and is an experience that should not be missed.`,
      href: "https://goo.gl/maps/yjTcWfaZ6sWjCeJX6",
    },
    /* === POLO FRIED CHICKEN === */
    {
      picture: "/img/explore/dining/local/icons/polo.jpg",
      name: "Polo Fried Chicken",
      station: "MRT Station: Lumphini",
        description: `Polo Fried Chicken specializes in serving delicious and crispy fried chicken. 
      The restaurant has been around for over 50 years and is known for its secret recipe that uses a blend of herbs and spices to give the chicken its unique and flavorful taste.
      Apart from the fried chicken, the restaurant also serves a variety of other dishes, including rice, noodles, and salads.`,
      href: "https://goo.gl/maps/sNJYtvwqcXeSiogd7",
    },

    /* === WATTANA PANICH === */
    {
      picture: "/img/explore/dining/local/icons/panich.jpg",
      name: "Wattana Panich",
      station: "BTS Station: Ekkamai",
        description: `Wattana Panich is known for its delicious and flavorful beef noodle soup. 
      The restaurant has been serving customers for over 50 years and is a favorite among locals and tourists alike.
      The rich and savory broth was made half a century ago and has been slow-cooking ever since! Perfect for Beef noodle soup lovers.
      Their menu also includes a variety of other dishes, such as stir-fried noodles and rice dishes.`,
      href: "https://goo.gl/maps/3xEL9z1YgcG7Wmk58",
    },

    /* === SABAIJAI === */
    {
      picture: "/img/explore/dining/local/icons/sabaijai.jpg",
      name: "Sabaijai",
      station: "BTS Station: Ekkamai",
        description: `Located in the bustling area of Ekkamai, 
        Sabaijai serves a wide range of fresh and flavorful Thai dishes, from hearty soups and rich curries to savory stir-fries and comforting noodles.
        Some of the restaurant's signature dishes include the spicy papaya salad, the tangy tom yum soup, and the aromatic green curry with chicken.
        The restaurant has a cozy ambiance, with traditional Thai decor and comfortable seating, making it the perfect spot for a relaxed meal with friends or family.`,
        href: "https://goo.gl/maps/bga9aVX2FWgL5bAk8",
    },

    /* === SAENGCHAI PHOCHANA ===  */
    {
      picture: "/img/explore/dining/local/icons/saengchai.jpg",
      name: "Saengchai Phochana",
      station: "BTS Station: Thong Lor / Phrom Pong",
        description: `Saengchai Pochana is a popular restaurant located in Bangkok that specializes in Thai-Chinese cuisine. 
        Known for its generous portions, the restaurant's menu features a wide selection of dishes, including stir-fries, soups, and noodle dishes, as well as seafood and meat-based options.
        Signature dishes include the sweet and sour pork, the spicy basil stir-fry with minced pork, and the crispy deep-fried sea bass. 
        The restaurant's decor is simple, with a casual atmosphere that is for a quick lunch or a leisurely dinner.`,
      href: "https://goo.gl/maps/9dVc1SwmPrtT6kENA",
    },

    /* === JAY FAI === */
    {
      picture: "/img/explore/dining/local/icons/jayfai.jpg",
      name: "Jay Fai ⭐",
      station: "MRT Station: Sam Yot",
        description: `Jay Fai (both the name of the restaurant and owner/head chef) is a world-renowned 1 michelin star street food restaurant, famous for its "drunken noodles" and crab omelet. 
      Jay Fai is a legendary figure in the Thai street food scene, with A-list hollywood stars such as "John Legend" and "Russell Crowe" known to have dined there.
      Her story and restaurant was also featured on Netflix's "Street Food" Series, showcasing her open kitchen (which allows diners to watch her at work).
      Despite the humble appearance, Jay Fai is considered one of the best restaurants in Bangkok, and is a must. Reservations are difficult and may need to be done months ahead.`,
      href: "https://goo.gl/maps/MtkcrWp5RdjUnbNk9",
    },

    /* === TER SAB WOEY === */
    {
        picture: "/img/explore/dining/local/icons/tersabwoey.jpg",
        name: "Ter Sab Woey",
        station: "BTS Station: Chong Nonsi",
        description: `Ter Sab Woey offers a unique take on the fushion of traditional Thai cuisine and western dishes. 
        Popular dishes include the spicy pork ribs, the green curry pasta, and the fried chicken with tamarind sauce.
        The restaurant has a laid-back vibe that makes it a popular spot for both expats and locals.
        Perfect for a casual dinner with friends or family.`,
        href: "https://goo.gl/maps/xGxTC5S6DLPdhLX97",
    },

    /* === LAAB UBON === */
    {
      picture: "/img/explore/dining/local/icons/laabubon.jpg",
      name: "Laab Ubon",
      station: "BTS Station: Surasak",
      description: `Laab Ubon specializes in authenic Northeastern Thai cuisine, also known as "Isan cuisine". 
        Popular dishes include "laab" (a spicy minced meat salad), grilled pork neck, the papaya salad, and the spicy minced pork with herbs.
      A casual atmosphere that is perfect for a relaxed dining experience.
      The restaurant is a favorite among expats and locals alike.`,
      href: "https://goo.gl/maps/ZgWsbsQdrZHbKzfz9",
    },

    /* === MOOHUN SONG PHI NONG === */
    {
      picture: "/img/explore/dining/local/icons/moo.jpg",
      name: "Moohun Song Phi Nong",
      station: "BTS Station: Chong Nonsi",
        description: `Moohun Song Phi Nong features a range of Thai dishes, but is primarily known for its pork dishes.
      Some signature dishes include the "moo hong", a tender and flavorful pork stew that is a must-try for any first-time visitor, as well as its crispy baby pork.
      Popular for casual group dinners.`,
      href: "https://goo.gl/maps/jHRo42GEsb9d1K9F6",
    },

    /* === BAAN NUAL === */
    {
      picture: "/img/explore/dining/local/icons/baannual.jpg", 
      name: "Baan Nual",
      station: "MRT Station: Sam Yot",
        description: `Baan Nual is a family-style restaurant that specializes in traditional Thai home-cooked dishes. 
      With only 2 large wooden tables, the menu features a range of dishes made with fresh, locally-sourced ingredients.
      Reservations and food orders are required in advance.
      Excellent choice for authentic dinners with friends or family.`,
      href: "https://goo.gl/maps/1B1ioh1QjT1f5Uqs6",
    },

    /* === HAAWM === */
    {
      picture: "/img/explore/dining/local/icons/haawm.jpg", 
      name: "HAAWM",
      station: "BTS Station: On Nut",
        description: `Haawm is a private dining venue, hosted by chef Dylan Eitharong, a well renouned Thai-American chef.
        Reservations are usually booked up months in advance, so it is good to make them in advance.
        There is only 1 large shared table and if you do not book the whole table, you will be dining with others - a fun way to enjoy epic multi-course meals, make new friends and meet fellow foodies.
      The family-style food usually consists of a fusion of Thai and Western dishes, and uses fresh, high-quality ingredients.
      Dishes are usually customized and diners will not know what they will have until they are seated.
      The interior is chic and modern, with a sleek bar area and an open kitchen that allows diners to watch chef Dylan at work.
      The staff is knowledgeable and attentive, and the restaurant offers a great selection of cocktails and other beverages to complement your meal.
      Perfect for a large group of friends or family.`,
      href: "https://goo.gl/maps/4WCw1GsZLYKMEP6J6",
    },

    /* === CHARM EATERY AND BAR === */
    {
      picture: "/img/explore/dining/local/icons/charm.jpg", 
      name: "Charm Eatery and Bar",
      station: "BTS Station: Chong Nonsi / Saint Louis",
        description: `Charm Eatery and Bar is a trendy restaurant and bar offering a unique blend of Thai and Western cuisine. 
      The menu features a variety of flavorful and creative dishes, including the spicy pork belly sliders, the crispy pork belly with apple chutney, and the seared tuna with wasabi cream.
      The restaurant's interior is stylish and modern, with an industrial-chic vibe that makes it a popular spot for a night out with friends.
        Charm Eatery and Bar also offers a great selection of craft cocktails, making it a great place to start or end your evening.`,
      href: "https://goo.gl/maps/AAAirZUMJMRjHfy98",
    },

    /* === LON LON LOCAL DINER === */
    {
      picture: "/img/explore/dining/local/icons/lonlon.jpg",
      name: "Lon Lon Local Diner",
      station: "BTS Station: Chong Nonsi",
        description: `Lon Lon Local Diner is a popular Thai restaurant that offers a range of authentic Thai dishes. 
        Signature dishes include Tamarind Shrimp, Pickle Cabbage Basil Omelet and Bird Eye's stir fry prawn meat.
        The restaurant's interior is cozy and has a warm atmosphere.
        The staff is knowledgeable and are especially helpful to diners who may be unfamiliar with Thai cuisine.
        Perfect for a slow lunch or a leisurely dinner.`,
      href: "https://goo.gl/maps/RxmwfnfRkhAgfaNB9",
    },

    /* === SUPANNIGA EATING ROOM === */
    {
      picture: "/img/explore/dining/local/icons/supanniga.jpg",
      name: "Supanniga Eating Room",
      station: "BTS Station: Chong Nonsi",
        description: `With 3 branches in the city (Thong Lor, Sathorn and Tha Tien), Supanniga Eating Room is a highly regarded restaurant that specializes in serving traditional Thai dishes with a modern twist. 
      The restaurant's menu features a variety of classic Thai dishes from different regions of the country, such as the Isaan-style spicy salad and the Southern-style yellow curry with crab.
      The restaurant's interior is elegant and sophisticated, with a contemporary design that creates a refined dining experience.
      The staff is attentive and knowledgeable, providing helpful recommendations to diners who may be unfamiliar with the menu.
      Supanniga Eating Room is a great choice for those looking for a refined and memorable Thai dining experience in Bangkok.`,
      href: "https://goo.gl/maps/K7Zj2oMmb5wGenEP7",
    },

    /* === RONGROS === */
    {
      picture: "/img/explore/dining/local/icons/rongros.jpg",
      name: "Rongros",
      station: "BTS Station: Chong Nonsi",
      description: `Rongros is a modern restaurant in Bangkok that specializes in serving Thai fusion cuisine. 
      The restaurant's menu features a variety of dishes that blend Thai flavors and cooking techniques with international influences, resulting in unique and delicious flavor combinations.
      Some popular dishes include the crispy pork belly with tamarind sauce, the green curry with seared duck breast, and the tom yum seafood risotto.
      The restaurant's interior is sleek and stylish, with contemporary decor that creates a chic and trendy atmosphere.
      The staff is friendly and knowledgeable, providing excellent service to diners.
      Rongros is a great option for those looking for a modern and innovative take on Thai cuisine in Bangkok.`,
      href: "https://goo.gl/maps/7YAzXsR7j9t2jgKNA",
  }]

export default function LocalFlavors() {
  return (
     <>
      <section className="py-14">
       <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
         <h3 className="text-gray-800 text-5xl font-semibold sm:text-4xl">
          Local Flavors
         </h3>
         <p className="mt-3 text-cyan-700">
          Showcasing the best of the city's local culinary offerings.
          From classic street food stalls to upscale eateries,
          each restaurant and area on the list is known for its authentic Thai flavors,
          warm hospitality, and inviting atmosphere.
         </p>
        </div>
        <div className="mt-12">
         <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {localFlavors.map((item, idx) => (
           <li key={idx} className="bg-gray-50 p-4 rounded-xl">
            <Link href={item.href} target={"_blank"}>
             <figure>
              <div className="flex items-center gap-x-4">
               <img src={item.picture} className="w-16 h-16 rounded-full" />
                <div>
                 <span className="block text-gray-800 font-semibold">{item.name}</span>
                 <span className="block text-gray-600 text-sm mt-0.5">{item.station}</span>
                </div>
               </div>
               <p className="mt-6 text-gray-700">
                {item.description}
               </p>
              </figure>
            </Link>
           </li>))
           }
         </ul>
        </div>
     </div>
    </section>
  </>
  )
}

