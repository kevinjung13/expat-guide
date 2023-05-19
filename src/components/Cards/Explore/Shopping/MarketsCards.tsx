import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MarketsCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Chatuchak Weekend Market */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/chatuchak.jpg"}
          name={"Chatuchak Market"}
          title={"Weekend Market"}
          buttonText={"Location"}
          description={`Probably the best place to find cheap and affordable items and souvenirs.
          Highly recommended to check out at least once and one of my personal favorite ones.
          Popular among both tourists and expats.
          The weather can get hot during the day so highly recommended to take some water and ensure to stay hydrated.`}
          href={"https://goo.gl/maps/LURagb41cug5oajh6"} />
        { /* Srinagarindra Train Night Market */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/srinagarindra.jpg"}
          name={"Srinagarindra Train Night Market"}
          title={"Night Market"}
          buttonText={"Location"}
          description={`Located near Rama IX park, it is further away from the centre.
          Arguably one of the most authentic local markets in the city and most popular among Thais.
          Great place to have some local food and drinks with friends, potentially after a visit to Rama IX park or Nong Bon Water Sports Center. 
          Also a great place to bring any friends and family that visit.`}
          href={"https://goo.gl/maps/BiVrQvah4zj3YLdM8"} />
        { /* Jodd Fairs Night Market */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/joddfairs.jpg"}
          name={"Jodd Fairs Night Market"}
          title={"Night Market"}
          buttonText={"Location"}
          description={`A night market that opened in November 2021, after the closure of Ratchada Train Market.
          Closer to the city center compared to Srinagarindra and known mostly for its food stalls and social atmosphere.
          A great place to grab some food and drinks.
          Recommended to stopby after a skate day at the Sky Park in Fortune Town.`}
          href={"https://goo.gl/maps/P8Dru3Bu6tphjrc6A"} />
      </ul>
    </>
  )
}