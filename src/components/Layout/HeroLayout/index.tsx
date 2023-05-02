import Head from "next/head";
import Navbar from "../../Navbar";
import { ReactNode } from "react";

/* Layout Props */
export interface HeroLayoutProps {
  headTitle: string;
  bgImg: string;
  children?: ReactNode;
  title: string;
  subtitle: string;
}

/* Layout Function */
export default function HeroLayout(props: HeroLayoutProps) {
  /* Props */
  const { bgImg, children, headTitle, title, subtitle } = props;

  /* Background Image settings */
  const bgImgSettings = `bg-center bg-no-repeat bg-cover max-w-screen`;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/logo-head.png" />
        <meta charSet="utf-8" />
        <title>{headTitle}</title>
      </Head>
      <div className={`${bgImg} ${bgImgSettings}`}>
        <Navbar />
        <section className={"relative flex flex-col min-h-screen items-center justify-between p-32"}>
          <div className={"flex-col justify-center align-center text-white"}>
            <h1 className={"text-6xl md:text-8xl pb-3"}>{title}</h1>
            <h4 className={"text-2xl md:text-4xl pt-3 pl-24 md:pl-36"}>
              {subtitle}
            </h4>
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
