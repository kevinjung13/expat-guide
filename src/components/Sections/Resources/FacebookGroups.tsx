import FacebookGroupCards from "@/components/Cards/Resources/FacebookGroupsCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function FacebookGroups() {
  return (
    
    <>
      <ResourcesLayout
        bgColor={"bg-stone-200"}
        title={"Facebook Groups"}
        description={"Gain insights, find second-hand items, exchange and share information on personal experiences of being an expat in Bangkok."}
        descColor={"text-cyan-700"}
        id={"facebook-groups"}
        cards={<FacebookGroupCards />} />
    </>
  )
}