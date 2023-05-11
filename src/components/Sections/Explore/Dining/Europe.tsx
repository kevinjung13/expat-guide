import EuropeCards from "@/components/Cards/Explore/Dining/EuropeCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function Europe() {
  return (
    <>
      <DiningLayout
        bgColor={"white"}
        cards={<EuropeCards />}
        title={"Europe"}
        description={"Here are my some of my favorite European restaurants that will satisfy your Western food craving and bring a taste of home (for some of you)."}
      />
    </>
  );
}
