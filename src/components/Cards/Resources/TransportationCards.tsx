import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function TransportationCards() {
  return (
    <>
      <ul className={"mt-12 divide-y space-y-3"}>
        {/* Grab */}
        <ResourcesCards
          name={"Grab"}
          type={"Transport Platform"}
          description={`The Uber of Southeast Asia and operates in several Southeast Asian countries.
          Options include GrabCar (private car service), GrabTaxi (traditional taxi service), GrabBike (motorbike taxi service), GrabExpress (on-demand delivery service), and more. 
          Passengers are notified of the estimated fare before confirming their booking, eliminating the risk of unexpected fare hikes or disputes over fares.
          For payment, you can link your preferred payment methods, such as credit cards or e-wallets, to your Grab account. 
          For safety, the app also provides features like real-time GPS tracking, sharing ride details with trusted contacts, and an in-app emergency button, enhancing the overall safety measures.`}
          href={"https://www.grab.com/"}
          icon={
            <img
              src={"/img/resources/icons/grab.jpg"}
              alt={"Group Logo"}
              className={"rounded-full"} />} />
        {/* Bolt */}
        <ResourcesCards
          name={"Bolt"}
          type={"Transport Platform"}
          description={`A well-known ride-hailing and transportation platform that operates in various countries.
          Similar to Grab and Uber but provide competitive pricing and sometimes cheaper than Grab.
          Also offers various transportation options, from services like Bolt Go (standard cars), Bolt XL (larger vehicles for groups), and Bolt Bikes (motorbike taxis).
          The app also provides features such as driver and vehicle details, real-time GPS tracking, and an in-app SOS button for emergencies and of course, supports cashless payments, though this is not yet supported in Bangkok.`}
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
          description={`Probably the best public transport system in town, and a popular mode of transportation for both locals, tourists and expats.
          One of the fastest and reliable ways to go around.
          As it operates on elevated tracks, it bypasses traffic congestion and provides a consistent travel time, with trains running frequently and adhere to a relatively fixed schedule.
          It also covers many areas of Bangkok, covering the whole of Sukhumvit and Sathorn, as well as the main areas in Silom and North Bangkok.
          It consists of two main lines, the Sukhumvit Line and the Silom Line, which intersect at Siam Station.`}
          href={"https://www.bts.co.th/eng/"}
          icon={
            <img
              src={"/img/resources/icons/bts.png"}
              alt={"Group Logo"}
              className={"h-9 w-9"} />} />
        {/* MRT */}
        <ResourcesCards
          name={"MRT"}
          type={"Metropolitan Rapid Transit (Metro)"}
          description={`Bangkok's metro system, that covers many important areas in Sathorn, Silom, Rama 9, Ratchada, all the way up to North Bangkok.
          Like the BTS, it is one of the most efficient ways to go around town and adheres to a fixed schedule.
          Also popular among locals, tourists and expats.
          It consists of two main lines, the Blue Line and the Purple Line.`}
          href={"https://metro.bemplc.co.th/MRT-System-Map?lang=en"}
          icon={
            <img
              src={"/img/resources/icons/mrt.png"}
              alt={"Group Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* Taxi Meter */}
        <ResourcesCards
          name={"Taxi Meter"}
          type={"Taxi Meter"}
          description={`Probably one of my least favorite ways to around town, due to numerous reasons.
          They can found with their distinctive "Taxi Meter" sign on the top of their vehicles and the drivers usually try to quote a price rather than putting on the meter.
          Important to ensure that they do put it on, despite the language barrier.
          Sometimes, you will be required to take this, as it can be difficult finding a Grab or Bolt when it is late or during bad weather conditions.`}
          href={"https://thaiest.com/thailand/bangkok/taxi"}
          icon={
            <img
              src={"/img/resources/icons/taxi-meter.jpg"}
              alt={"Group Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* "Win" Motorcycle Taxi */}
        <ResourcesCards
          name={`"Win" Motorcycle Taxi`}
          type={"Motorcycle Taxi"}
          description={`Known as "The Orange Jackets", Win bikes operate just like a Taxt Meter, except there is no Meter and prices are quoted by the drivers.
          They can be identified by their distinctive orange jackets and there are usually many Win bike stations in main roads.
          Caution: If you take a grab bike, make sure to not stop near these stations, as Win bike drivers are known to be aggressive towards Grab/Bolt drivers and passengers, as they feel like they are losing out.`}
          href={"https://touristbangkok.com/city-transport/motorcycle-taxi/"}
          icon={
            <img
              src={"/img/resources/icons/motorcycle-taxi.jpg"}
              alt={"Group Logo"}
              className={"rounded-full object-cover h-full"} />} />
      </ul>
    </>
  )
}