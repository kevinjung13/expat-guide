import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function EuropeCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* Bardo Social Bar & Bistro */}
       <DiningCard
        picture={"/img/explore/dining/europe/icon/bardo.jpg"}
        name={"Bardo Social Bar & Bistro"}
        station={"BTS Station: Saint Louis / Chong Nonsi"}
        description={`Bardo Social Bistro and Bar is a chic restaurant and bar located in the heart of Bangkok's Sathorn neighborhood. 
        The restaurant was founded in 2020 by a group of friends who wanted to create a unique dining experience that combined delicious food, creative cocktails, and a vibrant atmosphere.
        The menu at Bardo Social Bistro and Bar features a range of contemporary European dishes with Asian influences, including a variety of small plates, salads, and main courses. 
        The restaurant's specialties include the "Chicken Milanese," and the "," .
        In addition to its delicious food, Bardo Social Bistro and Bar is also known for its inventive cocktail menu. 
        The bar offers a range of creative and well-crafted cocktails, including the "," made with x, y, and z, and the "x," made with x, smoked y, and z.
        What makes Bardo Social Bistro and Bar unique is its lively and stylish atmosphere, along with its friendly staff.
        Popular among expats.`}
        href={"https://goo.gl/maps/Jb5yGFi3hjRKvx7a7"} />
       {/* Peppina */}
       <DiningCard
        picture={"/img/explore/dining/europe/icon/peppina.jpg"}
        name={"Peppina"}
        station={"BTS Station: Phrom Pong"}
        description={`Peppina is a popular Italian restaurant chain in Bangkok, with multiple locations throughout the city. 
        The restaurant was founded by a group of Italian expats who wanted to bring authentic Italian cuisine to Bangkok.
        The menu at Peppina features a variety of classic Italian dishes, including wood-fired pizzas, homemade pastas, and fresh salads. 
        The restaurant's specialties include the "Burrata Pizza," a delicious pizza topped with creamy burrata cheese, cherry tomatoes, and 
        fresh basil, and the "Cacio e Pepe," a simple yet flavorful pasta dish made with black pepper and pecorino romano cheese.
        One of the reasons why Peppina is so popular is because of the quality of its ingredients. 
        The restaurant uses only the freshest and highest quality ingredients, including imported Italian flour for its pizzas and homemade pasta made with organic eggs.
        The restaurant's modern and cozy decor, combined with its friendly and attentive service, make it a great spot for a casual dinner with friends or a romantic date night.
        Very popular among expats and locals.`}
        href={"https://goo.gl/maps/pkSvQTRUCwrezQSp9"} />
        {/* El Mercado */}
       <DiningCard
        picture={"/img/explore/dining/europe/icon/elmercado.jpg"}
        name={"El Mercado"}
        station={"BTS Station: Asoke"}
        description={`El Mercado Bangkok is a grocery shop and restaurant in Bangkok that offers an authentic taste of Spain. Established in 2017, the restaurant is known for its extensive selection of Spanish food products, including cheeses, cured meats, and wine.
        The restaurant's menu features a variety of Spanish specialties, such as tapas, paella, and churros. 
        Their dishes are prepared using traditional Spanish recipes and the freshest ingredients, which are imported directly from Spain.
        El Mercado Bangkok is the perfect place to dine for those looking for an authentic Spanish experience in the heart of Bangkok.
        Their cozy atmosphere, attentive service, and delicious food make it a popular destination among locals and tourists alike.
        Whether you're in the mood for a casual meal or a special occasion, El Mercado Bangkok is sure to delight.`}
        href={"https://goo.gl/maps/sS2Tp5K6DT9sb1qn8"} />
        {/* Le Buchon */}
       <DiningCard
        picture={"/img/explore/dining/europe/icon/lebouchon.jpg"}
        name={"Le Bouchon"}
        station={"BTS Station: Sala Daeng"}
        description={`Le Bouchon is a French restaurant in Bangkok, Thailand, that serves authentic French cuisine in a cozy and charming atmosphere. 
        The restaurant was established in 2006 and has since become a popular destination for locals and tourists alike.
        Le Bouchon's menu features a wide range of French dishes, including classic favorites like beef bourguignon, onion soup, and escargot. 
        The restaurant is also known for its impressive selection of French wines, which are carefully curated to complement each dish.
        What makes Le Bouchon unique is its commitment to using only the freshest and highest quality ingredients. 
        The restaurant's chefs source ingredients locally and from France, ensuring that each dish is bursting with flavor.
        Dining at Le Bouchon is an experience that is not to be missed. From the warm and welcoming ambiance to the impeccable service and delicious cuisine, Le Bouchon offers an authentic taste of France in the heart of Bangkok.
        Whether you're looking for a romantic evening out or a cozy dinner with friends, Le Bouchon is the perfect destination for anyone looking for an unforgettable dining experience.`}
        href={""} />
        {/* El Tapeo */}
       <DiningCard
        picture={"/img/explore/dining/europe/icon/.jpg"}
        name={"El Tapeo"}
        station={"BTS Station: Nana"}
        description={``}
        href={""} />
        {/* Mediterra */}
       <DiningCard
        picture={"/img/explore/dining/europe/icon/.jpg"}
        name={"Mediterra"}
        station={"BTS Station: Nana"}
        description={``}
        href={""} />
        {/* Belga Rooftop Bar and Brasserie */}
       <DiningCard
        picture={"/img/explore/dining/europe/icon/.jpg"}
        name={"Belga Rooftop Bar and Brasserie"}
        station={"BTS Station: Nana"}
        description={``}
        href={""} />
        {/* Cantina Wine Bar and Italian Kitchen */}
       <DiningCard
        picture={"/img/explore/dining/europe/icon/.jpg"}
        name={"Cantina Wine Bar and Italian Kitchen"}
        station={"BTS Station: Nana"}
        description={``}
        href={""} />
      </ul>
  </>
  )
}