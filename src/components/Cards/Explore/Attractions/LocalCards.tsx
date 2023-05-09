import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function LocalCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Floating Market */}
        <ExploreCard
          picture={"/img/explore/attractions/local/icons/floating.jpg"}
          name={"Floating Markets"}
          title={"Markets"}
          buttonText={"Khlong Bang Luang Floating Market"}
          description={`On-water markets selling produce, and souvenirs from boats floating on canals. 
          These markets are a traditional way of life in Bangkok and have been operating for hundreds of years.
          One of the best floating markets in Bangkok: Khlong Bang Luang, located in the Thonburi district. What sets it apart from other floating markets is its relaxed and authentic atmosphere. Unlike some of the more touristy floating markets, Khlong Bang Luang attracts mainly local visitors and is known for its charming, rustic setting.         
          The market is held on weekends and is located on a picturesque canal lined with old wooden houses, art galleries, and cafés.   `}
          href={"https://www.thailandee.com/en/visit-thailand/khlong-bang-luang-floating-market-bangkok-491"} />
        { /* Local Market */}
        <ExploreCard
          picture={"/img/explore/attractions/local/icons/local.jpg"}
          name={"Local Markets"}
          title={"Markets"}
          buttonText={"Local Market"}
          description={` `}
          href={""} />
        { /* Bang Krachao */}
        <ExploreCard
          picture={"/img/explore/attractions/local/icons/bangkrachao.jpg"}
          name={"Bang Krachao"}
          title={"Bang Krachao"}
          buttonText={"Bang Krachao"}
          description={``}
          href={""} />
        { /* Koh Kret */}
        <ExploreCard
          picture={"/img/explore/attractions/local/icons/kohkret.jpg"}
          name={"Koh Kret"}
          title={"Koh Kret"}
          buttonText={"Koh Kret"}
          description={``}
          href={""} />
        { /* Khlong Toei */}
        <ExploreCard
          picture={"/img/explore/attractions/local/icons/khlongtoei.jpg"}
          name={"Khlong Toei"}
          title={"Khlong Toei"}
          buttonText={"Khlong Toei"}
          description={``}
          href={""} />
      </ul>
    </>
  )
}