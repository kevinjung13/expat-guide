import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function PhysicalCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Gym */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/gym.jpg"}
          name={"Gym"}
          title={"Indoor"}
          buttonText={"Fitness First"}
          description={`While most condominiums have dedicated fitness rooms, sometimes they do not provide all the equipment that you require.
          If you wish to access a gym with all your required equipments, Bangkok has a large number of fitness centers around the city.
          The most popular ones are: Fitness First, Virgin Active, Jetts`}
          href={"https://www.fitnessfirst.co.th/"} />
        { /* Climbing */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/climbing.jpg"}
          name={"Climbing"}
          title={"Indoor"}
          buttonText={"Rock Domain Climbing Gym"}
          description={`Indoor climbing has become one of the most popular recreational activities worldwide, and Bangkok is not short of them.
          Rock Domain Climbing Gym is the largest in the city but other popular ones include Stone Goat Climbing Gym and The Climbing Gym at Racquet Club.`}
          href={"https://www.rockdomaingym.com/"} />
        { /* Running */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/running.jpg"}
          name={"Running"}
          title={"Outdoor"}
          buttonText={"Benjakitti Park"}
          description={`Due to the large number of parks in the city, outdoor running is extremely popular. 
          My favorite places to run are: Lumphini Park, Benjakitti Park and Rama IX Park. For those in Sukhumvit and living away from the Main Road, Khlong (Canal) running is a great alternative.`}
          href={"https://goo.gl/maps/Zm4PyWYhZNLgS4f6A"} />
        { /* Cycling */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/cycling.jpg"}
          name={"Cycling"}
          title={"Outdoor"}
          buttonText={"Happy & Healty Bike Lane"}
          description={`Cycling is one of my favorite ways to stay fit and do something with friends.
          For a slow and fun cycle, Wachirabenchatat Park has been one of my favorite places to go with friends.
          In case you wish to challenge yourself or get a workout from it, Benjakitti Park and Happy & Healty Bike Lane is highly recommended.`}
          href={"https://www.hhblbikelane.com/"} />
        { /* Swimming */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/swimming.jpg"}
          name={"Swimming"}
          title={"Outdoor"}
          buttonText={"SO/ Bangkok"}
          description={`With almost all hotels, and condominiums equipped with swimming pools, it is impossible not to take a dip regularly.
          While condo swimming pools are usually sufficient, those seeking for a dip with a view may check out the following hotels:
          SO/ Bangkok, Marriott Hotel The Surawongse, Novotel Sukhumvit 4 and AVANI+ Riverside.`}
          href={"https://www.so-bangkok.com/"} />
        { /* Wakeboarding */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/wakeboarding.jpg"}
          name={"Wakeboarding"}
          title={"Outdoor"}
          buttonText={"Thai Wake Park"}
          description={`I tried wakeboarding for the first time in Thailand and absolutely fell in love with it.
          Bangkok has 2 main places to wakeboard: Thai Wake Park and Taco Lake.
          Thai Wake Park also has a small skatepark next to the water, which makes it perfect to spend a day doing both with your friends.`}
          href={"https://www.thaiwakepark.com/"} />
        { /* Skateboarding */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/wakeboarding.jpg"}
          name={"Skateboarding"}
          title={"Outdoor"}
          buttonText={"Sky Park BKK"}
          description={`I tried wakeboarding for the first time in Thailand and absolutely fell in love with it.
          Bangkok has 2 main places to wakeboard: Thai Wake Park and Taco Lake.
          Thai Wake Park also has a small skatepark next to the water, which makes it perfect to spend a day doing both with your friends.`}
          href={"https://www.thaiwakepark.com/"} />
        { /* Badminton */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/badminton.jpg"}
          name={"Badminton"}
          title={"Indoor"}
          buttonText={"71 Sports Club"}
          description={`Playing Badminton with fellow expats has been a great way to get to know them better and build deeper friendships.
          71 Sports Club has always been my "Go-To" venue, but The Racquet Club also has a great badminton court.`}
          href={"https://www.facebook.com/71SportClub.Sukhumvit71/"} />
        { /* Yoga */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/yoga.jpg"}
          name={"Yoga"}
          title={"Indoor"}
          buttonText={"Yogatique"}
          description={`Yoga is one of the most popular activities in the world.
          I was first introducted to yoga in Koh Phangan, and since then, I have been doing it whenever I can.
          I have always gone to Yogatique, due to its fair prices and great sessions.`}
          href={"https://yogatiquebangkok.com/"} />
        { /* Martial Arts */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/martialarts.jpg"}
          name={"Martial Arts"}
          title={"Indoor & Outdoor"}
          buttonText={"Migaku Fitness Club"}
          description={`You cannot experience Thailand without experiencing Muay Thai.
          While most go to Phuket or Koh Samui for it, you may wish to incorporate Muay Thai or any other form of Martial Arts into your routine.
          Migaku Fitness Club is personally one of my preferred ones for Muay Thai.
          For other forms of Martial Arts, Bangkok Fight Lab is one of the most popular.`}
          href={"https://dl-migaku.com/en/"} />
        { /* General Sports */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/racquetclub.jpg"}
          name={"Community Recreation Center"}
          title={"Indoor"}
          buttonText={"The Racquet Club"}
          description={`In case you find it a hassle to go to different places for different activities, why not just go to The Racquet Club?
          The Racquet Club has most facilities you need: A badminton court, swimming pool, climbing area and a fitness center, all within the same building.`}
          href={"https://www.rqclub.com/"} />
        { /* Surfing */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/surfing.jpg"}
          name={"Surfing"}
          title={"Indoor"}
          buttonText={"Flow House"}
          description={`Flow House`}
          href={"http://flowhousethailand.com/"} />
      </ul>
    </>
  )
}