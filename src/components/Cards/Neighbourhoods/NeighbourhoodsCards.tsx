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
      <li className={"w-full rounded-lg bg-white shadow-lg"}>
        <div className={"flex items-start justify-between p-4"}>
          <div className={"space-y-2"}>
            <img src={`${img}`} alt={"image"} />
            <h4 className={"text-cyan-700 text-2xl font-semibold text-center"}>
              {title}
            </h4>
            <p className={"text-gray-500 text-md"}>{description}</p>
          </div>
        </div>
        <div className={"py-4 align-center text-center"}>
          <Link href={href} target={"_blank"}>
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
      <ul className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Sukhumvit */ }
        <Card
         title={"Sukhumvit"}
         description={`Located in the heart of Bangkok, Sukhumvit has become one of the most popular areas for expats to live due to its central location, excellent transportation links (BTS and MRT), and abundance of amenities such as international schools, shopping centers, and restaurants. 
         With already a well established expat community in the area, new expats will easily be able to make new friends and settle in.
         Additionally, Sukhumvit offers a wide range of housing options, from high-end condominiums to more affordable apartments, catering to various budgets and lifestyles.
         Personally, my favorite area to live in and the area, with numerous parks and malls only a few stops away.`}
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
         description={`The Ratchathewi and Phaya Thai districts are emerging and trendy areas for expats to live, as it is more quiet yet still provide excellent transportation links (BTS and MRT), and is away from the busy areas of central Bangkok. 
         Ari in particular is becoming of the most popular neighbourhoods for both Thais and expats to relocate to, due to its abundance of trendy restaurants, bars, cafes and shops.
         In addtion, both areas offer a wide range of housing options, where it is easier to find slightly older yer more affordable apartments with more space compared to modern ones.
         I would say Ari would be my 2nd favorite to live in.`}
         img={"/img/neighbourhoods/ari-img.png"}
         href={"/neighbourhoods/ratchathewi-phayathai"} />
        {/* Rama 9-Ratchada */ }
        <Card
         title={"Rama 9-Ratchada"}
         description={`Rama 9 and Ratchada are set to replace Silom and Sathorn as the new business district, with many local corporations and companies starting to relocate its headquarters to this area.
         While the area is predominantly local, it is constantly being developed, with the hopes of it becoming a vibrant neighbourhood where residential buildings and office spaces coexist.
         As of now, it is definitely an area where there are the least amount of expats.
         While it may take some time, this is expected to change in the next decade or so.
         Recommended for those who wish to avoid expats heavy areas and blend in with the locals.`}
         img={"/img/neighbourhoods/rama-ix-img.jpg"}
         href={"/neighbourhoods/rama9-ratchada"} />
      </ul>
    </>
  )
}