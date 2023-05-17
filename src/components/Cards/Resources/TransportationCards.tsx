import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function TransportationCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
        {/* Grab */}
        <ResourcesCards
          name={"Grab"}
          type={"aa"}
          description={``}
          href={"https://www.grab.com/"}
          icon={
            <img
              src={"/img/resources/icons/grab.jpg"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
        {/* Bolt */}
        <ResourcesCards
          name={"Bolt"}
          type={"Bolt"}
          description={``}
          href={"https://bolt.eu/en-th/"}
          icon={
            <img
              src={"/img/resources/icons/bolt.png"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
        {/* BTS */}
        <ResourcesCards
          name={"BTS"}
          type={"Bangkok Skytrain System"}
          description={`.`}
          href={"https://www.bts.co.th/eng/"}
          icon={
            <img
              src={"/img/resources/icons/bts.png"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
        {/* MRT */}
        <ResourcesCards
          name={"MRT"}
          type={"Metropolitan Rapid Transit (Metro)"}
          description={`a`}
          href={"https://metro.bemplc.co.th/MRT-System-Map?lang=en"}
          icon={
            <img
              src={"/img/resources/icons/mrt.png"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
        {/* Taxi Meter */}
        <ResourcesCards
          name={"Taxi Meter"}
          type={"Taxi Meter"}
          description={`Taxi Meter`}
          href={"https://thaiest.com/thailand/bangkok/taxi"}
          icon={
            <img
              src={"/img/resources/icons/taxi-meter.jpg"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
        {/* "Win" Motorcycle Taxi */}
        <ResourcesCards
          name={`"Win" Motorcycle Taxi`}
          type={"Motorcycle Taxi"}
          description={`Known as "The Orange Jackets",`}
          href={"https://touristbangkok.com/city-transport/motorcycle-taxi/"}
          icon={
            <img
              src={"/img/resources/icons/motorcycle-taxi.jpg"}
              alt={"Group Logo"}
              className={"w-8 h-8"} />} />
      </ul>
    </>
  )
}