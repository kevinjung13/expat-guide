import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MarketsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Markets */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/.jpg"}
          name={"Markets"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}