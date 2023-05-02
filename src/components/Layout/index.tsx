import Head from "next/head";
import { ReactNode, useState } from "react";

/* Layout Props */
export interface LayoutProps {
  headTitle: Text;
  children?: ReactNode;
}

/* Layout Function */
export default function Layout(props: LayoutProps) {

  const { children, headTitle } = props;
  const [open, setOpen] = useState("")

  return (
    <>
      <Head>
        <title> Farang | Bangkok Expat Guide</title>
      </Head>
      <body>
        {children}
      </body>
    </>
  )
}