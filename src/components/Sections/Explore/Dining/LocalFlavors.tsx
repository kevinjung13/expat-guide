import ExploreLayout from "@/components/Layout/ExploreLayout";
import LocalFlavorsCards from "@/components/Cards/Explore/Dining/LocalFlavorsCards";

export default function LocalFlavors() {
  return (
    <>
      {/* Local Flavors */}
      <ExploreLayout
        bgColor={"white"}
        cards={<LocalFlavorsCards />}
        title={"Local Flavors"}
        description={`From classic street food stalls to upscale eateries,
        here are my favorite places to eat authentic Thai dishes.`} />
    </>
  );
}
