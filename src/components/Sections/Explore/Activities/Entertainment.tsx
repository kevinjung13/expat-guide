import ExploreLayout from "@/components/Layout/ExploreLayout";
import EntertainmentCards from "@/components/Cards/Explore/Activities/EntertainmentCards";

export default function Entertainment() {
  return (
    <>
      {/* Entertainment */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<EntertainmentCards />}
        title={"Entertainment"}
        description={`Catch up on your favorite movies, see your favorite artists perform and explore the local entertainment scene.`} />
    </>
  )
}