import Navbar from "../Navbar";
import { ReactNode } from "react";

/* Layout Props */
export interface LayoutProps {
  bgImg: String;
  children: ReactNode;
}

/* Layout Function */
export default function Layout(props: LayoutProps) {

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