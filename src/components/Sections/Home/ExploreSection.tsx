import Link from "next/link";
import ExploreCards from "@/components/Cards/Home/ExploreCards";

export default function ExploreSection() {
  return (
    <>
      <section className={"bg-stone-200 pt-16 pb-8 w-full md:px-8"}>
        <div className={"text-center"}>
          {/* Title */}
          <Link
            className={"max-w-fit text-5xl font-semibold hover:text-yellow-700"}
            href={"/explore"}>
            Explore
          </Link>
          {/* Description */}
          <p className={"mt-3 text-cyan-700"}>
            Everything you need to know outside of work.
          </p>
        </div>
        {/* Cards */}
        <ExploreCards />
      </section>
    </>
  )
}