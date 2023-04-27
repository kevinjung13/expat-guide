import Link from "next/link";

export default function Card() {

    const posts = [
        {
            title: "Food",
            desc: "Dine at my favorite locations, from street food stalls to michelin-guided establishments.",
            img: "/img/card/food-img.jpg",
            href: "/explore/food"
        },
        {
            title: "Activities",
            desc: "Get back into your routine, meet fellow expats, stay physically active, and find new hobbies.",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "/explore.activities"
        },
        {
            title: "Attractions",
            desc: "Immerse yourself in the local culture, learn about the history of Bangkok and its surroundings, increase awareness on social ettiquettes.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "explore/attractions"
        },
        {
            title: "Nightlife",
            desc: "Enjoy the panoramic Bangkok skyline, discover hidden bars, and dance your night away.",
            img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "explore/nightlife"
        }
    ]
    
    return (
        <section className="bg-gray-200 min-h-screen pt-16 pb-8 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-5xl text-gray-800 font-semibold">
                    Explore
                </h1>
                <p className="mt-3 text-gray-500">
                    Everything you need to know outside of work.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 ">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <Link href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" />
                                <div className="pt-2 ml-4 mr-2 mb-3 mt-2">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </Link>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}