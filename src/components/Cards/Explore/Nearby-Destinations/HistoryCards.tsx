import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function HistoryCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Ayutthaya */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/.jpg"}
          name={"Ayutthaya"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Ayutthaya"}
          description={`Phimai Historic Park, Phanom Rung Historic Park, Sukhothai`}
          href={""} />
        { /* Kanchanaburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/mountain/icons/.jpg"}
          name={"Kanchanaburi"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Kanchanaburi"}
          description={``}
          href={""} />
        { /* Ratchaburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/.jpg"}
          name={"Ratchaburi"}
          title={"5-6 hours from Bangkok"}
          buttonText={"Ratchaburi"}
          description={``}
          href={""} />
      </ul>
    </>
  )
}