import Link from "next/link";

const PlantBased = [
  {
    
    company_name: "Root The Future",
    job_title: "Plant Based Related News",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    path: "https://rootthefuture.com/",
    icon: (
      <img
        src={"/img/resources/icons/root-the-future.jpg"}
        alt={"RTF Logo"}
        className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Vegan Monkey",
    job_title: "Food Platform",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://veganmonkey.co/",
    icon: (
      <img
      src={"/img/resources/icons/vegan-monkey.png"}
      alt={"Vegan Monkey Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    
    company_name: "Happy Cow",
    job_title: "Restaurant Finder and Blog",
    job_description:
      "A great platform to find Vegan and Vegetarian restaurants near you.",
    path: "https://www.happycow.net/",
    icon: (
      <img
      src={"/img/resources/icons/happy-cow.png"}
      alt={"Vegan Monkey Logo"}
      className={"w-8 h-8"} />
    ),
  },
];

export default function PlantBasedCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
            {PlantBased.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                <Link href={item.path} className="space-y-3" target={"_blank"} >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6"></div>
                </Link>
              </li>
            ))}
          </ul>
    </>
  )
}