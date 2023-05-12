import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function BarsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Bar Yard */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/baryard.jpg"}
          name={"Bar Yard"}
          title={""}
          buttonText={"Bar Yard"}
          description={`Brewski, Tichuca, The Speakeasy`}
          href={""} />
        { /* Brewski */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/baryard.jpg"}
          name={"Brewski"}
          title={""}
          buttonText={"Brewski"}
          description={``}
          href={""} />
        { /* Rabbit Hole */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/rabbithole.jpg"}
          name={"Rabbit Hole"}
          title={""}
          buttonText={"Rabbit Hole"}
          description={`Find The Locker Room`}
          href={""} />
        { /* Smalls */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/smalls.jpg"}
          name={"Smalls"}
          title={""}
          buttonText={"Smalls"}
          description={`Cactus, Teens of Thailand, Asia Today, Thaipioka, `}
          href={""} />
          { /* Blue Parrot */}
        <ExploreCard
          picture={"/img/explore/nightlife/bars/icons/blueparrot.jpg"}
          name={"Blue Parrot"}
          title={""}
          buttonText={"Blue Parrot"}
          description={`Escape, W District, `}
          href={""} />
      </ul>
    </>
  )
}