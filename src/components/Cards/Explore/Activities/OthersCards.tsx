import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function OthersCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Cooking Class */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/cooking.jpg"}
          name={"Cooking Class"}
          title={"Indoor"}
          buttonText={"Bangkok Thai Cooking Academy"}
          description={`Bangkok Thai Cooking Academy`}
          href={"https://bangkokthaicookingacademy.com/"} />
          { /* Book Stores */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/bookstore.jpg"}
          name={"Book Stores"}
          title={"Indoor"}
          buttonText={"Dasa Book Cafe"}
          description={`Dasa Book Cafe, Kinokuniya`}
          href={"https://www.dasabookcafe.com/"} />
        { /* Bowling */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/bowling.jpg"}
          name={"Bowling"}
          title={"Indoor"}
          buttonText={"Blu-O"}
          description={`Blu-O`}
          href={"https://www.bluofriends.com/en/"} />
          { /* Paintball */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/paintball.jpg"}
          name={"Paintball"}
          title={"Outdoor"}
          buttonText={"Paintball"}
          description={`Paintball`}
          href={"https://www.facebook.com/CombatZoneSeacon/"} />
        { /* Archery */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/archery.jpg"}
          name={"Archery"}
          title={"Outdoor"}
          buttonText={"Archery Thai"}
          description={`Archery Thai`}
          href={"https://archerythai.myshopify.com/en"} />
        { /* Shooting */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/shooting.jpg"}
          name={"Shooting"}
          title={"Outdoor"}
          buttonText={"Shooting"}
          description={`Shooting`}
          href={""} />
      </ul>
    </>
  )
}