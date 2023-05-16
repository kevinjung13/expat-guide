import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function HistoryCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Ayutthaya */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/ayutthaya.jpg"}
          name={"Ayutthaya"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Location"}
          description={`Phimai Historic Park, Phanom Rung Historic Park, Sukhothai`}
          href={"https://goo.gl/maps/VkqHKRsSWdoxQ25n8"} />
        { /* Kanchanaburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/kanchanaburi.jpg"}
          name={"Kanchanaburi"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={``}
          href={"https://goo.gl/maps/8GdNnBYi8JXkhZ316"} />
        { /* Ratchaburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/ratchaburi.jpg"}
          name={"Ratchaburi"}
          title={"5-6 hours from Bangkok"}
          buttonText={"Location"}
          description={``}
          href={"https://goo.gl/maps/Zo2fyW9fAngsAuZp6"} />
      </ul>
    </>
  )
}