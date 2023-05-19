import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function NationalParkCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Khao Yai National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/national-parks/icons/khaoyai.jpg"}
          name={"Khao Yai National Park"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`A must visit. The park features lush forests, stunning waterfalls, and panoramic viewpoints. 
          Visitors can also spot various wildlife species, including elephants, gibbons, hornbills, and numerous other birds and reptiles.
          Hiking is also a popular activity, with mutlitple trails ranging from easy walks to more challenging treks.
          Other activities include birdwatching, cycling, and visiting vineyards and wineries in the surrounding area.`}
          href={"https://goo.gl/maps/Ypm1SYAwdwmynpRQA"} />
        { /* Khao Sam Roi Yot National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/national-parks/icons/khaosamroi.jpg"}
          name={"Khao Sam Roi Yot National Park"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Highly recommended to visit when you are in Pranburi. The park features towering cliffs, hidden caves, and secluded beaches, offering visitors a tranquil and unspoiled coastal experience.
          It also has several hiking and nature trails that wind through wetlands, mangrove forests, and freshwater marshes. 
          The trails provide opportunities for birdwatching & wildlife spotting. 
          Phraya Nakhon Cave is the most popular attraction in the park.`}
          href={"https://goo.gl/maps/Pry7ZtoKWZTkWACu9"} />
        { /* Erawan National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/national-parks/icons/erawan.jpg"}
          name={"Erawan National Park"}
          title={"3-4 hours from Bangkok"}
          buttonText={"Location"}
          description={`A must visit when in Kanchanaburi. Highlight of the park is the waterfall, which is a seven-tiered waterfall known for its emerald-colored pools. 
          Perfect for swimming, picnicking, and enjoying the surrounding lush forests.
          The upper tiers are more secluded and can be reached by following hiking trails.
          Also home to a wide range of wildlife, including monkeys, deer, birds, and reptiles.
          Perfect for nature enthusiasts.
          Camping also available.`}
          href={"https://goo.gl/maps/TgKkb2F2cPD1WoVX6"} />
      </ul>
    </>
  )
}