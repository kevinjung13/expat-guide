import Link from "next/link";

const Others = [
  {
    company_name: "Mobile Phone",
    job_title: "Packages",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://www.tourismthailand.org/Articles/plan-your-trip-mobile-phone-and-internet",
    icon: (
      <img
      src={"/img/resources/icons/phone.jpg"}
      alt={"Group Logo"}
      className={"w-4 h-6"} />
    ),
  },
  {
    company_name: "Internet",
  job_title: "Home Internet",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://www.tourismthailand.org/Articles/plan-your-trip-mobile-phone-and-internet",
    icon: (
      <img
      src={"/img/resources/icons/internet.png"}
      alt={"Group Logo"}
      className={"w-9 h-8"} />
    ),
    
  },
  {
    company_name: "Airline Platforms",
  job_title: "For flights within the region",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  path: "https://www.skyscanner.net/",
    icon: (
      <img
      src={"/img/resources/icons/plane.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
];

export default function OthersCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
            {Others.map((item, idx) => (
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