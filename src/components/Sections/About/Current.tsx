import Link from "next/link";

export default function Current() {
  return (
    <>
      <section className={"bg-white max-w-screen-lg pt-16 mx-auto md:px-32"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl font-semibold"}>Current</h1>
        </div>
        <div className={"flex-col place-content-center p-6 text-lg mb-3 mt-3"}>
          <p className={"pb-7"}>
            I am currently based in Koh Phangan, situated between the islands of
            Koh Samui and Koh Tao.
          </p>
          <p className={"pb-7"}>
            Known for its concious community and full moon party, the island
            receives a large number of people annually - from tourists and
            party-lovers to yogis and digital nomads.
          </p>
          <p className={"pb-7"}>
            I am currently working on some interesting projects and developing
            my skills to become a Front-End Developer.
          </p>
          <p className={"pb-7"}>
            In case you wish to contact me, you can reach me by
            <Link href={"mailto:kevinjung13@gmail.com"}>
              <span className={"text-cyan-700 hover:text-indigo-600"}>
                {" "}
                email
              </span>
            </Link>{" "}
            or any of the platforms below.
          </p>
          <p className={"pb-7"}>Thanks for reading!</p>
        </div>
      </section>
    </>
  )
}