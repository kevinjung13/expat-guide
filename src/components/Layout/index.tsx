import { ReactNode, useState } from "react";

/* Layout Props */
export interface LayoutProps {
  children: ReactNode;
}

/* Layout Function */
export default function Layout(props: LayoutProps) {

  const { children } = props;
  const [open, setOpen] = useState("")

  return (
    <>
      <section>
        {children}
      </section>
    </>
  )
}