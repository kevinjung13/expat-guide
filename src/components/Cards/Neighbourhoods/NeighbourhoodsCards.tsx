import Link from "next/link";

/* Props */
interface CardProps {
    title: string;
    description: string;
    img: string;
    href: string;
}

/* Function for Cards */
function Card(props: CardProps) {

  const { title, description, img, href } = props;

  return (
    <>
      <li className={"rounded-lg bg-white shadow-lg"}>
        <div className={"flex items-start justify-between p-4"}>
          <div className={"space-y-2 text-center"}>
            <img src={`${img}`} alt={"image"} />
            <h4 className={"text-black font-semibold"}>
              {title}
            </h4>
            <p className={"text-gray-500 text-sm"}>{description}</p>
          </div>
        </div>
        <div className={"py-5 px-4 text-center"}>
          <Link href={href}>
          <button className={"bg-gray-800 text-white text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-700"}>
            Explore
            </button>
          </Link>
        </div>
      </li>
    </>
  )
}

export default function NeighbourhoodsCards() {
  return (
    <>
      <ul className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2">
        {/* Sukhumvit */ }
        <Card
         title={"Sukhumvit"}
          description={`Located in the heart of Bangkok, Sukhumvit has become one of the most popular areas for expats to live due to its central location, excellent transportation links, and abundance of amenities such as international schools, shopping centers, and restaurants. 
         With already a well established expat community in the area, new expats will easily be able to make new friends and settle in.
         Additionally, Sukhumvit offers a wide range of housing options, from high-end condominiums to more affordable apartments, catering to various budgets and lifestyles.`}
         img={"/img/neighbourhoods/sukhumvit-img.jpg"}
          href={"/neighbourhoods/sukhumvit"} />
        {/* Sathorn-Silom */ }
        <Card
         title={"Sathorn-Silom"}
          description={`Sathorn and Silom are two adjacent neighborhoods located in the central business district of the city. 
         They have become popular areas for expats to live due to their convenient location, excellent transportation links, and cosmopolitan atmosphere.
         The area is home to many multinational corporations, embassies, and international schools, making it a popular choice for professionals and those with families.
         Additionally, Sathorn and Silom offer a wide range of housing options, from high-end condominiums to more affordable apartments, catering to various budgets and lifestyles.
         The area is also known for its vibrant nightlife, trendy restaurants, and cultural attractions.`}
         img={"/img/neighbourhoods/sathorn-img.jpg"}
         href={"/neighbourhoods/sathorn-silom"} />
        {/* Ratchathewi-Phaya Thai */ }
        <Card
         title={"Ratchathewi-Phaya Thai"}
         description={``}
         img={"/img/neighbourhoods/ari-img.png"}
         href={"/neighbourhoods/ratchathewi-phayathai"} />
        {/* Rama 9-Ratchada */ }
        <Card
         title={"Rama 9-Ratchada"}
         description={``}
         img={"/img/neighbourhoods/rama-ix-img.jpg"}
         href={"/neighbourhoods/rama9-ratchada"} />
      </ul>
    </>
  )
}