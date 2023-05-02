import Link from "next/link";

  const FacebookGroups = [
  {
    company_name: "Bangkok Expats",
    job_title: "Group",
    job_description:
      'There is both "Bangkok Expats" and "BANGKOK EXPATS".',
    path: "https://www.facebook.com/groups/bkexpats.kc/",
    icon: (
      <img
      src={"/img/resources/icons/bangkok-expats.jpg"}
      alt={"BKK expats Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Bangkok Expats Classified Forum",
    job_title: "Forum and Marketplace",
    job_description:
      "Place to look for condo rental and secondhand items",
    path: "https://www.facebook.com/groups/BangkokClassifiedsForum/",
    icon: (
        <img
      src={"/img/resources/icons/bangkok-classifieds.jpg"}
      alt={"BKK classifieds Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    
    company_name: "Farang Girls in Bangkok",
    job_title: "Group",
    job_description:
      "An all-female expat group to share information, with an aim to make friends and get together.",
    path: "https://www.facebook.com/groups/fgibkk",
    icon: (
      <img
      src={"/img/resources/icons/farang-girls-bkk.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
      ),
  },
];


export default function FacebookGroupCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
            {FacebookGroups.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50"
              >
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