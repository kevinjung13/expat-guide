import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function HistoricalCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Chinatown */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/chinatown.jpg"}
          name={"Chinatown"}
          title={"Chinatown"}
          buttonText={"Discover"}
          description={`Traces its roots back to the late 18th century when Chinese immigrants settled in the area, who played a significant role in Bangkok's development, contributing to trade, commerce, and cultural diversity.
          Comes alive during festive seasons (Chinese New Year), where streets are filled with decorations, dragon parades, fireworks, and cultural performances.`}
          href={"https://www.tourismthailand.org/Attraction/china-town"} />
        { /* Kudi Chin  */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/kudichin.jpg"}
          name={"Kudi Chin"}
          title={"Historic Portuguese Neigbourhood"}
          buttonText={"Discover"}
          description={`Often referred to as Bangkok's "Little Portugal". 
          Established in the late 17th century, when Portuguese traders and missionaries settled in the area.
          A must visit for those interested in history and make sure to try the "Khanom Farang", a Thai-style cake that was influenced by the Portuguese.
          Places to visit: Santa Cruz Church, Baan Kudichin Museum, Kuan Yin Shrine.`}
          href={"https://www.tourismthailand.org/Articles/reliving-the-kudi-chin-history-through-your-eyes"} />
        { /* Rattanakosin */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/rattanakosin.jpg"}
          name={"Rattanakosin"}
          title={"Old City"}
          buttonText={"Discover"}
          description={`Established in 1782 when King Rama I moved the capital of Thailand from Thonburi to the area surrounding the Grand Palace.
          Sights: Grand Palace, Wat Phra Kaew (Temple of the Emerald Buddha), Wat Pho (Temple of the Reclining Buddha), and Wat Arun (Temple of Dawn).        
          museums, galleries, and traditional markets.
          A classic for both tourists and expats.`}
          href={"https://wikitravel.org/en/Bangkok/Rattanakosin"} />
        { /* Talat Noi */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/talatnoi.jpg"}
          name={"Talat Noi"}
          title={"Historic Chinese Neighbourhood"}
          buttonText={"Discover"}
          description={`Located near the Chao Phraya River, Talat Noi is known for its unique blend of Thai and Chinese culture, as well as its historic architecture, narrow alleyways, and street art. 
          Visitors to the area can visit the many temples, shrines, cafes & traditional shophouses that are located throughout the neighborhood. 
          Sights: So Heng Tai Mansion, Wat Mangkon Kamalawat temple, Talat Noi Wall Art.`}
          href={"https://www.tourismthailand.org/Attraction/talat-noi"} />
        { /* Ancient Siam */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/ancientsiam.jpg"}
          name={"Ancient Siam"}
          title={"Outdoor Museum Park"}
          buttonText={"Discover"}
          description={`Features a large outdoor exhibit of replicas of over 100 historic Thai buildings (temples, palaces, and traditional homes).
          The museum can be explored on foot, or with a bicycle (recommended) or golf cart.        
          In addition, it also features traditional music, dance shows, and demonstrations of silk weaving and pottery.        
          A must-visit destination for anyone interested in history, culture, and architecture.`}
          href={"https://www.muangboranmuseum.com/en/"} />
        { /* Thonburi */}
        <ExploreCard
          picture={"/img/explore/attractions/historical/icons/thonburi.jpg"}
          name={"Thonburi"}
          title={"Historic District"}
          buttonText={"Discover"}
          description={`Thonburi offers a glimpse into Bangkok's past as the former capital.
          It has retained much of its traditional charm and local character and provides a more relaxed and less crowded atmosphere compared to central Bangkok. 
          Great opportunity to take boat rides and witness the local river life. Sights: Wat Paknam Phasi Charoen, Amphawa Floating Market, Wat Rakhang Khositaram`}
          href={"https://wikitravel.org/en/Bangkok/Thonburi"} />
      </ul>
    </>
  )
}