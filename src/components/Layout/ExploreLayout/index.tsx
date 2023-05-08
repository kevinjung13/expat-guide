/* Props */
interface ExploreLayoutProps {
  bgColor: string;
  cards: JSX.Element
  children?: React.ReactNode
  title: string;
  description: string;
}

export default function ExploreLayout(props: ExploreLayoutProps) {
  
  const { bgColor, cards, children, title, description } = props;

  return (
    <>
      <section className={`py-14 bg-${bgColor}`}>
        <div className={"max-w-screen-xl mx-auto px-4 md:px-8"}>
          <div className={"max-w-xl"}>
            <h3 className={"text-gray-800 text-3xl font-semibold sm:text-4xl"}>
              {title}
            </h3>
            <p className={"text-gray-600 mt-3"}>
              {description}
            </p>
          </div>
          <div className={"mt-12"}>
          {cards}
          {children} 
          </div>
        </div>
      </section>
    </>
  )
}