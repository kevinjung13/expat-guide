import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";
import LocalFlavors from "@/components/Cards/Dining/LocalFlavors";
import Asia from "@/components/Cards/Dining/Asia";
import Europe from "@/components/Cards/Dining/Europe";
import TheAmericas from "@/components/Cards/Dining/TheAmericas";
import MiddleEastAndAfrica from "@/components/Cards/Dining/MiddleEastAndAfrica";
import Brunch from "@/components/Cards/Dining/Brunch";

export default function Dining() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/dining-img.jpg")]`}
        headTitle={"Dining | Farang"}
        title={"DINING"}
        subtitle={"A Street Food Capital"} />
      {/* Local Flavors Section */}
      <LocalFlavors />
      {/* Asia Section */}
      <Asia />
      {/* Europe Section */}
      <Europe />
      {/* The Americas Section */}
      <TheAmericas />
      {/* Middle East & Africa Section */}
      <MiddleEastAndAfrica />
      {/* Brunch Section */}
      <Brunch />
    </>
  );
}
