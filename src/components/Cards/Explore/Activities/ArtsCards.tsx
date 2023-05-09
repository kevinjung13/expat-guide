import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function ArtsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
          { /* Museums */}
        <ExploreCard
          picture={"/img/explore/activities/arts/icons/museum.jpg"}
          name={"Museums"}
          title={"Indoor & Outdoor"}
          buttonText={"MOCA"}
          description={`MOCA, Jim Thompson`}
          href={""} />
          { /* Art Galleries */}
        <ExploreCard
          picture={"/img/explore/activities/arts/icons/art.jpg"}
          name={"Art Galleries"}
          title={"Indoor"}
          buttonText={"River City"}
          description={`River City, SAC Gallery,`}
          href={""} />
        { /* Painting */}
        <ExploreCard
          picture={"/img/explore/activities/arts/icons/painting.jpg"}
          name={"Painting"}
          title={"Indoor"}
          buttonText={"Paint Bar"}
          description={`Paint Bar`}
          href={""} />
      </ul>
    </>
  )
}