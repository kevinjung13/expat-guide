import Link from "next/link";

const NewsData = [
  {
    company_name: "Bangkok Post",
    job_title: "News Outlet",
    job_description:
      "Bangkok Post is one of the main Newspapers in Thailand.",
    path: "https://www.bangkokpost.com/",
    icon:
      (
      <img
        src={"/img/resources/icons/bangkok-post.jpg"}
        alt={"Bangkok Postlogo"}
          className={"w-8 h-8"} />
      )
  },
    
  {
    company_name: "The Thaiger",
    job_title: "News Outlet",
    job_description:
      "Known as ",
    path: "https://thethaiger.com/",
    icon: (
      <img
        src={"/img/resources/icons/thaiger.png"}
        alt={"Thaiger logo"}
        className={"w-8 h-8"} />
    ),
  },

  {
    company_name: "Thai Enquirer",
    job_title: "English-Language News Outlet",
    job_description:
      "Thai Enquirer is an ",
    path: "https://www.thaienquirer.com/",
    icon: (
      <img
        src={"/img/resources/icons/thai-enquirer.png"}
        alt={"Thai Enquirer"}
        className={"w-8 h-8"} />
    ),
  },

  {
    company_name: "Richard Barrow in Thailand",
    job_title: "News & Blog",
    job_description:
      "Richard has been in Thailand for over xxx years and has been sharing news since 1998. He has often stayed ahead of authorities in terms of news and has proven to be one of the most informed expats in the country.",
    path: "https://www.richardbarrow.com/",
    icon: (
      <img
        src={"/img/resources/icons/richard-barrow.jpg"}
        alt={"Richard Barrow"}
        className={"w-8 h-8"} />
    ),
  },

  {
    company_name: "THAIest",
    job_title: "Travel News and Guide",
    job_description:
      "Known as ",
    path: "https://thaiest.com/",
    icon: (
      <img
        src={"/img/resources/icons/thaiest.png"}
        alt={"Thaiger logo"}
        className={"w-8 h-8"} />
    ),
  },
];

export default function NewsCards() {
  return (
    <>
  <ul className="mt-12 divide-y space-y-3">
    {NewsData.map((item, idx) => (
     <li
      key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                <Link href={item.path} className="space-y-3" target={"_blank"}>
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