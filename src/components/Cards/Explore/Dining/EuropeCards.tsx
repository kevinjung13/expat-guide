import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function EuropeCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        {/* Bardo Social Bar & Bistro */}
        <ExploreCard
          picture={"/img/explore/dining/europe/icon/bardo.jpg"}
          name={"Bardo Social Bar & Bistro"}
          title={"BTS Station: Saint Louis"}
          buttonText={"Location"}
          description={`A social and lively restaurant & bar with great food, live music, creative cocktails, and events.
          Menu offers contemporary European dishes, from small sharing plates, to outstanding main courses and desserts.
          Specialties include "Chicken Milanese," "Foie Gras Terrine" and "Portobello Mushroom".
          Also known for its inventive cocktail and wine menu.
          Very popular location among European expats.`}
          href={"https://goo.gl/maps/Jb5yGFi3hjRKvx7a7"} />
        {/* Peppina */}
        <ExploreCard
          picture={"/img/explore/dining/europe/icon/peppina.jpg"}
          name={"Peppina (Flagship)"}
          title={"BTS Station: Asoke"}
          buttonText={"Location"}
          description={`Popular Italian restaurant chain, with multiple locations throughout the city. 
          Features a variety of classic Italian dishes, including wood-fired and homemade pizzas and fresh salads. 
          Some specialties include the "Burrata Pizza," and the "Cacio e Pepe".
          All have modern and cozy decor, combined with attentive service, making it a great spot for a casual dinner with friends or a romantic date night.`}
          href={"https://goo.gl/maps/pkSvQTRUCwrezQSp9"} />
        {/* El Mercado */}
        <ExploreCard
          picture={"/img/explore/dining/europe/icon/elmercado.jpg"}
          name={"El Mercado"}
          title={"BTS Station: Asoke"}
          buttonText={"Location"}
          description={`A grocery shop and restaurant (with multiple branches), offering a taste of Spain and France. 
          Mostly known for its extensive selection of Spanish and French food products, including cheeses, cured meats, and wine. 
          Perfect place to dine for those craving cold cuts, cheese, wines and Western food in general.
          Extremely popular among expats, and perfect for all occasions.`}
          href={"https://goo.gl/maps/sS2Tp5K6DT9sb1qn8"} />
        {/* El Tapeo */}
        <ExploreCard
          picture={"/img/explore/dining/europe/icon/eltapeo.jpg"}
          name={"El Tapeo"}
          title={"BTS Station: Ekkamai"}
          buttonText={"Location"}
          description={`A Spanish eatery and wine bar located in Ekkamai. 
          Offers down-to-earth approach to the Spanish eating culture, similar to Japanese "Izakayas".
          Serves some of the best Spanish plates and snacks, with a wide selection of wines, beer, and cocktails.
          Great wine list with afforable prices.
          One of my favorite places to enjoy Spanish food and drinks with a group of friends or with family.`}
          href={"https://goo.gl/maps/qfp6w1j4yraLR46FA"} />
        {/* Mediterra */}
        <ExploreCard
          picture={"/img/explore/dining/europe/icon/mediterra.jpg"}
          name={"Mediterra"}
          title={"BTS Station: Asoke"}
          buttonText={"Location"}
          description={`Restaurant serving authentic Mediterranean and fusion cuisine with a contemporary twist.
          Showcases a wide range of dishes from Spain, Italy, Greece, and the Middle East. 
          Specialities include Paella, Italian Ratatouille, Greek Moussaka, and Baklava. 
          Warm lighting, rustic décor, cozy and intimate. Perfect dinner venue with friends, family or a partner. 
          Also features live music performances.`}
          href={"https://goo.gl/maps/YEYrtEn7eoLoEp8y7"} />
        {/* Cantina Wine Bar and Italian Kitchen */}
        <ExploreCard
          picture={"/img/explore/dining/europe/icon/cantina.jpg"}
          name={"Cantina Wine Bar and Italian Kitchen"}
          title={"BTS Station: Ari"}
          buttonText={"Location"}
          description={`Inspired by wine cellars in Italy, Cantina offers an excellent range of homemade pasta, pizza, and many more.
          Specialties include "cheese-loaded mascarpone e tartufo pizza" & "homemade pasta with mushroom-truffle sauce". 
          Wine selection mainly consists of Italian wine and pairing usually done by a certified sommelier (and co-owner) for your dish.
          Perfect for romantic dinners or a night out with friends.`}
          href={"https://goo.gl/maps/ebxUT4Q8e4baTL9N6"} />
      </ul>
    </>
  )
}