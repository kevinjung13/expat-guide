/* Props */
interface DiningLayoutProps {
  cards: JSX.Element
  children?: React.ReactNode
  title: string;
  description: string;
  bgColor: string;
}

export default function DiningLayout(props: DiningLayoutProps) {
  
  const { bgColor, cards, children, description, title } = props;

  return (
    <>
      <section className={`py-14 bg-${bgColor}`}>
       <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
         <h3 className="text-gray-800 text-5xl font-semibold sm:text-4xl">
          {title}
         </h3>
         <p className="mt-3 text-cyan-700">
          {description}
         </p>
        </div>
          <div className="mt-12">
          {cards}
          {children}
        </div>
     </div>
    </section>
    </>
  )
}
