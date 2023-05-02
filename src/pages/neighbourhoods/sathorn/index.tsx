import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";

export default function Sathorn() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/neighbourhoods-img.jpg")]`}
        headTitle={"Sathorn | Neighbourhoods"}
        title={"SATHORN"}
        subtitle={"TBA"} />
    </>
  )
}