import Link from "next/link";

/* Props */
interface CardProps {
    title: string;
    description: string;
    img: string;
    href: string;
}

/* Function for Cards */
function Cards(props: CardProps) {

    let { title, description, img, href } = props;
    let hover = `hover:shadow-2xl hover:-translate-y-5`;

  return (
    <>
      <article className={`bg-zinc-100 max-w-sm mx-auto mt-4 shadow-lg border rounded-md duration-300 ${hover}`}>
        {/* Title */ }
        <Link
          href={href}
          target={"_blank"}>
          <img
            src={img}
            loading={"lazy"}
            alt={title}
            className={"w-full h-64 rounded-t-md"} />
          <div className={"pt-2 ml-4 mr-2 mb-3 mt-2"}>
            <h3 className={"text-xl text-black"}>  
              {title}
            </h3>
            <p className={"text-gray-500 text-sm mt-1"}>
              {description}
            </p>
          </div>
        </Link>
      </article>
    </>
  )
}

export default function ExploreCards() {
    
  return (
    <div className={"mt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
      {/* Dining */}
      <Cards
        title={"Dining"}
        description={`Eat and drink at my favorite locations, 
        from street food stalls to michelin-guided establishments.`}
        img={"/img/card/food-img.jpg"}
        href={"/explore/dining"} />
      {/* Activities */}
      <Cards
        title={"Activities"}
        description={`Get back into your routine, meet fellow expats, stay physically active, and find new hobbies.`}
        img={"/img/card/activity-img.jpg"}
        href={"/explore/activities"} />
      {/* Attractions */}
      <Cards
        title={"Attractions"}
        description={`Immerse yourself in the local culture, learn about the history of Bangkok and its surroundings, increase awareness on social ettiquettes.`}
        img={"/img/card/attraction-img.jpg"}
        href={"/explore/attractions"} />
      {/* Nightlife */}
      <Cards
        title={"Nightlife"}
        description={`Enjoy the panoramic Bangkok skyline, discover hidden bars, and dance the night away.`}
        img={"/img/card/nightlife-img.jpg"}
        href={"/explore/nightlife"} />
      {/* Nearby Destinations */}
      <Cards
        title={"Nearby Destinations"}
        description={`Explore destinations only hours away from the city, ranging from national parks to UNESCO World Heritage Sites. Perfect for day trips or weekends.`}
        img={"/img/card/nearby-img.jpg"}
        href={"/explore/nearby-destinations"} />
      {/* Shopping */}
      <Cards
        title={"Shopping"}
        description={`Discover and buy everything you need at a wide range of places, from high-end malls to local markets.`}
        img={"/img/card/shopping-img.jpg"}
        href={"/explore/shopping"} />
    </div>
  )
}
