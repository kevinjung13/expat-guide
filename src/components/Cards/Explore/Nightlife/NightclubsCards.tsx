import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function NightclubsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Soi 11 */}
        <ExploreCard
          picture={"/img/explore/nightlife/nightclubs/icons/.jpg"}
          name={"Soi 11"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}