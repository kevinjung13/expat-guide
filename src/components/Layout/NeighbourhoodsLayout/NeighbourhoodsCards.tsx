import Link from "next/link";
import FeaturesList from "./FeaturesList";

/* Props */
interface NeighbourhoodsCardsProps {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  borderColor: string;
  bgColor: string;
  featureTextOne: string;
  featureTextTwo: string;
  featureTextThree: string;
}

export default function NeighbourhoodsCards(props: NeighbourhoodsCardsProps) {

  const {
    bgColor,
    borderColor,
    buttonText,
    title,
    description,
    href,
    featureTextOne,
    featureTextTwo,
    featureTextThree
  } = props;

  return (
    <>
      <div className={`relative flex-1 flex items-stretch flex-col p-8 rounded-xl shadow-lg border-2 ${borderColor} ${bgColor}`}>
        <div>
          <span className={"text-black text-2xl font-medium"}>
            {title}
          </span>
          <div className={"mt-4 text-cyan-700 text-xl font-semibold"}>
            {description} 
          </div>
        </div>
        <FeaturesList
          feature={[featureTextOne]} />
        <FeaturesList
          feature={[featureTextTwo]}  />
        <FeaturesList
          feature={[featureTextThree]} />
        <div className={"flex-1 flex items-end"}>
          <Link href={href} target={"_blank"}>
            <button className={"px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-gray-800 hover:bg-gray-600"}>
              {buttonText}
            </button>
          </Link>   
        </div>
      </div>
    </>
  )
}
