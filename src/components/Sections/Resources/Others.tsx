import OthersCards from "@/components/Cards/Resources/OthersCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function Others() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-stone-200"}
        title={"Others"}
        description={"From Mobile and Internet Packages, to Airline Booking Platforms and Transportation"}
        descColor={"text-cyan-700"}
        id={"others"}
        cards={<OthersCards />} />
    </>
  )
}