import ExploreCards from "@/components/Cards/Home/ExploreCards";

export default function ExploreSection() {
  return (
    <>
      <section
        className={"bg-stone-200 pt-16 pb-8 w-full md:px-8"}
        id={"explore"}>
        <div className={"text-center"}>
          {/* Title */}
          <h3 className={"text-5xl font-semibold"}>
            Explore
          </h3>
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