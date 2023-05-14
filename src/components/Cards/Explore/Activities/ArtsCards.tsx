import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function ArtsCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
          { /* Museums */}
        <ExploreCard
          picture={"/img/explore/activities/arts/icons/museum.jpg"}
          name={"Museums"}
          title={"Indoor & Outdoor"}
          buttonText={"MOCA"}
          description={`Bangkok is home to a wide variety of museums that showcase the rich history, culture, and the art of Thailand.
          Popular museums include: Museum of Contemporary Art (MOCA), Jim Thompson House and Art in Paradise.`}
          href={"https://mocabangkok.com/"} />
          { /* Art Galleries */}
        <ExploreCard
          picture={"/img/explore/activities/arts/icons/art.jpg"}
          name={"Art Galleries"}
          title={"Indoor"}
          buttonText={"River City"}
          description={`River City, SAC Gallery, HOP`}
          href={"https://rivercitybangkok.com/"} />
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