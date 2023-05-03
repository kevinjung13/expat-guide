import Link from "next/link";

  const FoodDelivery = [

  {
    company_name: "Food Panda",
  job_title: "Food Panda",
  job_description:
    "Food Panda",
  path: "https://www.foodpanda.co.th/?gclid=CjwKCAjwxr2iBhBJEiwAdXECwymjhHt0W-igqPIy1i9YQE_0rp4JvCU6FQVz--HRCu-rZZbBllM9FBoCIasQAvD_BwE",
    icon: (
      <img
      src={"/img/resources/icons/food-panda.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Grab Food",
    job_title: "Grab Food",
    job_description:
      "Grab Food ",
    path: "https://food.grab.com/th/en/",
    icon: (
      <img
      src={"/img/resources/icons/grab-food.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "LINE Man",
    job_title: "LINE Man",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://lineman.line.me/",
    icon: (
      <img
      src={"/img/resources/icons/lineman.png"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
];


export default function FoodDeliveryCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
            {FoodDelivery.map((item, idx) => (
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