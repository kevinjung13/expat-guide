import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function EuropeCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* Bardo Social Bar & Bistro */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Bardo Social Bar & Bistro"}
        station={"BTS Station: Saint Louis / Chong Nonsi"}
        description={"TBA"}
        href={""} />
       {/* Peppina */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/women/79.jpg"}
        name={"Peppina"}
        station={"BTS Station: Phrom Pong"}
        description={""}
        href={""} />
        {/* El Mercado */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"El Mercado"}
        station={"BTS Station: Phrom Pong"}
        description={""}
          href={""} />
        {/* Le Buchon */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Le Buchon"}
        station={"BTS Station: Thong Lor / Phrom Pong"}
        description={""}
          href={""} />
        {/* El Tapeo */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"El Tapeo"}
        station={"BTS Station: Nana"}
        description={""}
        href={""} />
        {/* Mediterra */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Mediterra"}
        station={"BTS Station: Nana"}
        description={""}
        href={""} />
        {/* Belga Rooftop Bar and Brasserie */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Belga Rooftop Bar and Brasserie"}
        station={"BTS Station: Nana"}
        description={""}
        href={""} />
        {/* Cantina Wine Bar and Italian Kitchen */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Cantina Wine Bar and Italian Kitchen"}
        station={"BTS Station: Nana"}
        description={""}
        href={""} />
      </ul>
  </>
  )
}