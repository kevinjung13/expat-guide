import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function BeachCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Hua Hin & Pranburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/.jpg"}
          name={"Hua Hin & Pranburi"}
          title={"2-3 hours from Bangkok"}
          buttonText={""}
          description={``}
          href={""} />
        { /* Koh Samet */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/.jpg"}
          name={"Koh Samet"}
          title={"2-3 hours from Bangkok"}
          buttonText={""}
          description={``}
          href={""} />
          { /* Koh Chang */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/.jpg"}
          name={"Koh Chang"}
          title={"4-5 hours from Bangkok"}
          buttonText={""}
          description={``}
          href={""} />
          { /* Pattaya */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/.jpg"}
          name={"Pattaya"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Pattaya"}
          description={`Not the best beaches but great place to rent a boat for the day with friends to venture out to sea and also visit Koh Larn.`}
          href={""} />
      </ul>
    </>
  )
}