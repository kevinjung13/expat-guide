import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function CaveCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Phraya Nakhon Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/caves/icons/phrayanakhon.jpg"}
          name={"Phraya Nakhon Cave"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Part of the Khao Sam Roi Yot National Park, where the hightlight is the Kuha Karuhas Pavilion. 
          The pavilion stands in the central chamber of the cave, bathed in natural light that filters through a hole in the ceiling. 
          To reach Phraya Nakhon Cave, you will need to do some moderate hiking through the national park. Highly recommended.`}
          href={"https://goo.gl/maps/aoNfDNjycDnxnrWDA"} />
        { /* Kaeo Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/caves/icons/kaeo.jpg"}
          name={"Kaeo Cave"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`A little more for those that are adventurous.
          The cave has impressive formations, but the cave is completely pitch black. 
          Headlights are required and can be rented at the entrance.
          Less crowded compared to other destinations, and can be claustrophobic for some.
          You are also able to observe various species of bats.`}
          href={"https://goo.gl/maps/8juVVXfVKHTfubgj8"} />
        { /* Khao Bin Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/caves/icons/khaobin.jpg"}
          name={"Khao Bin Cave"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Location"}
          description={`A vast complex consisting of several interconnected caverns and features magnificent formations that have been shaped over centuries, creating an otherworldly atmosphere. 
          Also holds religious significance as a Buddhist sanctuary and houses numerous shrines and statues.
          Popular pilgrimage site for locals seeking spiritual blessings.
          `}
          href={"https://goo.gl/maps/48Az6AMSnHFi7N1u8"} />
      </ul>
    </>
  )
}