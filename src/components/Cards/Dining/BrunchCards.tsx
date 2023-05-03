import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function BrunchCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* Tobys */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Tobys"}
        station={"BTS Station: Thong Lor"}
        description={"TBA"}
        href={""} />
       {/* Luka */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/women/79.jpg"}
        name={"Luka"}
        station={"BTS Station: Chong Nonsi / Sala Daeng"}
        description={""}
        href={""} />
        {/* Rocket CoffeeBar */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Rocket CoffeeBar"}
        station={"BTS Station: Chong Nonsi / Saint Louis"}
        description={""}
        href={""} />
        {/* Bartels */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Bartels"}
        station={"BTS Station: Thong Lor / Phrom Pong"}
        description={""}
          href={""} />
        {/* Yellow Lane Cafe */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Yellow Lane Cafe"}
        station={"BTS Station: Nana"}
        description={""}
        href={""} />
      </ul>
  </>
  )
}