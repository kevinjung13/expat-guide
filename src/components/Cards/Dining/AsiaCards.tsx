import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function AsiaCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* Liaoning Chinese Cuisine */}
       <DiningCard
        picture={"https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"}
        name={"Liaoning Chinese Cuisine"}
        station={"BTS Station: Chong Nonsi"}
        description={"TBA"}
        href={"https://goo.gl/maps/Mfr4bgVCAAUHXQKF6"} />
       {/* Mensho Tokyo */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/women/79.jpg"}
        name={"Mensho Tokyo"}
        station={"BTS Station: Phrom Pong"}
        description={"-"}
        href={"https://goo.gl/maps/FkPFCvksxdWdoooi8"} />
        {/* Masu Maki Sushi & Bar */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Masu Maki Sushi & Bar"}
        station={"BTS Station: Phrom Pong"}
        description={"-"}
          href={"https://goo.gl/maps/bLgxW5nSwvFRdsr66"} />
        {/* Bangkok Banjom */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Bangkok Banjom"}
        station={"BTS Station: Ekkamai"}
        description={"-"}
          href={"https://goo.gl/maps/YrJBCYLYCvgWTs518"} />
        {/* Korean Plaza */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Korean Plaza"}
        station={"BTS Station: Nana"}
        description={"-"}
          href={"https://goo.gl/maps/MoHgyouNkEJsYjkj7"} />
        {/* Haoma */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Haoma"}
        station={"BTS Station: Asoke / MRT Station: Sukhumvit"}
        description={"-"}
        href={"https://goo.gl/maps/Q3MetyPxzYY4YKEt8"} />
        {/* Teppen */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Teppen"}
        station={"BTS Station: Chong Nonsi"}
        description={"-"}
        href={"https://goo.gl/maps/7TqCUCqzfxrY6qr7A"} />
        {/* Daimasu */}
       <DiningCard
        picture={"https://randomuser.me/api/portraits/men/86.jpg"}
        name={"Daimasu"}
        station={"BTS Station: Asoke / MRT Station: Sukhumvit"}
        description={"-"}
        href={"https://goo.gl/maps/etd6jU6jQQsZ3pKg8"} />
      </ul>
    </>
  )
}