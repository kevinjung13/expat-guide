import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function NationalParkCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Khao Yai National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/national-parks/icons/khaoyai.jpg"}
          name={"Khao Yai National Park"}
          title={"3 hours from Bangkok"}
          buttonText={"Location"}
          description={``}
          href={"https://goo.gl/maps/Ypm1SYAwdwmynpRQA"} />
        { /* Khao Sam Roi Yot National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/national-parks/icons/khaosamroi.jpg"}
          name={"Khao Sam Roi Yot National Park"}
          title={"1-2 hours from Bangkok"}
          buttonText={"Location"}
          description={``}
          href={"https://goo.gl/maps/Pry7ZtoKWZTkWACu9"} />
        { /* Erawan National Park */}
        <ExploreCard
          picture={"/img/explore/nearby-destinations/national-parks/icons/erawan.jpg"}
          name={"Erawan National Park"}
          title={"2-3 hours from Bangkok"}
          buttonText={"Location"}
          description={`Erawan National Park`}
          href={"https://goo.gl/maps/TgKkb2F2cPD1WoVX6"} />
      </ul>
    </>
  )
}