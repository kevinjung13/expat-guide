import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function HistoryCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Ayutthaya */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/.jpg"}
          name={"Ayutthaya"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Ayutthaya"}
          description={``}
          href={""} />
        { /* Sukhothai */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/.jpg"}
          name={"Sukhothai"}
          title={"5-6 hours from Bangkok"}
          buttonText={"Sukhothai"}
          description={``}
          href={""} />
        { /* Phimai Historic Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/.jpg"}
          name={"Phimai Historic Park"}
          title={"4-5 hours from Bangkok"}
          buttonText={"Phimai"}
          description={``}
          href={""} />
        { /* Phanom Rung Historic Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/.jpg"}
          name={"Phanom Rung Historic Park"}
          title={"5-6 hours from Bangkok"}
          buttonText={"Phimai"}
          description={``}
          href={""} />
      </ul>
    </>
  )
}