import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function PhysicalCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Gym */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/gym.jpg"}
          name={"Gym"}
          title={"Indoor"}
          buttonText={"Fitness First"}
          description={`Fitness First, Virgin Active, Jetts`}
          href={"https://www.fitnessfirst.co.th/"} />
        { /* Climbing */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/climbing.jpg"}
          name={"Climbing"}
          title={"Indoor"}
          buttonText={"Rock Domain Climbing Gym"}
          description={`Rock Domain, Stone Goat and The Racquet Club.`}
          href={"https://www.rockdomaingym.com/"} />
        { /* Running */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/running.jpg"}
          name={"Running"}
          title={"Outdoor"}
          buttonText={"Benjakitti Park"}
          description={`Lumphini Park, Benjakitti Park, Rama IX Park, Khlong (Canal) running `}
          href={"https://goo.gl/maps/Zm4PyWYhZNLgS4f6A"} />
        { /* Cycling */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/cycling.jpg"}
          name={"Cycling"}
          title={"Outdoor"}
          buttonText={"Happy & Healty Bike Lane"}
          description={`Happy & Healty Bike Lane, Benjakitti Park, Wachirabenchatat Park`}
          href={"https://www.hhblbikelane.com/"} />
        { /* Swimming */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/swimming.jpg"}
          name={"Swimming"}
          title={"Outdoor"}
          buttonText={"SO/ Bangkok"}
          description={`SO/ Bangkok, Bangkok Marriott Hotel The Surawongse,  AVANI+ Riverside Bangkok Hotel, Novotel Bangkok Sukhumvit 4, 137 Pillars Bangkok `}
          href={"https://www.so-bangkok.com/"} />
        { /* Wakeboarding */}
          <ExploreCard
            picture={"/img/explore/activities/physical/icons/wakeboarding.jpg"}
            name={"Wakeboarding & Skateboarding"}
            title={"Outdoor"}
            buttonText={"Thai Wake Park"}
            description={`Thai Wake Park, Taco Lake`}
            href={"https://www.thaiwakepark.com/"} />
        { /* Badminton */}
          <ExploreCard
            picture={"/img/explore/activities/physical/icons/badminton.jpg"}
            name={"Badminton"}
            title={"Indoor"}
            buttonText={"71 Sports Club"}
          description={`71 Sports Club, The Racquet Club`}
          href={"https://www.facebook.com/71SportClub.Sukhumvit71/"} />
        { /* Yoga */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/yoga.jpg"}
          name={"Yoga"}
          title={"Indoor"}
          buttonText={"Yogatique"}
          description={`Yogatique`}
          href={""} />
        { /* Martial Arts */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/martialarts.jpg"}
          name={"Martial Arts"}
          title={"Indoor & Outdoor"}
          buttonText={"Migaku Fitness Club"}
          description={`Migaku Fitness Club, Bangkok Fight Lab`}
          href={""} />
          { /* General Sports */}
          <ExploreCard
            picture={"/img/explore/activities/physical/icons/racquetclub.jpg"}
            name={"Community Recreation Center"}
            title={"Indoor"}
            buttonText={"The Racquet Club"}
          description={`Badminton, Swimming, Climbing, Gym`}
            href={"https://www.rqclub.com/"} />
      </ul>
    </>
  )
}