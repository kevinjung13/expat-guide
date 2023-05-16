import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function BeachCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Hua Hin */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/huahin.jpg"}
          name={"Hua Hin"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Discover"}
          description={``}
          href={""} />
        { /* Pranburi */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/pranburi.jpg"}
          name={"Pranburi"}
          title={"2-3 hours from Bangkok"}
          buttonText={""}
          description={`Khao Sam Roi Yot National Park`}
          href={""} />
        { /* Koh Samet */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/kohsamet.jpg"}
          name={"Koh Samet"}
          title={"2-3 hours from Bangkok"}
          buttonText={""}
          description={``}
          href={""} />
          { /* Koh Chang, Koh Mak, Koh Kood */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/kohchang.jpg"}
          name={"Koh Chang, Koh Mak & Koh Kood"}
          title={"4-5 hours from Bangkok"}
          buttonText={""}
          description={`Koh Chang, Koh Mak, Koh Kood`}
          href={""} />
          { /* Pattaya */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/pattaya.jpg"}
          name={"Pattaya"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Pattaya"}
          description={`Not the best beaches but great place to rent a boat for the day with friends to venture out to sea and also visit Koh Larn.`}
          href={""} />
        { /* Koh Larn */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/beach/icons/kohlarn.jpg"}
          name={"Koh Larn"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Koh Larn"}
          description={``}
          href={""} />
      </ul>
    </>
  )
}