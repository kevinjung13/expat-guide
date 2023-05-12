import EuropeCards from "@/components/Cards/Explore/Dining/EuropeCards";
import ExploreLayout from "@/components/Layout/ExploreLayout";

export default function Europe() {
  return (
    <>
      <ExploreLayout
        bgColor={"white"}
        cards={<EuropeCards />}
        title={"Europe"}
        description={"Here are my some of my favorite European restaurants that will satisfy your Western food craving and bring a taste of home (for some of you)."} />
    </>
  );
}
