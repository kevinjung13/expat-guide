import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MarketsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Chatuchak Market */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/.jpg"}
          name={"Chatuchak Market"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
          { /* Srinagarindra Train Night Market */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/.jpg"}
          name={"Srinagarindra Train Night Market"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}