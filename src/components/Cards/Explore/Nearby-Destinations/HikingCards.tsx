import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function HikingCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Khao Yai */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Khao Yai"}
          title={"3 hours from Bangkok"}
          buttonText={"Khao Yai"}
          description={``}
          href={""} />
        { /* Ratchaburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Ratchaburi"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Ratchaburi"}
          description={``}
          href={""} />
        { /* Khao Sam Roi Yot National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Khao Sam Roi Yot National Park"}
          title={"3-4 hours from Bangkok"}
          buttonText={"Khao Sam Roi Yot National Park"}
          description={``}
          href={""} />
        { /* Kanchanaburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Kanchanaburi"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Kanchanaburi"}
          description={``}
          href={""} />
      </ul>
    </>
  )
}