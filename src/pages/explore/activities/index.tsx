import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";

export default function Activities() {
  return (
    <>
      {/* First Section */}
      <SectionLayout bgImg={`bg-[url("/img/sections/attractions-img.jpg")]`}>
        <section
          className={
            "relative flex min-h-screen flex-col items-center justify-between p-24"
          }
        >
          <div className={"flex-col justify-center align-center text-white"}>
            <h1 className={"text-6xl md:text-8xl pb-3"}>ACTIVITIES</h1>
            <h4 className={"text-2xl md:text-4xl pt-3"}>
              For Body and Soul
            </h4>
          </div>
        </section>
      </SectionLayout>
      {/* Second Section */}
      <section className={"bg-gray-200 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>LOCAL FLAVORS</h1>
        </div>
        <div className={"flex-col place-content-center p-6"}>
          <p className={"text-lg "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget aliquam nunc. Sed eget nisl mattis, vestibulum neque porttitor,
            vehicula sapien. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pharetra turpis sit
            amet ante pharetra, nec feugiat dui commodo. Vivamus sed hendrerit
            lacus, vitae ullamcorper sem. Suspendisse nec arcu libero. Proin mi
            ante, varius quis commodo quis, pharetra eget metus. Sed in nibh ut
            arcu ultricies varius eu ac ligula. Nunc bibendum, odio vel lobortis
            porttitor, ligula mi bibendum elit, sed aliquam dui risus a odio.
            Etiam tempus, est vitae laoreet lobortis, justo nibh tempor ligula,
            a tristique velit velit facilisis quam. Vivamus tincidunt enim a
            libero luctus, et dapibus tellus rhoncus. Nunc vel ullamcorper mi.
            Praesent maximus dictum est, et mollis turpis dignissim eget. Donec
            commodo odio in metus posuere lobortis.
          </p>
          <br />
          <p className={"text-lg "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget aliquam nunc. Sed eget nisl mattis, vestibulum neque porttitor,
            vehicula sapien. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pharetra turpis sit
            amet ante pharetra, nec feugiat dui commodo. Vivamus sed hendrerit
            lacus, vitae ullamcorper sem. Suspendisse nec arcu libero. Proin mi
            ante, varius quis commodo quis, pharetra eget metus. Sed in nibh ut
            arcu ultricies varius eu ac ligula. Nunc bibendum, odio vel lobortis
            porttitor, ligula mi bibendum elit, sed aliquam dui risus a odio.
            Etiam tempus, est vitae laoreet lobortis, justo nibh tempor ligula,
            a tristique velit velit facilisis quam. Vivamus tincidunt enim a
            libero luctus, et dapibus tellus rhoncus. Nunc vel ullamcorper mi.
            Praesent maximus dictum est, et mollis turpis dignissim eget. Donec
            commodo odio in metus posuere lobortis.
          </p>
        </div>
      </section>
      {/* Third Section */}
      <section className={"bg-green-500 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>WESTERN</h1>
        </div>
        <div className={"flex-col place-content-center p-6"}>
          <p className={"text-lg "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget aliquam nunc. Sed eget nisl mattis, vestibulum neque porttitor,
            vehicula sapien. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pharetra turpis sit
            amet ante pharetra, nec feugiat dui commodo. Vivamus sed hendrerit
            lacus, vitae ullamcorper sem. Suspendisse nec arcu libero. Proin mi
            ante, varius quis commodo quis, pharetra eget metus. Sed in nibh ut
            arcu ultricies varius eu ac ligula. Nunc bibendum, odio vel lobortis
            porttitor, ligula mi bibendum elit, sed aliquam dui risus a odio.
            Etiam tempus, est vitae laoreet lobortis, justo nibh tempor ligula,
            a tristique velit velit facilisis quam. Vivamus tincidunt enim a
            libero luctus, et dapibus tellus rhoncus. Nunc vel ullamcorper mi.
            Praesent maximus dictum est, et mollis turpis dignissim eget. Donec
            commodo odio in metus posuere lobortis.
          </p>
          <br />
          <p className={"text-lg "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget aliquam nunc. Sed eget nisl mattis, vestibulum neque porttitor,
            vehicula sapien. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pharetra turpis sit
            amet ante pharetra, nec feugiat dui commodo. Vivamus sed hendrerit
            lacus, vitae ullamcorper sem. Suspendisse nec arcu libero. Proin mi
            ante, varius quis commodo quis, pharetra eget metus. Sed in nibh ut
            arcu ultricies varius eu ac ligula. Nunc bibendum, odio vel lobortis
            porttitor, ligula mi bibendum elit, sed aliquam dui risus a odio.
            Etiam tempus, est vitae laoreet lobortis, justo nibh tempor ligula,
            a tristique velit velit facilisis quam. Vivamus tincidunt enim a
            libero luctus, et dapibus tellus rhoncus. Nunc vel ullamcorper mi.
            Praesent maximus dictum est, et mollis turpis dignissim eget. Donec
            commodo odio in metus posuere lobortis.
          </p>
        </div>
      </section>
      {/* Fourth Section */}
      <section className={"bg-red-500 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>MIDDLE EAST & AFRICA</h1>
        </div>
        <div className={"flex-col place-content-center p-6"}>
          <p className={"text-lg "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget aliquam nunc. Sed eget nisl mattis, vestibulum neque porttitor,
            vehicula sapien. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pharetra turpis sit
            amet ante pharetra, nec feugiat dui commodo. Vivamus sed hendrerit
            lacus, vitae ullamcorper sem. Suspendisse nec arcu libero. Proin mi
            ante, varius quis commodo quis, pharetra eget metus. Sed in nibh ut
            arcu ultricies varius eu ac ligula. Nunc bibendum, odio vel lobortis
            porttitor, ligula mi bibendum elit, sed aliquam dui risus a odio.
            Etiam tempus, est vitae laoreet lobortis, justo nibh tempor ligula,
            a tristique velit velit facilisis quam. Vivamus tincidunt enim a
            libero luctus, et dapibus tellus rhoncus. Nunc vel ullamcorper mi.
            Praesent maximus dictum est, et mollis turpis dignissim eget. Donec
            commodo odio in metus posuere lobortis.
          </p>
          <br />
          <p className={"text-lg "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget aliquam nunc. Sed eget nisl mattis, vestibulum neque porttitor,
            vehicula sapien. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pharetra turpis sit
            amet ante pharetra, nec feugiat dui commodo. Vivamus sed hendrerit
            lacus, vitae ullamcorper sem. Suspendisse nec arcu libero. Proin mi
            ante, varius quis commodo quis, pharetra eget metus. Sed in nibh ut
            arcu ultricies varius eu ac ligula. Nunc bibendum, odio vel lobortis
            porttitor, ligula mi bibendum elit, sed aliquam dui risus a odio.
            Etiam tempus, est vitae laoreet lobortis, justo nibh tempor ligula,
            a tristique velit velit facilisis quam. Vivamus tincidunt enim a
            libero luctus, et dapibus tellus rhoncus. Nunc vel ullamcorper mi.
            Praesent maximus dictum est, et mollis turpis dignissim eget. Donec
            commodo odio in metus posuere lobortis.
          </p>
        </div>
      </section>
      {/* Fifth Section */}
      <section className={"bg-cyan-500 min-h-screen pt-16"}>
        <div className={"flex place-content-center"}>
          <h1 className={"text-5xl "}>NORTHEAST ASIA</h1>
        </div>
        <div className={"flex-col place-content-center p-6"}>
          <p className={"text-lg "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget aliquam nunc. Sed eget nisl mattis, vestibulum neque porttitor,
            vehicula sapien. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pharetra turpis sit
            amet ante pharetra, nec feugiat dui commodo. Vivamus sed hendrerit
            lacus, vitae ullamcorper sem. Suspendisse nec arcu libero. Proin mi
            ante, varius quis commodo quis, pharetra eget metus. Sed in nibh ut
            arcu ultricies varius eu ac ligula. Nunc bibendum, odio vel lobortis
            porttitor, ligula mi bibendum elit, sed aliquam dui risus a odio.
            Etiam tempus, est vitae laoreet lobortis, justo nibh tempor ligula,
            a tristique velit velit facilisis quam. Vivamus tincidunt enim a
            libero luctus, et dapibus tellus rhoncus. Nunc vel ullamcorper mi.
            Praesent maximus dictum est, et mollis turpis dignissim eget. Donec
            commodo odio in metus posuere lobortis.
          </p>
          <br />
          <p className={"text-lg "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget aliquam nunc. Sed eget nisl mattis, vestibulum neque porttitor,
            vehicula sapien. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pharetra turpis sit
            amet ante pharetra, nec feugiat dui commodo. Vivamus sed hendrerit
            lacus, vitae ullamcorper sem. Suspendisse nec arcu libero. Proin mi
            ante, varius quis commodo quis, pharetra eget metus. Sed in nibh ut
            arcu ultricies varius eu ac ligula. Nunc bibendum, odio vel lobortis
            porttitor, ligula mi bibendum elit, sed aliquam dui risus a odio.
            Etiam tempus, est vitae laoreet lobortis, justo nibh tempor ligula,
            a tristique velit velit facilisis quam. Vivamus tincidunt enim a
            libero luctus, et dapibus tellus rhoncus. Nunc vel ullamcorper mi.
            Praesent maximus dictum est, et mollis turpis dignissim eget. Donec
            commodo odio in metus posuere lobortis.
          </p>
        </div>
      </section>
    </>
  );
}
