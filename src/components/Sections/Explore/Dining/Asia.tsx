import AsiaCards from "@/components/Cards/Explore/Dining/AsiaCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function Asia() {
  return (
    <>
      <DiningLayout
        bgColor={"stone-200"}
        cards={<AsiaCards />}
        title={"Asia"}
        description={
          "Craving dishes from other parts of the continent? Here are some of my favorite non-Thai Asian restaurants in the city."}>
      </DiningLayout>
    </>
  );
}
