import Navbar from "../Navbar";
import { ReactNode } from "react";

/* Layout Props */
export interface SectionLayoutProps {
  bgImg: String;
  children: ReactNode;
}

/* Layout Function */
export default function SectionLayout(props: SectionLayoutProps) {

  /* Props */
  const { bgImg, children } = props;

  /* Background Image settings */
  const bgImgSettings = `bg-center bg-no-repeat bg-cover w-screen`
  
  return (
    <>
      <div className={`${bgImg} ${bgImgSettings}`}>
        <Navbar />
        {children}
      </div>
    </>
  )
}