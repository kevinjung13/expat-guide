import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function BeachCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Beach */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/.jpg"}
          name={"Beach"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}