import OthersCards from "@/components/Cards/Resources/OthersCards";

export default function Others() {
  return (
    <>
      <section className={"py-28 bg-stone-200"} id={"others"}>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Others
            </h1>
            <p className="text-gray-600 mt-2">
              From Mobile and Internet Packages, to Airline Booking Platforms and Transportation
            </p>
          </div>
          <OthersCards />
        </div>
      </section>
    </>
  )
}