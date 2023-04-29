import Navbar from "../../Navbar";
import { ReactNode } from "react";

/* Layout Props */
export interface HeroLayoutProps {
  bgImg: String;
  children: ReactNode;
}

/* Layout Function */
export default function HeroLayout(props: HeroLayoutProps) {
  /* Props */
  const { bgImg, children } = props;

  /* Background Image settings */
  const bgImgSettings = `bg-center bg-no-repeat bg-cover max-w-screen`;

  return (
    <>
      <div className={`${bgImg} ${bgImgSettings}`}>
        <Navbar />
        {children}
      </div>
    </>
  );
}
