import Link from "next/link";

/* Layout Props */
interface ExploreCardsProps {
  picture: string;
  title: string;
  name: string;
  buttonText: string;
  description: string;
  href: string;
}

export default function ExploreCard(props: ExploreCardsProps) { 

  const { picture, name, description, href, buttonText, title } = props;

  return (
    <>
      <li className={"grid gap-6 h-full sm:grid-cols-2"}>
        <div className={"w-full sm:h-auto"}>
          <img
            src={picture}
            loading={"lazy"}
            className={"w-full h-full object-cover object-center shadow-md rounded-xl"}
            alt={"picture"} />
        </div>
        <div className={""}>
          <h4 className={"text-lg text-black font-semibold"}>{name}</h4>
          <p className={"text-cyan-700"}>{title}</p>
          <p className={"text-gray-500 mt-2"}>{description}</p>
          <div className={"mt-3 flex gap-4 text-white"}>
            <Link href={href} target={"_blank"}>
              <button className={"p-2 bg-gray-800 rounded-full hover:bg-gray-500"}>
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </li>
    </>
  )
}