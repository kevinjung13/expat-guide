import Link from "next/link";
import ResourcesCards from "@/components/Cards/Resources/ResourcesCards";

export default function Resources() {
  return (
    <>
      <section className="bg-gray-200 pt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="max-w-screen text-center">
          <Link href={"/resources"}>
            <h1 className="text-5xl font-semibold hover:text-yellow-700">Resources</h1>
          </Link>
          <p className="mt-3 text-cyan-700">
            Stay up to date with news, events and much more.
          </p>
        </div>
        <ResourcesCards />
      </section>
    </>
  )
}