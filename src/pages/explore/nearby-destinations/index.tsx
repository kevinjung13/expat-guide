import Link from "next/link";
import HeroLayout from "@/components/Layout/HeroLayout";

export default function NearbyDestinations() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/nearby-destinations-img.jpg")]`}
        headTitle={"Nearby Attractions | Farang"}
        title={"NEARBY DESTINATIONS"}
        subtitle={"City Escapes"} />
      {/* Second Section */}
      <section className={"bg-gray-200 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>LOCAL FLAVORS</h1>
        </div>
        <div className={"flex-col place-content-center p-6"}>
          <p className={"text-lg "}>
            TBA
          </p>
          <br />
          <p className={"text-lg "}>
            TBA
          </p>
        </div>
      </section>
    </>
  );
}
