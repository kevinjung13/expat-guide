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
      <li className={"gap-8 sm:flex"}>
        <div className={"w-fit h-fit bg-red-500"}>
          <img
            src={picture}
            className={"w-screen h-auto md:h-64 md:w-64 object-cover object-center shadow-md rounded-xl"}
            alt={"picture"} />
          </div>
          <div className={"mt-4 sm:mt-0"}>
            <h4 className={"text-lg text-gray-700 font-semibold"}>{name}</h4>
            <p className={"text-cyan-700"}>{title}</p>
            <p className={"text-gray-500 mt-2"}>{description}</p>
          <div className={"mt-3 flex gap-4 text-white"}>
            <Link href={href} target={"_blank"}>
              <button className={"bg-gray-800 rounded-lg hover:bg-gray-500"}>
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </li>     
    </>
  )
}