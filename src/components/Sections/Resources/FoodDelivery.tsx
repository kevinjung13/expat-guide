import FoodDeliveryCards from "@/components/Cards/Resources/FoodDeliveryCards";

export default function FoodDelivery() {
  return (
    <>
      <section className="py-28" id={"food-delivery"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Food Delivery
            </h1>
            <p className="text-gray-600 mt-2">
              Stay up to date on what is happening in Thailand and around the region.
            </p>
          </div>
          <FoodDeliveryCards />
        </div>
      </section>
    </>
  )
}