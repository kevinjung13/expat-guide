import ExploreLayout from "@/components/Layout/ExploreLayout";
import EntertainmentCards from "@/components/Cards/Explore/Activities/EntertainmentCards";

export default function Entertainment() {
  return (
    <>
      {/* Entertainment*/}
      <ExploreLayout
        bgColor={"white"}
        cards={<EntertainmentCards />}
        title={"Entertainment"}
        description={`Cinemas, Concerts, Comedy, Theatre`} />
    </>
  )
}