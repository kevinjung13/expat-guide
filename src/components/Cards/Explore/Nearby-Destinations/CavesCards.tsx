import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function CaveCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Phraya Nakhon Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Phraya Nakhon Cave"}
          title={"3 hours from Bangkok"}
          buttonText={"Phraya Nakhon Cave"}
          description={`Part of Khao Sam Roi Yot National Park`}
          href={""} />
        { /* Kaeo Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Kaeo Cave"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Kaeo Cave"}
          description={`Part of Khao Sam Roi Yot National Park`}
          href={""} />
        { /* Khao Bin Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Khao Bin Cave"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Khao Bin Cave"}
          description={`in Ratchaburi`}
          href={""} />
      </ul>
    </>
  )
}