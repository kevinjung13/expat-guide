import Link from "next/link";

const resourcesCards = [
  {
    title: "News",
    desc: "Stay up to date on what is happening in Thailand and around the region.",
    href: "/resources/#news",
  },
  {
    title: "Facebook Groups",
    desc: "According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film",
    href: "/resources/#facebook-groups",
  },
  {
    title: "Food Delivery",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    href: "/resources/#plant-based",
  },
  {
    title: "Plant-Based",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    href: "/resources/#plant-based",
  },
  {
    title: "Transportation",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    href: "/resources/#plant-based",
  },
  {
    title: "Others",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the",
    href: "/resources/#others",
  },
];

export default function ResourcesCards() {

  return (
    <>
      <div className="mt-9 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
          {resourcesCards.map((item, idx) => (
            <article className="mt-5 pt-8 md:pt-0" key={idx}>
              <Link href={item.href} target={"_blank"}>
                <div className={""}>
                  <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <button className="bg-green-500 mt-2 mb-4 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </article>
          ))}
        </div>
    </>
  )

}