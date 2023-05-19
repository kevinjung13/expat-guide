import OthersCards from "@/components/Cards/Resources/OthersCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function Others() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-stone-200"}
        title={"Others"}
        description={`From mobile and internet packages, to airline booking platforms, here are some other essential topics that will interest you.`}
        descColor={"text-cyan-700"}
        id={"others"}
        cards={<OthersCards />} />
    </>
  )
}