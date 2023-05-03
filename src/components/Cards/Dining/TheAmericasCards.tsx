
import { theAmericas } from "@/data/data";

export default function TheAmericasCards() {
  return (
    <>
       <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            theAmericas.map((item, idx) => (
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