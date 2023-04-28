import Head from "next/head";
import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";

export default function About() {

  const plans = [
    {
        name: "Bangkok Skyline",
        href: "img/about/skyline.jpg"
    },

    {
      name: "Ojo",
      href: "img/about/ojo.jpg"
      
    },
   
    {
        name: "Lumphini Park View",
        href: "img/about/lumphini.jpg"
        
    },

];

  return (
    <>
      <Head>
      <title> About | Farang</title >
      </Head>
      {/* Image Section */}
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
      {/* Third Culture Kid Section */}
      <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h1 className="text-4xl font-semibold md:text-5xl">
              Third-Culture Kid
            </h1>
            <p className={"pb-6 leading-relaxed mt-3"}>
              Even before my birth, I was already an expat. 
              My family was living in Hong Kong,
              and I was born in Seoul, Korea while they were visiting family.
            </p>
            <p className={"pb-6 leading-relaxed"}>
              Within a month, I was already on a flight back to Hong Kong and since then, 
              I have lived in 14 different countries and in most continents (except Africa and Antartica).
              </p>
              <p className={"pb-6 leading-relaxed"}>
              Throughout this incredible journey, some have shown curiosity about my life,
              which helped me develop an interest in helping new expats and sharing what I have learnt along the way.
              With the evolution of technology and rise of social media platforms, it has never been easier to help more people.
              </p>
          </div>
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <img 
              src="/img/about/kid-img.jpg" 
              alt="Image" 
              className="w-full" />
          </div>
        </div>
      </section>
      {/* 5 Years Section */}
      <section className='py-14 bg-stone-200'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h1 className='text-gray-800 pb-3 text-4xl font-semibold md:text-5xl'>
                      5+ Years
                    </h1>
                    <div className={'mt-3 max-w-xl'}>
                <p className={"pb-7"}>
                I have lived in Thailand for 5 and a half years, on 2 seperate occasions.
              </p>
              <ul>
                <li className={"pb-7"}>I first moved to Bangkok in August 2015, and left Thailand in December 2017 to take on a new role in the Maldives.</li>
                <li className={""}>I returned again in December 2019 and left Bangkok recently (February 2023) to live with my partner in Southern Thailand.</li>
              </ul> 
                    </div>
                </div>
                <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                          <div key={idx} className='bg-white relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                            <img src={item.href} alt={item.name}></img>
                          </div>
                        ))
                    }
                </div>
            </div>
        </section>
      {/* Fourth Section */}
      <section className={"bg-white max-w-screen-lg pt-16 mx-auto md:px-32"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl font-semibold"}>Current</h1>
        </div>
        <div className={"flex-col place-content-center p-6 text-lg mb-3 mt-3"}>
          <p className={"pb-7"}>
            I am currently based in Koh Phangan, situated between the islands of Koh Samui and Koh Tao.
          </p>
          <p className={"pb-7"}>Known for its concious community and full moon party, the island receives a large number of people annually - from tourists and party-lovers to yogis and digital nomads.</p>
          <p className={"pb-7"}>
           I am currently working on some interesting projects and developing my skills to become a Front-End Developer.
          </p>
          <p className={"pb-7"}>
            In case you wish to contact me, you can reach me by
            <Link href={"mailto:kevinjung13@gmail.com"}> 
              <span className={"text-cyan-700 hover:text-indigo-600"}> email</span>
            </Link> or any of the platforms below.
          </p>
          <p className={"pb-7"}>
           Thanks for reading!
          </p>
        </div> 
      </section>
    </>
  );
}
