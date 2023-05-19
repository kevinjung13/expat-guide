import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function OthersCards() {
  return (
    <>
      <ul className={"mt-12 divide-y space-y-3"}>
        {/* Mobile Phone */}
        <ResourcesCards
          name={"Mobile Phone"}
          type={"Packages"}
          description={`Having a Thai number is essential to ensure that you are reachable.
          While there are many companies, I personally think AIS is the best company for mobile packages, as they offer numerous packages that are affordable and attractive.
          For more information, you can visit each of their websites or visit stores in person inside any major shopping mall. `}
          href={"https://www.tourismthailand.org/Articles/plan-your-trip-mobile-phone-and-internet"}
          icon={
            <img
              src={"/img/resources/icons/phone.jpg"}
              alt={"Group Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* Internet */}
        <ResourcesCards
          name={"Internet"}
          type={"Home Internet"}
          description={`While many condos include Wi-Fi in their rent, there are still many that do not.
          Even if it does, you may need something with a faster speed.
          Personally, AIS again is the winner for me.
          However, you may not be able to choose in some condos, due to the cabling.
          Recommended to look into this at the same time you inquire about your mobile package.`}
          href={"https://www.tourismthailand.org/Articles/plan-your-trip-mobile-phone-and-internet"}
          icon={
            <img
              src={"/img/resources/icons/internet.png"}
              alt={"Group Logo"} />} />
        {/* Airline Platforms */}
        <ResourcesCards
          name={"Airline Platforms"}
          type={"Flight bookings"}
          description={`During your time in Thailand, I guaranteee that you will be traveling a lot both domestically and internationally, due to the abundance of tourist destinations in the region.
          Skyscanner and Google Flights have been my favorite platforms to search for affordable prices or special deals.
          Small Tip: Depending on your region and currency setting on Skyscanner, the prices displayed may be cheaper.
          I found that keeping the country as Thailand and the currency in THB showed the best prices.`}
          href={"https://www.skyscanner.net/"}
          icon={
            <img
              src={"/img/resources/icons/plane.jpg"}
              alt={"Group Logo"}
              className={"rounded-full object-cover h-full"} />} />
      </ul>
    </>
  )
}