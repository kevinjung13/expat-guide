import ExploreLayout from "@/components/Layout/ExploreLayout";
import NationalParkCards from "@/components/Cards/Explore/Nearby-Destinations/NationalParkCards";

export default function NationalPark() {
  return (
    <>
      {/* Hiking & Nature */}
      <ExploreLayout
        bgColor={"white"}
        cards={<NationalParkCards />}
        title={"National Parks"}
        description={`National Parks for hiking and being in nature.`} />
    </>
  )
}