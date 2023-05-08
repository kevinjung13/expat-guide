import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function PhysicalCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Gym */}
        <ExploreCard
          picture={""}
          name={"Gym"}
          title={"Indoor & Outdoor"}
          buttonText={"Fitness First"}
          description={`While most condominiums have gyms, many have limited equipment.
          Bangkok has a wide range of fitness centers all around the city, where Fitness First and Virgin Active are largest.
          For an outdoor gym, we recommend Benjasiri`}
          href={"https://www.fitnessfirst.co.th/"} />
        { /* Indoor Climbing */}
        <ExploreCard
          picture={""}
          name={"Climbing"}
          title={"Indoor"}
          buttonText={"Rock Domain Climbing Gym"}
          description={`Climbing has become one of the most popular sports these days and Bangkok is not short of them.
          Rock Domain is the largest but other places that you may want to check out include Stone Goat and The Racquet Club.`}
          href={"https://www.rockdomaingym.com/"} />
        { /* Running */}
        <ExploreCard
          picture={""}
          name={"Running"}
          title={"Outdoor"}
          buttonText={"Benjakitti Park"}
          description={`Probably one of the best places to run outdoors in Bangkok.
          While Lumphini Park is a nice one, it can get crowded. Perfect for those who wish to run in a place with less people.`}
          href={"https://goo.gl/maps/Zm4PyWYhZNLgS4f6A"} />
        { /* Cycling */}
        <ExploreCard
          picture={""}
          name={"Cycling"}
          title={"Outdoor"}
          buttonText={"Happy & Healty Bike Lane"}
          description={`One of the best places to cycle in Bangkok. 
          The track is xxx km and is perfect for a long cycle. 
          Best time to go would be early morning before it gets too hot.`}
          href={"https://www.hhblbikelane.com/"} />
        { /* Swimming */}
        <ExploreCard
          picture={""}
          name={"Swimming"}
          title={"Indoor & Outdoor"}
          buttonText={"SO/ Bangkok"}
          description={`Generaklly, most condominiums will have a swimming pool as part of their facility.
          However, if you are seeking for a relaxed day in a panoramic pool, SO/ Bangkok probably has one of the best views. `}
          href={"https://www.so-bangkok.com/"} />
        { /* Wakeboarding */}
          <ExploreCard
            picture={""}
            name={"Wakeboarding & Skateboarding"}
            title={"Outdoor"}
            buttonText={"Thai Wake Park"}
            description={`With 3 different branches, Thai Wake Park is a great location to try wakeboarding and spend the day relaxing from the heat.`}
            href={"https://www.thaiwakepark.com/"} />
        { /* Badminton */}
          <ExploreCard
            picture={""}
            name={"Badminton"}
            title={"Indoor"}
            buttonText={"71 Sports Club"}
          description={`Badminton is a great way to stay active and bond with friends. 
            71 Sports Club has been one of my favorite places to go with friends.`}
            href={"https://www.facebook.com/71SportClub.Sukhumvit71/"}/>
          { /* General Sports */}
          <ExploreCard
            picture={""}
            name={"Community Recreation Center"}
            title={"Indoor"}
            buttonText={"The Racquet Club"}
          description={`If you want to go to a place that has everything you need, The Racquet Club is one of the best places.
            `}
            href={"https://www.rqclub.com/"} />
      </ul>
    </>
  )
}