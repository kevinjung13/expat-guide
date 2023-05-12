import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MallsCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
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
          description={``}
          href={""} />
          { /* Icon Siam */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/.jpg"}
          name={"Icon Siam"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
        { /* Central Embassy */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/.jpg"}
          name={"Central Embassy"}
          title={""}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}