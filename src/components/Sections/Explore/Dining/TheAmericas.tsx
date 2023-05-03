import TheAmericasCards from "@/components/Cards/Dining/TheAmericasCards";
import DiningLayout from "@/components/Layout/DiningLayout";

export default function TheAmericas() {
  return (
    <>
     <DiningLayout
      cards={<TheAmericasCards />}
      title={"The Americas"}
      description={"South American food"} />
    </>
  )
}