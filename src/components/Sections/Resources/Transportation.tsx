import TransportationCards from "@/components/Cards/Resources/TransportationCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function Transportation() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-white"}
        title={"Transportation"}
        description={"Stay up to date on what is happening in Thailand and around the region."}
        descColor={"text-cyan-700"}
        id={"transportation"}
        cards={<TransportationCards />} />
    </>
  )
}