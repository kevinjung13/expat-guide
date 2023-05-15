import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function EntertainmentCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Cinemas */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/cinema.jpg"}
          name={"Cinemas"}
          title={"Indoor"}
          buttonText={"Major Cineplex"}
          description={`Bangkok has a wide range of malls, where each has a cinema.
          SF Cinema and Major Cineplex are major chains and dominate most malls in Bangkok.
          For more of an authentic experience, House Samyan is an indie cinema worth checking out!`}
          href={"https://www.majorcineplex.com/"} />
        { /* Theatre */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/theatre.jpg"}
          name={"Theatre"}
          title={"Indoor"}
          buttonText={"Ekkolo Theatre"}
          description={`There is a relatively small Theatre scene in Bangkok and unfortunately, I have only been to one.
          Ekkolo Theatre is a great theatre owned by 2 passionate French actors, where they regularly host different plays.`}
          href={"https://goo.gl/maps/DTz1Mi5JvswnUbXJ8"} />
        { /* Concerts */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/concert.jpg"}
          name={"Concerts"}
          title={"Indoor"}
          buttonText={"IMPACT Arena"}
          description={`Thailand is home to numerous concerts that are held annually.
          From A-list Hollywood stars to K-Pop artists, artists from all over the world have performed in Bangkok. 
          IMPACT Arena is usually the largest venue that hosts concerts but venues may vary.`}
          href={"http://www.impact.co.th/"} />
        { /* Comedy */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/comedy.jpg"}
          name={"Comedy"}
          title={"Indoor"}
          buttonText={"Comedy Club Bangkok"}
          description={`Everyone loves to laugh and listen to jokes so why not attend a comedy show?
          The stand up comedy scene has been growing in the city for the past few years, with many comedy clubs emerging.
          Comedy Club Bangkok is probably one of the most famous ones out there.`}
          href={"https://goo.gl/maps/CmmyQ6kmfmZuAUEB9"} />
        { /* Live Music */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/livemusic.jpg"}
          name={"Live Music"}
          title={"Indoor"}
          buttonText={"Maggie Choo's"}
          description={`Live music is everywhere in Bangkok. 
          From the steps of BTS Stations and numerous restaurants, to malls and many different bars in the city.
          My personal favorite locations for live music over the past years have been: Maggie Choo's, Bangkok Island, The Jam Factory, Foojohn Jazz Club and Speakerbox.`}
          href={"https://goo.gl/maps/jZKunanhwJTiRVA18"} />
        { /* Jamming */}
        <ExploreCard
          picture={"/img/explore/activities/entertainment/icons/jamming.jpg"}
          name={"Jamming"}
          title={"Indoor"}
          buttonText={"E.Q Studio"}
          description={`If you play an instrument and want to play with your friends, E.Q Studio is the place to go. As a drummer, it  has been my favorite place to play with friends and let out some steam.
          All music equipment can be rented easily and bookings must be made in advance by calling. Prices go per hour.`}
          href={"https://goo.gl/maps/xamdNQxoWfmEWuxL9"} />
      </ul>
    </>
  )
}