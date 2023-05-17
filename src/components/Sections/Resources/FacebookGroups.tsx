import FacebookGroupCards from "@/components/Cards/Resources/FacebookGroupsCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function FacebookGroups() {
  return (
    
    <>
      <ResourcesLayout
        bgColor={"bg-stone-200"}
        title={"Facebook Groups"}
        description={"Stay up to date on what is happening in Thailand and around the region."}
        descColor={"text-cyan-700"}
        id={"facebook-groups"}
        cards={<FacebookGroupCards />} />
    </>
  )
}