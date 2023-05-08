import Head from "next/head";
import Navbar from "../../Navbar";
import { ReactNode } from "react";

/* Layout Props */
interface HeroLayoutProps {
  headTitle: string;
  bgImg: string;
  children?: ReactNode;
  title: string;
  subtitle: string;
  titleCSS: string;
  subtitleCSS: string;
}

/* Layout Function */
export default function HeroLayout(props: HeroLayoutProps) {
  /* Props */
  const { bgImg, children, headTitle, title, titleCSS, subtitle, subtitleCSS } = props;

  /* Background Image settings */
  const bgImgSettings = `bg-center bg-no-repeat bg-cover min-w-screen`;

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
            <h1 className={titleCSS}>{title}</h1>
            <h4 className={subtitleCSS}>
              {subtitle}
            </h4>
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
