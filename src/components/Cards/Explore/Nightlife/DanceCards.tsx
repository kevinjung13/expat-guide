import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function DanceCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Sing Sing Theatre */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/singsing.jpg"}
          name={"Sing Sing Theatre"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
        { /* Mustache Bangkok */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/mustache.jpg"}
          name={"Mustache Bangkok"}
          title={""}
          buttonText={""}
          description={`Underground Club `}
          href={""} />
        { /* Tropic City */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/tropic.jpg"}
          name={"Tropic City"}
          title={""}
          buttonText={"hello"}
          description={` `}
          href={""} />
        { /* Havana Social */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/havana.jpg"}
          name={"Havana Social"}
          title={""}
          buttonText={""}
          description={` `}
          href={""} />
        { /* Revoluction Cocktail */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/revolucion.jpg"}
          name={"Revoluction Cocktail"}
          title={""}
          buttonText={""}
          description={` `}
          href={""} />
        { /* Bangkok Island */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/bangkokisland.jpg"}
          name={"Bangkok Island"}
          title={""}
          buttonText={""}
          description={` `}
          href={""} />
      </ul>
    </>
  )
}