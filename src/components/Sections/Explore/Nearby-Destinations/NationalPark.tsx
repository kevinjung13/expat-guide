import ExploreLayout from "@/components/Layout/ExploreLayout";
import NationalParkCards from "@/components/Cards/Explore/Nearby-Destinations/NationalParkCards";

export default function NationalPark() {
  return (
    <>
      {/* National Parks */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<NationalParkCards />}
        title={"National Parks"}
        description={`Here is my list of national parks near the city that are just perfect to immerse yourself in nature.`} />
    </>
  )
}