import Layout from "@/components/Layout";

export default function Explore() {
  return (
    <>
      <Layout bgImg={`bg-[url("/img/explore-img.jpg")]`}>
        <section className={"relative flex min-h-screen flex-col items-center justify-between p-24"}>
          <div className={"flex-col justify-center align-center text-white"}>
            <h1 className={"text-6xl md:text-8xl pb-3"}>EXPLORE</h1>
            <h4 className={"text-2xl md:text-4xl pt-3"}>Your New Home</h4> 
          </div>
        </section>
      </Layout>
      <section className={"bg-green-500 min-h-screen"}>
        <h2 className={"text-5xl"}>Hello</h2>
      </section>
    </>
  )
}