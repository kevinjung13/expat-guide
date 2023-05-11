/* Props */
interface FiveYearCardProps {
  name: string;
  href: string;
}

/* Function for Cards */
function Card(props: FiveYearCardProps) {

  const { name, href } = props;

  return (
    <>
      <div className={"bg-white relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"}>
        <img src={href} alt={name} className={"w-fit h-auto"}/>
      </div>
    </>
  )
}

export default function FiveYearCards() {
  return (
    <>
      <div className={"mt-16 space-y-6 justify-center gap-6 sm:grid md:grid-cols-2 lg:grid-cols-3 sm:space-y-0"}>
        <Card
          name={"friends"}
          href={"img/about/friends.jpg"} />
        <Card
          name={"Street Art"}
          href={"img/about/runningart.jpg"} />
        <Card
          name={"Diving"}
          href={"img/about/diving.jpg"} />
        <Card
          name={"Lumphini Park View"}
          href={"img/about/lumphini.jpg"} />
        <Card
          name={"Love"}
          href={"img/about/love.jpg"} />
        <Card
          name={"Hiking"}
          href={"img/about/hiking.jpg"} />
      </div>
    </>
  )
}