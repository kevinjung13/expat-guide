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
          description={`While most condominiums have dedicated fitness rooms, many do not provide all the equipment that you require.
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
          Rock Domain Climbing Gym is the largest in the city but other popular ones include: Stone Goat Climbing Gym & The Climbing Gym at Racquet Club.`}
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
          In case you wish to challenge yourself or get a workout from it, Happy & Healty Bike Lane or Benjakitti Park is highly recommended.`}
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
          Thai Wake Park also has a small skatepark next to the water, which makes it perfect to spend a day doing both with your friends. Both are away from the city center.`}
          href={"https://www.thaiwakepark.com/"} />
        { /* Skateboarding */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/skateboarding.jpg"}
          name={"Skateboarding"}
          title={"Outdoor"}
          buttonText={"Sky Park BKK"}
          description={`I haven't skateboarded since I was 16 so gave it a try and absolutely enjoyed it.
          Sky Park BKK is my favorite but ESC Space Pumper at Thai Wake Park is also a great place to practice or enjoy the day with your friends or even add in a Wakeboarding session.`}
          href={"https://goo.gl/maps/75aWPHuPA5odQ4eB9"} />
        { /* Badminton */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/badminton.jpg"}
          name={"Badminton"}
          title={"Indoor"}
          buttonText={"71 Sports Club"}
          description={`Playing Badminton with fellow expats has been a great way to get to know them better and build deeper friendships.
          71 Sports Club has always been my "Go-To" venue, but The Racquet Club also has a great badminton court.`}
          href={"https://goo.gl/maps/kVwugy8yprrWKaPv6"} />
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
          While most go to Phuket or Koh Samui for it, Bangkok has good gyms for you to add into your routine.
          Migaku Fitness Club is personally one of my preferred ones for Muay Thai.
          For other forms of Martial Arts, Bangkok Fight Lab is one of the most popular.`}
          href={"https://dl-migaku.com/en/"} />
        { /* General Sports */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/racquetclub.jpg"}
          name={"Community Recreation Center"}
          title={"Indoor"}
          buttonText={"The Racquet Club"}
          description={`In case you wish to be in an "all in one" venue, why not just go to The Racquet Club?
          The Racquet Club has most facilities you need: A badminton court, swimming pool, climbing area and a fitness center, all within the same building.
          Membership prices may vary depending on the duration and great venue for those living in Sukhumvit.`}
          href={"https://www.rqclub.com/"} />
        { /* Water Sports */}
        <ExploreCard
          picture={"/img/explore/activities/physical/icons/watersports.jpg"}
          name={"Water Sports"}
          title={"Indoor & Outdoor"}
          buttonText={"Flow House"}
          description={`While Bangkok does not have a beach or a swimmable lake, you can still enjoy or try surfing at Flow House.
          Prices may vary and great to go on a hot day to cool off and do something fun with friends or family. Alternative venue: Nong Bon Water Sports Center is great for windsurfing on a windy day, and just next to Rama IX park.`}
          href={"http://flowhousethailand.com/"} />
      </ul>
    </>
  )
}