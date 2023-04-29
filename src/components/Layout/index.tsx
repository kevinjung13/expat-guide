/* Layout Props */
export interface LayoutProps {
  children: React.Node;
}

/* Layout Function */
export default function Layout(props: LayoutProps) {

  const { children } = props;

  return (
    <>
      <section>
        {children}
      </section>
    </>
  )
}