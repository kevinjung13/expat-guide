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

  return (
    <>
      <li className="bg-gray-50 p-4 rounded-xl">
        <Link href={href} target={"_blank"}>
          <figure>
          <div className="flex items-center gap-x-4">
            <img src={picture} className="w-16 h-16 rounded-full" loading={"lazy"} />
            <div>
              <span className="block text-gray-800 font-semibold">{name}</span>
              <span className="block text-gray-600 text-sm mt-0.5">{station}</span>
            </div>
            </div>
            <p className="mt-6 text-gray-700">
            {description}
            </p>
          </figure>
        </Link>
      </li>
    </>
  )
}