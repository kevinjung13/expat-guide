import BrunchCards from "@/components/Cards/Explore/Dining/BrunchCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function Brunch() {
  return (
    <>
      <DiningLayout
        bgColor={"stone-200"}
        cards={<BrunchCards />}
        title={"Brunch"}
        description={"Woke up late? Here are some best brunch places to catch up with friends and enjoy a meal."}>
      </DiningLayout>
    </>
  );
}
