import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MallsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Malls */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/.jpg"}
          name={"Malls"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}