export default function Introduction() {
  return (
    <>
      <section className={"bg-white max-w-screen-lg pt-16 mx-auto md:px-32"}>
        {/* Title */}
        <div className={"flex place-content-center"}>
          <h1 className={"text-black text-5xl font-semibold"}>The City of Angels</h1>
        </div>
        {/* Paragraphs */}
        <div className={"flex-col place-content-center p-6 text-lg mb-3 mt-3"}>
          <p className={"pb-7"}>
            Sawasdee krub and welcome to Bangkok! Officially known as "Krung
            Thep Maha Nakhon" or simply "Krung Thep" in Thai, Bangkok is one of
            the most vibrant and diverse cities in the region (and possibily the
            world).
          </p>
          <p className={"pb-7"}>
            "Farang" - a Thai word for foreigner (and the name of this e-guide),
            was created out of a desire to help both exisiting and newly
            relocated expats navigate around the city, as well as provide
            suggestions on numerous subjects that could potentially enhance your
            experience during your time here.
          </p>
          <p className={"pb-7"}>
            As you settle in (or learn more about the city), I hope that Farang
            can serve as your guide. Feel free to reach out for any questions or
            inquiries.
          </p>
          {/* End */}
          <p className={"pb-8"}>All the best!</p>
          <p>- Kevin -</p>
        </div>
      </section>
    </>
  )
}