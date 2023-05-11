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
        <img src={href} alt={name} className={"h-full w-auto"}/>
        </div>
    </>
  )
}

export default function FiveYearCards() {
  return (
    <>
      <div className={"mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0"}>
        <Card
          name={"Bangkok Skyline"}
          href={"img/about/skyline.jpg"} />
        <Card
          name={"Ojo"}
          href={"img/about/ojo.jpg"} />
        <Card
          name={"Lumphini Park View"}
          href={"img/about/lumphini.jpg"} />
        <Card
          name={"Lumphini Park View"}
          href={"img/about/lumphini.jpg"} />
      </div>
    </>
  )
}