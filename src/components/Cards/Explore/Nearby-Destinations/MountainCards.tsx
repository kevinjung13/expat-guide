import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MoutainCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Mountain */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Mountain"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}