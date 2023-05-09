import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function BarsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Rooftops */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/.jpg"}
          name={"Rooftops"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}