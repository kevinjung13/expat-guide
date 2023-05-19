import TransportationCards from "@/components/Cards/Resources/TransportationCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function Transportation() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-white"}
        title={"Transportation"}
        description={`Save time and discover how to get around the city efficiently.`}
        descColor={"text-cyan-700"}
        id={"transportation"}
        cards={<TransportationCards />} />
    </>
  )
}