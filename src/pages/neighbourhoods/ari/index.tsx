import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";

export default function Ari() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/neighbourhoods-img.jpg")]`}
        headTitle={"Ari | Neighbourhoods"}
        title={"ARI"}
        subtitle={"TBA"} />
    </>
  )
}