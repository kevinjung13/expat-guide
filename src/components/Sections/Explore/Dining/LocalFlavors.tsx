import ExploreLayout from "@/components/Layout/ExploreLayout";
import LocalFlavorsCards from "@/components/Cards/Explore/Dining/LocalFlavorsCards";

export default function LocalFlavors() {
  return (
    <>
      <ExploreLayout
        bgColor={"white"}
        cards={<LocalFlavorsCards />}
        title={"Local Flavors"}
        description={`Showcasing the best of the city's local culinary offerings.
        From classic street food stalls to upscale eateries,
        each restaurant and area on the list is known for its authentic Thai flavors,
        warm hospitality, and inviting atmosphere.`} />
    </>
  );
}
