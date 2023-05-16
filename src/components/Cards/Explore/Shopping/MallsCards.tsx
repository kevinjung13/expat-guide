import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function MallsCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* EmQuartier */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/emquartier.jpg"}
          name={"EmQuartier"}
          title={"BTS: Phrom Pong"}
          buttonText={"Location"}
          description={``}
          href={""} />
        { /* Central World & Siam Paragon */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/centralworld.jpg"}
          name={"Central World & Siam Paragon"}
          title={""}
          buttonText={"Location"}
          description={`Central Embassy is nearbt`}
          href={""} />
          { /* Icon Siam */}
        <ExploreCard
          picture={"/img/explore/shopping/malls/icons/iconsiam.jpg"}
          name={"Icon Siam"}
          title={""}
          buttonText={"Location"}
          description={``}
          href={""} />
      </ul>
    </>
  )
}