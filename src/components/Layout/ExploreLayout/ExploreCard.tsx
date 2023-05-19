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
      <li className={""}>
        <div className={"w-full h-60 sm:h-52 md:h-60"}>
          <img
            src={picture}
            loading={"lazy"}
            className={"w-full h-full object-cover object-top shadow-md rounded-xl"}
            alt={"picture"} />
        </div>
        <div className={"mt-4 "}>
          <h4 className={"text-lg text-black font-semibold"}>
            {name}
          </h4>
          <p className={"text-cyan-700"}>
            {title}
          </p>
          <p className={"text-gray-500 mt-2 "}>
            {description}
          </p>
          <div className={"mt-3 text-white"}>
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