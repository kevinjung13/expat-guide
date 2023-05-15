import Link from "next/link";
import ResourcesCards from "@/components/Cards/Home/ResourcesCards";

export default function ResourcesSection() {
  return (
    <>
      <section className={"bg-gray-200 pt-12 mx-auto px-4 w-full md:px-8"}>
        <div className={"max-w-screen text-center"}>
          {/* Title */}
          <h1 className={"text-5xl font-semibold"}>
            <Link
              href={"/resources"}
              className={"hover:text-yellow-700"}>
              Resources
            </Link>
          </h1>
          {/* Description */}
          <p className={"mt-3 text-cyan-700"}>
            Stay up to date with news, events and much more.
          </p>
        </div>
        {/* Cards */}
        <ResourcesCards />
      </section>
    </>
  )
}