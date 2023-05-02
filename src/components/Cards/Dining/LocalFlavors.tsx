import Link from "next/link";
import { localFlavors } from "@/data/data";

export default function LocalFlavors() {
  return (
    <>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-5xl font-semibold sm:text-4xl">
                        Local Flavors
                    </h3>
                    <p className="mt-3 text-cyan-700">
                        Thai food is amazing. Here are some of my favorite local restaurants in the city:
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {localFlavors.map((item, idx) => (
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
            </div>
        </div>
      </section>
  </>
  )
}