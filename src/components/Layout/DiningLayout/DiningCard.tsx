import Link from "next/link";

/* Layout Props */
interface DiningCardsProps {
  picture: string;
  name: string;
  station: string;
  description: string;
  href: string;
}

export default function DiningCard(props: DiningCardsProps) { 

  const { picture, name, station, description, href } = props;
  let hover = `hover:shadow-2xl hover:-translate-y-5`;

  return (
    <>
      <li className={`bg-gray-100 p-4 shadow-lg border rounded-md duration-300 ${hover}`}>
        <Link href={href} target={"_blank"}>
          <figure>
          <div className="flex items-center gap-x-4">
            <img src={picture} className="w-16 h-16 rounded-full" loading={"lazy"} />
            <div>
              <span className="block text-black font-semibold">{name}</span>
              <span className="block text-cyan-700 text-sm mt-0.5">{station}</span>
            </div>
            </div>
            <p className="mt-6 text-gray-600">
            {description}
            </p>
          </figure>
        </Link>
      </li>
    </>
  )
}