import TheAmericasCards from "@/components/Cards/Explore/Dining/TheAmericasCards";
import ExploreLayout from "@/components/Layout/ExploreLayout";

export default function LatinAmerica() {
  return (
    <>
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<TheAmericasCards />}
        title={"The Americas"}
        description={"Hungry and craving something hearty? Here are some of my favorite US and Latin American restaurants in the city."} />
    </>
  );
}
