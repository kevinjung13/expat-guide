import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function NationalParkCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Khao Yai National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Khao Yai National Park"}
          title={"3 hours from Bangkok"}
          buttonText={"Khao Yai"}
          description={``}
          href={""} />
        { /* Khao Sam Roi Yot National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Khao Sam Roi Yot National Park"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Khao Sam Roi Yot National Park"}
          description={``}
          href={""} />
        { /* Erawan National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Erawan National Park"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Erawan National Park"}
          description={`Erawan National Park`}
          href={""} />
      </ul>
    </>
  )
}