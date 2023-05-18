import Link from "next/link";

// Props
interface ResourcesCardsProps {
  name: string;
  type: string;
  description: string;
  href: string;
  icon?: string | JSX.Element
}

export default function ResourcesCards(props: ResourcesCardsProps) {

  const { name, type, description, href, icon } = props;

  return (
    <>
      <li className={"px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-300"}>
        <Link href={href} className={"space-y-3"} target={"_blank"} >
          <div className={"flex items-center gap-x-3"}>
            <div className={"bg-white w-14 h-14 border rounded-full flex items-center justify-center"}>
              {icon}
            </div>
            <div>
              <span className={"block text-sm text-cyan-700 font-medium"}>
                {name}
              </span>
              <h3 className={"text-base text-gray-800 font-semibold mt-1"}>
                {type}
              </h3>
            </div>
          </div>
          <p className={"text-gray-600 sm:text-sm"}>
            {description}
          </p>
          <div className={"text-sm text-gray-600 flex items-center gap-6"} />
        </Link>
      </li>
    </>
  )
}
