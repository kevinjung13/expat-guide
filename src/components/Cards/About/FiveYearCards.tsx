const cards = [
  {
    name: "Bangkok Skyline",
    href: "img/about/skyline.jpg",
  },

  {
    name: "Ojo",
    href: "img/about/ojo.jpg",
  },

  {
    name: "Lumphini Park View",
    href: "img/about/lumphini.jpg",
  },
];

export default function FiveYearCards() {
  return (
    <>
      <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
              >
                <img src={item.href} alt={item.name}></img>
              </div>
            ))}
          </div>
    </>
  )
}