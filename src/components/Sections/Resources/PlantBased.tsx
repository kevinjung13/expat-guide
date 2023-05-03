import PlantBasedCards from "@/components/Cards/Resources/PlantBasedCards";

export default function PlantBased() {
  return (
    <>
      <section className="py-28" id={"plant-based"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Plant-Based
            </h1>
            <p className="text-gray-600 mt-2">
              We're currently looking talent software engineers, and designers
              to help us in our missions and to grow up.
            </p>
          </div>
          <PlantBasedCards />
        </div>
      </section>
    </>
  )
}