import BrunchCards from "@/components/Cards/Explore/Dining/BrunchCards";
import ExploreLayout from "@/components/Layout/ExploreLayout";

export default function Brunch() {
  return (
    <>
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<BrunchCards />}
        title={"Brunch"}
        description={"Woke up late? Here are some best brunch places to catch up with friends and enjoy a meal."} />
    </>
  );
}
