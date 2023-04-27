import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";

export default function About() {
  return (
    <>
      {/* First Section */}
      <SectionLayout bgImg={`bg-[url("/img/sections/about-img.jpg")]`}>
        <section
          className={
            "relative flex min-h-screen flex-col items-center justify-between p-16"
          }>
          <div className={"flex-col justify-center align-center text-white"}>
            <h1 className={"text-6xl pb-2 md:text-8xl md:pb-1"}>ABOUT</h1>
            <h4 className={"text-2xl md:text-4xl pt-2 pl-14 md:pl-24 md:pt-1"}>
              My Story
            </h4>
          </div>
        </section>
      </SectionLayout>
      {/* Introduction Section */}
      <section className={"bg-white max-w-screen-lg pt-16 mx-auto md:px-32"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl font-semibold"}>Third-Culture Kid</h1>
        </div>
        <div className={"flex-col place-content-center p-6 text-lg mb-3 mt-3"}>
          <p className={"pb-7"}>
           Even before I was born, I was already an expat. 
           My parents and my sister were living in Hong Kong,
           and I was born in Seoul, Korea during a vacation back home.
          </p>
          <p className={"pb-7"}>
           Within a month, I was already on a flight back to Hong Kong and since then, 
            I have lived in 14 different countries and in most continents (except Africa and Antartica).
          </p>
          <p className={"pb-7"}>
            Through this incredible journey, I developed an interest in sharing what I have learnt along the way
            and with the evolution of technology and rise of social media platforms, it has never been easier to help more people.
          </p>
        </div> 
      </section>
      {/* Third Section */}
      <section className={"bg-green-500 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>6 Years in Bangkok</h1>
        </div>
        <div className={"flex-col place-content-center p-6 text-lg"}>
        <p className={"pb-7"}>
           Even before I was born, I was already an expat. 
           My parents and my sister were living in Hong Kong,
           and I was born in Seoul, Korea during a vacation back home.
          </p>
          <p className={"pb-7"}>
           Within a month, I was already on a flight back to Hong Kong and since then, 
            I have lived in 14 different countries and in most continents (except Africa and Antartica).
          </p>
          <p className={"pb-7"}>
            Through this incredible journey, I developed an interest in sharing what I have learnt along the way
            and with the evolution of technology and rise of social media platforms, it has never been easier to help more people.
          </p>
        </div>
      </section>
      {/* Fourth Section */}
      <section className={"bg-red-500 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>Current</h1>
        </div>
        <div className={"flex-col place-content-center p-6 text-lg"}>
        <p className={"pb-7"}>
           Even before I was born, I was already an expat. 
           My parents and my sister were living in Hong Kong,
           and I was born in Seoul, Korea during a vacation back home.
          </p>
          <p className={"pb-7"}>
           Within a month, I was already on a flight back to Hong Kong and since then, 
            I have lived in 14 different countries and in most continents (except Africa and Antartica).
          </p>
          <p className={"pb-7"}>
            Through this incredible journey, I developed an interest in sharing what I have learnt along the way
            and with the evolution of technology and rise of social media platforms, it has never been easier to help more people.
          </p>
        </div>
      </section>
    </>
  );
}
