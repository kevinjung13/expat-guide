import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function LatinAmericanCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* Ojo */}
       <DiningCard
        picture={"https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"}
        name={"Ojo"}
        station={"BTS Station: Saint Louis / Chong Nonsi"}
        description={""}
        href={""} />
       {/* The Missing Burro */}
       <DiningCard
        picture={"https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"}
        name={"The Missing Burro"}
        station={"BTS Station: Thong Lor"}
        description={""}
        href={""} />
       {/* La Monita Taqueria */}
       <DiningCard
        picture={"https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"}
        name={"La Monita Taqueria"}
        station={"BTS Station: Phrom Pong / Thong Lor"}
        description={""}
        href={""} />
       {/* Sabor Brasil */}
       <DiningCard
        picture={"https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"}
        name={"Sabor Brasil"}
        station={"BTS Station: Asoke"}
        description={""}
        href={""} />
        {/* El Gaucho */}
       <DiningCard
        picture={"https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"}
        name={"El Gaucho"}
        station={"BTS Station: Asoke, Nana, Thong Lor"}
        description={""}
        href={""} />
      </ul>
  </>
  )
}