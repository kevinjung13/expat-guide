import Head from "next/head";
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
      <Head>
        <title>Dining | Farang</title>
      </Head>
      {/* First Section */}
      <HeroLayout bgImg={`bg-[url("/img/sections/dining-img.jpg")]`}>
          <div className={"flex-col justify-center align-center text-white"}>
            <h1 className={"text-6xl pb-3 md:text-8xl"}>DINING</h1>
            <h4 className={"text-2xl pt-3 md:text-4xl"}>
              A Street Food Capital
            </h4>
          </div>
      </HeroLayout>
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
