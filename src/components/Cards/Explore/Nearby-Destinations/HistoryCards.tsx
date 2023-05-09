import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function HistoryCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* History */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/.jpg"}
          name={"History"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}