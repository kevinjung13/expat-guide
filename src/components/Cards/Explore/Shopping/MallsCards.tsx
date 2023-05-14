import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MallsCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* EmQuartier */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/.jpg"}
          name={"EmQuartier"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
        { /* Central World & Siam Paragon */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/.jpg"}
          name={"Central World & Siam Paragon"}
          title={""}
          buttonText={""}
          description={`Central Embassy is nearbt`}
          href={""} />
          { /* Icon Siam */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/.jpg"}
          name={"Icon Siam"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}