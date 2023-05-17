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
          description={`A UNESCO World Heritage Site that was founded in 1350 and served as the capital of the Kingdom of Ayutthaya (Siam), for over four centuries. 
          Invaded and largely destroyed by the Burmese army in 1767 leading to its fall.
          Showcases the remnants of its glorious past, with ruins and archaeological sites, ancient temples, palaces, and statues.
          River boat tours available and worth visiting the floating market as well.`}
          href={"https://goo.gl/maps/VkqHKRsSWdoxQ25n8"} />
        { /* Kanchanaburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/kanchanaburi.jpg"}
          name={"Kanchanaburi"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Known for the World War II-era Thailand-Burma Railway (also known as Death Railway). 
          It was built by Allied prisoners of war and Asian laborers under Japanese occupation, and the bridge over the River Kwai is the most famous remnant of the Death Railway.
          Other popular sites include the Krasae Cave and Hellfire Pass.
          Also a fantastic location for a relaxing weekend by the River Kwai.
          Recommened to visit Erawan National Park during your time there.`}
          href={"https://goo.gl/maps/8GdNnBYi8JXkhZ316"} />
        { /* Ratchaburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/history/icons/ratchaburi.jpg"}
          name={"Ratchaburi"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Location"}
          description={`Served as an important center of the Dvaravati and Khmer civilizations, and later became part of the Ayutthaya Kingdom and the Rattanakosin Kingdom. 
          Nowadays, known for its traditional pottery and handicrafts, as well as its scenic landscapes.
          Home to numerous pottery villages where visitors can witness the creation process and purchase unique ceramic pieces.
          Heaven Valley, Khao Bin Cave and Khao Ngu Stone Park are the most famous attractions.`}
          href={"https://goo.gl/maps/Zo2fyW9fAngsAuZp6"} />
      </ul>
    </>
  )
}