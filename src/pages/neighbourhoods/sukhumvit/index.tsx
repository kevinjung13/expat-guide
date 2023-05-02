import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";


export default function Sukhumvit() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/neighbourhoods-img.jpg")]`}
        headTitle={"Sukhumvit | Neighbourhoods"}
        title={"SUKHUMVIT"}
        subtitle={"TBA"} />
    </>
  )
}