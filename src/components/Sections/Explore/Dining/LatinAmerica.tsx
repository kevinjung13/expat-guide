import LatinAmericanCards from "@/components/Cards/Explore/Dining/LatinAmericanCards";
import ExploreLayout from "@/components/Layout/ExploreLayout";

export default function LatinAmerica() {
  return (
    <>
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<LatinAmericanCards />}
        title={"Latin America"}
        description={"Here are some of my favorite Latin American restaurants in the city."} />
    </>
  );
}
