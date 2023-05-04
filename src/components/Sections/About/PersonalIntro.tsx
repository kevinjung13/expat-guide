export default function PersonalIntro() {
  return (
    <>
      <section className={"relative max-w-screen-xl mx-auto py-4 px-4 md:px-8"}>
        <div className={"relative z-10 gap-5 items-center lg:flex"}>
          <div className={"flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left"}>
            {/* Title */ }
            <h1 className={"text-4xl mb-5 font-semibold md:text-5xl"}>
              Third-Culture Kid
            </h1>
            {/* Paragraphs */ }
            <p className={"pb-6 leading-relaxed mt-3"}>
              Even before my birth, I was already an expat. My family was living
              in Hong Kong, and I was born in Seoul, Korea while they were
              visiting family.
            </p>
            <p className={"pb-6 leading-relaxed"}>
              Within a month, I was already on a flight back to Hong Kong and
              since then, I have lived in 14 different countries and in most
              continents (except Africa and Antartica).
            </p>
            <p className={"pb-6 leading-relaxed"}>
              Throughout this incredible journey, some have shown curiosity
              about my life, which helped me develop an interest in helping new
              expats and sharing what I have learnt along the way. With the
              evolution of technology and rise of social media platforms, it has
              never been easier to help more people.
            </p>
          </div>
          {/* Image */ }
          <div className={"flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto"}>
            <img
              src={"/img/about/kid-img.jpg"}
              alt={"Image"}
              className={"w-full"} />
          </div>
        </div>
      </section>
    </>
  )
}