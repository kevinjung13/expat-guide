import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MarketsCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Chatuchak Weekend Market */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/chatuchak.jpg"}
          name={"Chatuchak Market"}
          title={""}
          buttonText={"Location"}
          description={`Khlong Ong Ang Walking Street`}
          href={""} />
          { /* Srinagarindra Train Night Market */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/srinagarindra.jpg"}
          name={"Srinagarindra Train Night Market"}
          title={""}
          buttonText={"Location"}
          description={``}
          href={""} />
        { /* Jodd Fairs Night Market */}
        <ExploreCard
          picture={"/img/explore/shopping/markets/icons/joddfairs.jpg"}
          name={"Jodd Fairs Night Market"}
          title={""}
          buttonText={"Location"}
          description={``}
          href={""} />
      </ul>
    </>
  )
}