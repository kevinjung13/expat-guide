import Link from "next/link";

const asia = [
    {
        picture: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Liaoning Chinese Cuisine",
        station: "BTS Station: Chong Nonsi",
        description: "",
        href: "https://goo.gl/maps/Mfr4bgVCAAUHXQKF6",
    },
    {
        picture: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Mensho Tokyo",
        station: "BTS Station: Phrom Pong",
      description: "-",
      href: "https://goo.gl/maps/FkPFCvksxdWdoooi8",
    },
    {
        picture: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Masu Maki Sushi & Bar",
        station: "BTS Station: Phrom Pong",
      description: "-",
        href: "https://goo.gl/maps/bLgxW5nSwvFRdsr66",
    },
    {
      picture: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Bangkok Banjom",
      station: "BTS Station: Ekkamai",
      description: "-",
      href: "https://goo.gl/maps/YrJBCYLYCvgWTs518",
    },
    {
      picture: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Korean Plaza",
      station: "BTS Station: Nana",
      description: "-",
      href: "https://goo.gl/maps/MoHgyouNkEJsYjkj7",
    },
    {
      picture: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Haoma",
      station: "BTS Station: Asoke / MRT Station: Sukhumvit",
      description: "-",
      href: "https://goo.gl/maps/Q3MetyPxzYY4YKEt8",
    },
    {
      picture: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Teppen",
      station: "BTS Station: Asoke / MRT Station: Sukhumvit",
      description: "",
      href: "https://goo.gl/maps/7TqCUCqzfxrY6qr7A",
    },
    {
      picture: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Daimasu",
      station: "BTS Station: Asoke / MRT Station: Sukhumvit",
      description: "-",
      href: "https://goo.gl/maps/etd6jU6jQQsZ3pKg8",
  },
  ]

export default function Asia() {
  return (
    <>
     <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
       <div className="max-w-xl sm:text-center md:mx-auto">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
         Asia
        </h3>
        <p className="mt-3 text-gray-600">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.
        </p>
       </div>
       <div className="mt-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {asia.map((item, idx) => (
          <li key={idx} className="bg-gray-50 p-4 rounded-xl">
           <Link href={item.href} target={"_blank"}>
            <figure>
             <div className="flex items-center gap-x-4">
              <img src={item.picture} className="w-16 h-16 rounded-full" />
              <div>
               <span className="block text-gray-800 font-semibold">{item.name}</span>
               <span className="block text-gray-600 text-sm mt-0.5">{item.station}</span>
              </div>
             </div>
             <blockquote>
              <p className="mt-6 text-gray-700">
               {item.description}
              </p>
             </blockquote>
            </figure>
           </Link>
          </li>))
         }
        </ul>
       </div>
      </div>
     </section>
  </>
  )
}