import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function LocalCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Floating Market */}
        <ExploreCard
          picture={"/img/explore/attractions/local/icons/floating.jpg"}
          name={"Floating Markets"}
          title={"Markets"}
          buttonText={"Discover"}
          description={`On-water markets selling produce, and souvenirs from boats floating on canals. 
          Such markets are a traditional way of life and have been operating for hundreds of years.
          One of the best floating markets for me is: Khlong Bang Luang in Thonburi. 
          Unlike other floating markets, Khlong Bang Luang mainly attracts locals.
          Located on a picturesque canal lined with old wooden houses, art galleries, and cafés.`}
          href={"https://www.thailandee.com/en/visit-thailand/khlong-bang-luang-floating-market-bangkok-491"} />
        { /* Bang Krachao */}
        <ExploreCard
          picture={"/img/explore/attractions/local/icons/bangkrachao.jpg"}
          name={"Bang Krachao"}
          title={"Bang Krachao"}
          buttonText={"Discover"}
          description={`Known as Bangkok's "Green Lung," Bang Krachao is a lush green area with a rich ecosystem that has become a popular destination both locals and expats.
          Provides fresh air, and an escape from the pollution, and the hustle and bustle of the city.  
          Best explored by bicycle (rent available).
          Sights: Bang Nam Phueng Floating Market, Sri Nakhon Khuean Khan Park, Botanical Garden, Siamese Fighting Fish Gallery,`}
          href={"https://theculturetrip.com/asia/thailand/articles/bang-krachao-exploring-bangkoks-hidden-jungle-oasis/"} />
        { /* Koh Kret */}
        <ExploreCard
          picture={"/img/explore/attractions/local/icons/kohkret.jpg"}
          name={"Koh Kret"}
          title={"Koh Kret"}
          buttonText={"Discover"}
          description={`Artificial island created by chance.
          Became a settlement for Mon people (ethnic group from central Thailand and Myanmar).
          Famous for its distinctive pottery, where you can visit pottery workshops, and participate. 
          Best explored by bicycle, with designated bicycle paths.
          Must try: Khanom Jeen (rice noodles with curry), Kanom Krok (coconut rice pancakes) and a craft beer at Chit Beer.`}
          href={"https://www.tourismthailand.org/Attraction/ko-kret"} />
      </ul>
    </>
  )
}