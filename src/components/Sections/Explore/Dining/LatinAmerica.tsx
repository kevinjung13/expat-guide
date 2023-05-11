import LatinAmericanCards from "@/components/Cards/Explore/Dining/LatinAmericanCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function LatinAmerica() {
  return (
    <>
      <DiningLayout
        bgColor={"stone-200"}
        cards={<LatinAmericanCards />}
        title={"Latin America"}
        description={"Here are some of my favorite Latin American restaurants in the city."}
      />
    </>
  );
}
