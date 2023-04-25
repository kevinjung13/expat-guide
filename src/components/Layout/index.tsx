import Navbar from "../Navbar";
import Footer from "../Footer";
import { ReactNode } from "react";

/* Layout Props */
export interface LayoutProps {
  children: ReactNode;
}

/* Layout Function */
export default function Layout(props: LayoutProps) {

  const { children } = props;

  /* Background Image settings */
  const bgImgSettings = `bg-center bg-no-repeat bg-cover w-screen`
  let bgImg = `bg-[url("/img/bkk-skyline.jpg")]`
  
  return (
    <>
      <div className={`${bgImg} ${bgImgSettings}`}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  )
}