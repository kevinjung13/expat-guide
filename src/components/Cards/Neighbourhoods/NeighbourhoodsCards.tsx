import Link from "next/link";

const neighbourhoods = [
  {
    title: "Sukhumvit",
    desc: "Ut enim ad minim veniam",
    img: "/img/neighbourhoods/sukhumvit-img.jpg",
    href: "/neighbourhoods/sukhumvit"
  },
  {
    title: "Sathorn / Silom",
    desc: "Ut enim ad minim veniam",
    img: "/img/neighbourhoods/sathorn-img.jpg",
    href: "/neighbourhoods/sathorn"
  },
  {
    title: "Ari / North Bangkok",
    desc: "Ut enim ad minim veniam",
    img: "/img/neighbourhoods/ari-img.png",
    href: "/neighbourhoods/ari"
  },
  {
    title: "Rama IX / Ratchadaphisek",
    desc: "Ut enim ad minim veniam",
    img: "/img/neighbourhoods/rama-ix-img.jpg",
    href: "/neighbourhoods/rama9"
  },
];

export default function NeighbourhoodsCards() {
  return (
    <>
      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {neighbourhoods.map((item, idx) => (
              <li className="border rounded-lg">
                <div className=" flex items-start justify-between p-4">
                  <div className="space-y-2 text-center">
                    <img src={`${item.img}`} alt={"image"}></img>
                    <h4 className="text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="py-5 px-4 text-center">
                  <Link href={item.href}>
                  <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">
                    Explore
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
    </>
  )
}