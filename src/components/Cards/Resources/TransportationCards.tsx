import Link from "next/link";

const Transportation = [
  {
    company_name: "Grab",
    job_title: "Grab",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://www.grab.com/",
    icon: (
      <img
      src={"/img/resources/icons/grab.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Bolt",
    job_title: "Bolt",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://bolt.eu/en-th/",
    icon: (
      <img
      src={"/img/resources/icons/bolt.png"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "BTS",
  job_title: "Bangkok Skytrain System",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://www.bts.co.th/eng/",
    icon: (
      <img
      src={"/img/resources/icons/bts.png"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
    
  },
  {
    company_name: "MRT",
  job_title: "Metropolitan Rapid Transit (Metro)",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  path: "https://metro.bemplc.co.th/MRT-System-Map?lang=en",
    icon: (
      <img
      src={"/img/resources/icons/mrt.png"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Taxi Meter",
    job_title: "Taxi Meter",
    job_description:
      "Taxi Meter ",
    path: "https://thaiest.com/thailand/bangkok/taxi",
    icon: (
      <img
      src={"/img/resources/icons/taxi-meter.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },

  {
    company_name: `"Win" Motorcycle Taxi`,
    job_title: "Motorcycle Taxi",
    job_description:
      `Known as "The Orange Jackets", `,
    path: "https://touristbangkok.com/city-transport/motorcycle-taxi/",
    icon: (
      <img
      src={"/img/resources/icons/motorcycle-taxi.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
];

export default function TransportationCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
            {Transportation.map((item, idx) => (
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