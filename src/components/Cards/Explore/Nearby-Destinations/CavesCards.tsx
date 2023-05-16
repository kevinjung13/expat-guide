import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function CaveCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Phraya Nakhon Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/caves/icons/phrayanakhon.jpg"}
          name={"Phraya Nakhon Cave"}
          title={"3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Part of Khao Sam Roi Yot National Park`}
          href={"https://goo.gl/maps/aoNfDNjycDnxnrWDA"} />
        { /* Kaeo Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/caves/icons/kaeo.jpg"}
          name={"Kaeo Cave"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Part of Khao Sam Roi Yot National Park`}
          href={"https://goo.gl/maps/8juVVXfVKHTfubgj8"} />
        { /* Khao Bin Cave */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/caves/icons/khaobin.jpg"}
          name={"Khao Bin Cave"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Location"}
          description={`in Ratchaburi`}
          href={"https://goo.gl/maps/48Az6AMSnHFi7N1u8"} />
      </ul>
    </>
  )
}