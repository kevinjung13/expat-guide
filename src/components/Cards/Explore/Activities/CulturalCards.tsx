import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function CulturalCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Chinatown */}
        <ExploreCard
          picture={"/img/explore/activities/cultural/icons/.jpg"}
          name={"Chinatown"}
          title={"Chinatown"}
          buttonText={""}
          description={``}
          href={""} />
        { /* Kudi Chin  */}
        <ExploreCard
          picture={"/img/explore/activities/cultural/icons/.jpg"}
          name={"Kudi Chin"}
          title={"Historic Neighbourhood"}
          buttonText={""}
          description={``}
          href={""} />
        { /* Rattanakosin */}
        <ExploreCard
          picture={"/img/explore/activities/cultural/icons/.jpg"}
          name={"Rattanakosin"}
          title={"Historic Neighbourhood"}
          buttonText={""}
          description={``}
          href={""} />
        { /* Khlong Bang Luang Floating Market */}
        <ExploreCard
          picture={"/img/explore/activities/cultural/icons/.jpg"}
          name={"Floating Market"}
          title={"Floating Market"}
          buttonText={""}
          description={``}
          href={""} />
        { /* Talat Noi */}
        <ExploreCard
          picture={"/img/explore/activities/cultural/icons/.jpg"}
          name={"Talat Noi"}
          title={"Historic Neighbourhood"}
          buttonText={""}
          description={``}
          href={""} />
        { /* Ancient Siam */}
        <ExploreCard
          picture={"/img/explore/activities/cultural/icons/ancientsiam.jpg"}
          name={"Ancient Siam"}
          title={"Outdoor Museum Park"}
          buttonText={""}
          description={``}
          href={""} />
      </ul>
    </>
  )
}