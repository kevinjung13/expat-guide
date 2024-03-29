import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function BeachCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Hua Hin */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/huahin.jpg"}
          name={"Hua Hin"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Boasts long stretches of white sandy beaches, making it a great place for a quick escape with friends or family and enjoy various water activities.
          Less crowded compared to other destinations and becoming a popular destination to retire.
          A great place to play golf as well.
          Best accessed via private transport or car rental but public transport also available to get there.`}
          href={"https://goo.gl/maps/swsMdJizxsFoJ7pF9"} />
        { /* Pranburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/pranburi.jpg"}
          name={"Pranburi"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Located 30 kilometers away from Hua Hin, Pranburi is known for secluded beaches and lots of natural landscapes 
          such as mangrove forests, scenic hills, and national parks.
          It is also well known for its fresh seafood and local cuisine. 
          Best accessed via private transport or car rental and recommended as a day trip destination during your stay in Hua Hin.
          A hidden gem.`}
          href={"https://goo.gl/maps/Pfd3iwoFJ1s6hzN86"} />
        { /* Koh Samet */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/kohsamet.jpg"}
          name={"Koh Samet"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Probably my favorite destination on this list due to its close proximity to Bangkok and crystal-clear turquoise waters.
          It is also a designated national park, making it even more special. 
          Very popular among expats.
          The best way to get here is by renting a private car/minivan and purchasing ferry tickets at the pier.
          Once on the island, it is best to go around on motorbikes.`}
          href={"https://goo.gl/maps/esBWWXSwACfTQ43N8"} />
          { /* Koh Chang, Koh Mak, Koh Kood */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/kohchang.jpg"}
          name={"Koh Chang, Koh Mak & Koh Kood"}
          title={"4-6 hours from Bangkok"}
          buttonText={"Location"}
          description={`3 beautiful islands near the border with Cambodia.
          My next preferred set of beach destination on the list due its long distance from Bangkok but other than that,
          these islands have the cleanest and clearest waters out of all.
          Best places to enjoy snorkeling, diving, hiking and exploring waterfalls.
          Ideal to rent a car and drive to Trat and then take the ferry in.`}
          href={"https://goo.gl/maps/McddVtcwZrAjay897"} />
          { /* Pattaya */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/pattaya.jpg"}
          name={"Pattaya"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Location"}
          description={`Pattaya does not have the best beaches but it is the closest destination from Bangkok, making it a good destination for a quick getaway or to enjoy some watersports.
          Easy to access with both private and public transportation.
          It can be a fantastic place to rent a boat for the day with friends to venture out to sea and also visit Koh Larn.`}
          href={"https://goo.gl/maps/zXxufmUfuszyTgvN7"} />
        { /* Koh Larn */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/kohlarn.jpg"}
          name={"Koh Larn"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Even though it is just off the coast of Pattaya, Koh Larn surpringsly has a few nice beaches, with Ta Yai and Nual beach being my favorites. 
          Also has some decent snorkeling spots and plenty of water sport options. Mostly popular among locals and recommended to visit during your time in Pattaya or if you rent a boat.`}
          href={"https://goo.gl/maps/RetS4rMWzHGH9s5m8"} />
      </ul>
    </>
  )
}