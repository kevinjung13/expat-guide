import Link from "next/link";

export default function Cards() {

    /* Card Information and Props */
    const posts = [
        {
            title: "Dining",
            desc: "Eat and drink at my favorite locations, from street food stalls to michelin-guided establishments.",
            img: "/img/card/food-img.jpg",
            href: "/explore/dining"
        },
        {
            title: "Activities",
            desc: "Get back into your routine, meet fellow expats, stay physically active, and find new hobbies.",
            img: "/img/card/activity-img.jpg",
            href: "/explore/activities"
        },
        {
            title: "Attractions",
            desc: "Immerse yourself in the local culture, learn about the history of Bangkok and its surroundings, increase awareness on social ettiquettes.",
            img: "/img/card/attraction-img.jpg",
            href: "explore/attractions"
        },
        {
            title: "Nightlife",
            desc: "Enjoy the panoramic Bangkok skyline, discover hidden bars, and dance the night away.",
            img: "/img/card/nightlife-img.jpg",
            href: "explore/nightlife"
        },
        {
            title: "Nearby Destinations",
            desc: "Explore destinations only hours away from the city, ranging from national parks to UNESCO World Heritage Sites. Perfect for day trips or weekends.",
            img: "/img/card/nearby-img.jpg",
            href: "explore/nearby-destinations"
        },
    ]

    let hover = `hover:shadow-2xl hover:-translate-y-5 `;
    
    return (
      <div className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
       {posts.map((items, key) => (
        <article className={`bg-zinc-100 max-w-sm mx-auto mt-4 shadow-lg border rounded-md duration-300 ${hover}`} key={key}>
         <Link href={items.href}>
          <img src={items.img} loading={"lazy"} alt={items.title} className={"w-full h-64 rounded-t-md"} />
          <div className={"pt-2 ml-4 mr-2 mb-3 mt-2"}>
           <h3 className={"text-xl text-black"}>  
            {items.title}
           </h3>
           <p className="text-gray-500 text-sm mt-1">{items.desc}</p>
          </div>
         </Link>
        </article>))}
       </div>
    )
}