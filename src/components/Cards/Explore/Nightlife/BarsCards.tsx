import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function BarsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Rooftops */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/.jpg"}
          name={"Rooftops"}
          title={""}
          buttonText={"Bar Yard"}
          description={`Bar Yard, Brewski, Tichuca, The Speakeasy`}
          href={""} />
        { /* Speakeasy */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/.jpg"}
          name={"Speakeasy"}
          title={""}
          buttonText={"Havana Social"}
          description={`Havana Social, Rabbit Hole, Find The Locker Room`}
          href={""} />
        { /* Cocktail Bar */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/.jpg"}
          name={"Cocktail Bar"}
          title={""}
          buttonText={"Thaipioka"}
          description={`Revolucion Cocktail, Tropic City, Thaipioka,  `}
          href={""} />
          { /* Others */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/.jpg"}
          name={"Others"}
          title={""}
          buttonText={" Escape, W District, Blue Parrot"}
          description={`Escape, `}
          href={""} />
      </ul>
    </>
  )
}