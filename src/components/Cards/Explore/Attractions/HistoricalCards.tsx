import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function HistoricalCards() {
  return (
    <>
      <ul className={"grid gap-8 lg:grid-cols-2"}>
        { /* Chinatown */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/chinatown.jpg"}
          name={"Chinatown"}
          title={"Chinatown"}
          buttonText={"Chinatown"}
          description={`Yaowarat, Wat Mangkon Kamalawat.`}
          href={"https://www.tourismthailand.org/Attraction/china-town"} />
        { /* Kudi Chin  */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/kudichin.jpg"}
          name={"Kudi Chin"}
          title={"Historic Portuguese Neigbourhood"}
          buttonText={"Santa Cruz Church"}
          description={`Often referred to as Bangkok's "Little Portugal". 
          Established in the late 17th century, when Portuguese traders and missionaries settled in the area.
          Places to visit: Santa Cruz Church, Phra Sumen Fort.`}
          href={"https://www.tourismthailand.org/Articles/reliving-the-kudi-chin-history-through-your-eyes"} />
        { /* Rattanakosin */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/rattanakosin.jpg"}
          name={"Rattanakosin"}
          title={"Old City"}
          buttonText={"Wat Arun"}
          description={`Established in 1782 when King Rama I moved the capital of Thailand from Thonburi to the area surrounding the Grand Palace.
          Sights: Grand Palace, Wat Phra Kaew (Temple of the Emerald Buddha), Wat Pho (Temple of the Reclining Buddha), and Wat Arun (Temple of Dawn).        
          museums, galleries, and traditional markets.        `}
          href={"https://wikitravel.org/en/Bangkok/Rattanakosin"} />
        { /* Talat Noi */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/talatnoi.jpg"}
          name={"Talat Noi"}
          title={"Historic Chinese Neighbourhood"}
          buttonText={"Talat Noi"}
          description={`Located near the Chao Phraya River, Talat Noi is known for its unique blend of Thai and Chinese culture, as well as its historic architecture and street art. Visitors to the area can explore the narrow alleyways and streets, and visit the many temples, shrines, and traditional shophouses that are located throughout the neighborhood. 
          Established in the late 19th century, when Chinese immigrants began settling in the area and establishing a thriving trading community.
          Sights: So Heng Tai Mansion, Wat Mangkon Kamalawat temple, Talat Noi Wall Art.`}
          href={"https://www.tourismthailand.org/Attraction/talat-noi"} />
        { /* Ancient Siam */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/ancientsiam.jpg"}
          name={"Ancient Siam"}
          title={"Outdoor Museum Park"}
          buttonText={"Ancient Siam"}
          description={`Also known as Muang Boran, Ancient Siam features a large outdoor exhibit of historical Thai architecture and culture. 
          The museum is located on a 320-acre site in Samut Prakan, and contains replicas of over a hundred historic Thai buildings, including temples, palaces, and traditional homes, all arranged in a geographical layout that mirrors the shape of Thailand. 
          Visitors can explore the museum on foot, or take a bicycle or golf cart tour of the expansive grounds.         
          In addition to the architectural exhibits, Ancient Siam also features traditional Thai historical performances, such as music and dance shows, as well as demonstrations of traditional Thai handicrafts like silk weaving and pottery.         
          The museum provides a unique and immersive way to learn about Thai history and culture, and is a popular destination for both tourists and locals alike.
          It offers a glimpse into the rich heritage and diversity of Thailand's people and architecture, and is a must-visit destination for anyone interested in history, culture, or architecture.`}
          href={"https://www.muangboranmuseum.com/en/"} />
      </ul>
    </>
  )
}