const middleEastAndAfrica = [
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Taye",
        title: "BTS Station: Saint Louis / Chong Nonsi",
        quote: "-",
      href: "",
    },
     {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Mama Dolores",
      title: "BTS Station: Ekkamai",
      quote: "-",
      href: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Beirut Restaurant",
        title: "BTS Station: Phrom Pong",
        quote: "-",
      href: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Nadimos",
        title: "BTS Station: Phrom Pong",
        quote: "-",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Al Saray",
      title: "BTS Station: Ekkamai",
      quote: "-",
      href: "",
    },
  ]


export default function MiddleEastAndAfricaCards() {
  return (
    <>
       <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            middleEastAndAfrica.map((item, idx) => (
                                <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
  </>
  )
}