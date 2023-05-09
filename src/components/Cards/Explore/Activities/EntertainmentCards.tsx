import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function EntertainmentCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Cinemas */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/cinema.jpg"}
          name={"Cinemas"}
          title={"Indoor"}
          buttonText={"Major Cineplex"}
          description={`SF Cinema, Major Cineplex`}
          href={""} />
        { /* Theatre */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/theatre.jpg"}
          name={"Theatre"}
          title={"Indoor"}
          buttonText={"Ekkolo Theatre"}
          description={`Ekkolo Theatre`}
          href={""} />
        { /* Concerts */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/concert.jpg"}
          name={"Concerts"}
          title={"Indoor"}
          buttonText={"IMPACT Arena"}
          description={`IMPACT Arena `}
          href={""} />
        { /* Comedy */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/comedy.jpg"}
          name={"Comedy"}
          title={"Indoor"}
          buttonText={"Comedy Club Bangkok"}
          description={`Comedy Club Bangkok`}
          href={""} />
        { /* Live Music */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/livemusic.jpg"}
          name={"Live Music"}
          title={"Indoor"}
          buttonText={"Maggie Choo's"}
          description={`Maggie Choo's, Bangkok Island, The Jam Factory, Foojohn Jazz Club, Speakerbox`}
          href={""} />
      </ul>
    </>
  )
}