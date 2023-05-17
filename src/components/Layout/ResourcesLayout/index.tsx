/* Props */
interface ResourcesLayoutProps {
  bgColor: string;
  title: string;
  description: string;
  descColor: string;
  cards: JSX.Element
  children?: React.ReactNode
  id: string;
}

export default function ResourcesLayout(props: ResourcesLayoutProps) {

  const { bgColor, title, description, descColor, cards, children, id } = props;

  return (
    <>
      <section className={`w-full py-28 ${bgColor}`} id={id}>
        <div className={"max-w-screen-lg mx-auto px-4 md:px-8"}>
          <div className={"max-w-md"}>
            <h1 className={"text-gray-800 text-2xl font-extrabold sm:text-3xl"}>
              {title}
            </h1>
            <p className={`${descColor} mt-2`}>
              {description}
            </p>
          </div>
          {cards}
          {children}
        </div>
      </section>
    </>
  )
}