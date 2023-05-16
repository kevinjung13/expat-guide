import ExploreLayout from "@/components/Layout/ExploreLayout";
import DrinksCards from "@/components/Cards/Explore/Nightlife/DrinksCards";

export default function Drinks() {
  return (
    <>
      {/* Drinks */}
      <ExploreLayout
        bgColor={"white"}
        cards={<DrinksCards />}
        title={"Drinks"}
        description={`From rooftops and  ocktail bars to speakeasy and casual venues, here are my favorite places for drinks.`} />
    </>
  )
}