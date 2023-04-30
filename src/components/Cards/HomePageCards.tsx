import Link from "next/link";
import { posts } from "@/data/data";

export default function HomePageCards() {

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