import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";

export default function Rama9() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/neighbourhoods-img.jpg")]`}
        headTitle={"Rama 9 | Neighbourhoods"}
        title={"RAMA IX"}
        subtitle={"TBA"} />
    </>
  )
}