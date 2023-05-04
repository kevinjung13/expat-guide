import Link from "next/link";

/* Props */
interface ResourcesCardsProps {
  title: string;
  description: string;
  href: string;
}

/* function for Card */ 
function Card(props: ResourcesCardsProps) {

  const { title, description, href } = props;

  return (
    <>
      <article className={"mt-5 pt-8 md:pt-0"}>
        <div>
          {/* Title */ }
          <h3 className={"text-xl text-black font-semibold"}>
            {title}
          </h3>
          {/* description */ }
          <p className={"text-gray-500 mt-1 leading-relaxed"}>
            {description}
          </p>
        </div>
          {/* Learn More Link */ }
          <Link
            className={"max-w-fit mt-2 mb-4 outline-none flex items-center text-md text-cyan-700 hover:text-yellow-700 font-semibold"}
            href={href}
            target={"_blank"}>
            Learn More
            <svg
              xmlns={"http://www.w3.org/2000/svg"}
              className={"h-3 w-3 ml-2"}
              fill={"none"}
              viewBox={"0 0 24 24"}
              stroke={"currentColor"}>
              <path
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                strokeWidth={2}
                d={"M17 8l4 4m0 0l-4 4m4-4H3"} />
            </svg>
          </Link>
      </article>
    </>
  )
}

export default function ResourcesCards() {

  return (
    <>
      <div className={"mt-9 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3"}>
        {/* News */}
        <Card
          title={"News"}
          description={"Stay up to date on what is happening in Thailand and around the region."}
          href={"/resources/#news"} />
        {/* Facebook Groups */}
        <Card
          title={"Facebook Groups"}
          description={"Explore groups to buy and sell items, find your new home or meet people."}
          href={"/resources/#facebook-groups"} />
        {/* Food Delivery */}
        <Card
          title={"Food Delivery"}
          description={"Use your preferred food delivery platforms to receive food at the comfort of your home."}
          href={"/resources/#food-delivery"} />
        {/* Plant-Based */}
        <Card
          title={"Plant-Based"}
          description={"A selection of platforms and news for Vegans and Vegetarians."}
          href={"/resources/#plant-based"} />
        {/* Transportation */}
        <Card
          title={"Transportation"}
          description={"Get around the city on your preferred mode of transport, depending on the occasion."}
          href={"/resources/#transportation"} />
        {/* Others */}
        <Card
          title={"Others"}
          description={"Useful information that will help you stay connected and travel around the region."}
          href={"/resources/#others"} />
        </div>
    </>
  )
}