import LatinAmericanCards from "@/components/Cards/Dining/LatinAmericanCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function LatinAmerica() {
  return (
    <>
      <DiningLayout
      bgColor={"stone-200"}
      cards={<LatinAmericanCards />}
      title={"Latin America"}
      description={"South American food"} />
    </>
  )
}