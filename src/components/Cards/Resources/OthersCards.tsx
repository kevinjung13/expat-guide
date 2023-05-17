import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function OthersCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
        {/* Mobile Phone */}
        <ResourcesCards
          name={"Mobile Phone"}
          type={"Packages"}
          description={`AIS is Best company for mobile packages and `}
          href={"https://www.tourismthailand.org/Articles/plan-your-trip-mobile-phone-and-internet"}
          icon={
            <img
              src={"/img/resources/icons/phone.jpg"}
              alt={"Group Logo"}
              className={"w-4 h-6"} />} />
        {/* Internet */}
        <ResourcesCards
          name={"Internet"}
          type={"Home Internet"}
          description={"aa"}
          href={"https://www.tourismthailand.org/Articles/plan-your-trip-mobile-phone-and-internet"}
          icon={
            <img
              src={"/img/resources/icons/internet.png"}
              alt={"Group Logo"}
              className={"w-9 h-8"} />} />
        {/* Airline Platforms */}
        <ResourcesCards
          name={"Airline Platforms"}
          type={"For flights within the region"}
          description={``}
          href={"https://www.skyscanner.net/"}
          icon={
            <img
              src={"/img/resources/icons/plane.jpg"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
      </ul>
    </>
  )
}