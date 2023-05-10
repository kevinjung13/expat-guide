/* Props */
interface NeighbourhoodsLayoutProps {
  bgColor: string;
  cardsOne: JSX.Element
  cardsTwo: JSX.Element
  cardsThree: JSX.Element
  children?: React.ReactNode
  title: string;
  description: string;
}

export default function NeighbourhoodsLayout(props: NeighbourhoodsLayoutProps) {

  const { bgColor, cardsOne, cardsTwo, cardsThree, children, title, description } = props;

  return (
    <>
      <section className={`py-14 bg-${bgColor}`}>
        <div className={"max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"}>
          <div className={"relative max-w-xl mx-auto sm:text-center"}>
            <h3 className={"text-gray-800 text-3xl font-semibold sm:text-4xl"}>
              {title}
            </h3>
              <div className={"mt-3 max-w-xl text-cyan-700"}>
                <p>
                  {description}
                </p>
              </div>
          </div>
          <div className={"mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3"}>
            {cardsOne}
            {cardsTwo}
            {cardsThree}
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

