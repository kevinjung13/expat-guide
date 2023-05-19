import NewsCards from "@/components/Cards/Resources/NewsCards";
import ResourcesLayout from "@/components/Layout/ResourcesLayout";

export default function News() {
  return (
    <>
      <ResourcesLayout
        bgColor={"bg-white"}
        title={"News"}
        description={`Stay up to date on what is happening in Thailand and around the region.`}
        descColor={"text-cyan-700"}
        id={"news"}
        cards={<NewsCards />} />
    </>
  )
}