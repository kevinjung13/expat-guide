import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function DanceCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Sing Sing Theatre */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/singsing.jpg"}
          name={"Sing Sing Theatre"}
          title={"Nightclub"}
          buttonText={"Discover"}
          description={`Sing Sing takes you to a different era, with its lavish decor that combines Asian and European influences. 
          It also has live performers with impressive choreography and costumes.
          Recommended to book a table at one of their VIP or private spaces as it gets tight.
          Ideal for celebrating special occasions or enjoying a night out with a group of friends.`}
          href={"https://singsing-bangkok.com/"} />
        { /* Mustache Bangkok */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/mustache.jpg"}
          name={"Mustache Bangkok"}
          title={"Nightclub"}
          buttonText={"Discover"}
          description={`Has a quirky and unconventional interior design, with colorful and retro-inspired decor (a wall covered in cassette tapes and a ceiling adorned with disco balls). 
          Main type of music are Hip-hop, house, and techno and frequently hosts local and international DJs. 
          Open until the early hours of the morning, so it's a great spot for those who want to party all night.`}
          href={"https://www.mustachebangkok.com/"} />
        { /* Tropic City */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/tropic.jpg"}
          name={"Tropic City"}
          title={"Cocktail Bar"}
          buttonText={"Discover"}
          description={`Tropical-themed bar that transports visitors to a lush and exotic place.
          Unique and creative cocktail menu, which features many tropical-inspired drinks.  
          Decorated with bamboo accents, tropical plants, and vibrant colors that create a laid-back and fun atmosphere.
          Offers a wide range of spirits (rum, tequila, mezcal, and more).`}
          href={"https://www.tropiccitybkk.com/"} />
        { /* Havana Social */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/havana.jpg"}
          name={"Havana Social"}
          title={"Speakeasy Bar"}
          buttonText={"Discover"}
          description={`A secret speakeasy bar with a 1940s-Cuban theme, that turns into a nightclub.
          Has a vintage decor and regularly hosts live music events, featuring Latin-inspired music. 
          The cocktail menu features classic Cuban-inspired drinks and also has an extensive selection of premium rums and cigars.
          Gets crowded on weekends and popular among expats.`}
          href={"https://goo.gl/maps/FguF2t35qXHh8F3e8"} />
        { /* Revoluction Cocktail */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/revolucion.jpg"}
          name={"Revoluction Cocktail"}
          title={"Cocktail Bar"}
          buttonText={"Discover"}
          description={`Latin-American themed bar that also turns into a club. 
          With locations in China and Bangkok, it offers a wide range of premium cocktails and over 150 different types of tequila. 
          Extremely popular among expats and one of their unique features is their fireshow. 
          An ideal spot for a night out with friends. Gets crowded on weekends.`}
          href={"https://goo.gl/maps/vGg2vWyXVX1YoLzf6"} />
        { /* Bangkok Island */}
        <ExploreCard
          picture={"/img/explore/nightlife/dance/icons/bangkokisland.jpg"}
          name={"Bangkok Island"}
          title={"Party Boat"}
          buttonText={"Discover"}
          description={`A unique party boat experience that offers a one-of-a-kind opportunity to enjoy Bangkok's stunning skyline while cruising down the Chao Phraya River. 
          Features a spacious rooftop deck with a fully stocked bar, comfortable seating, and a dance floor.
          It also hosts a diverse range of events and entertainment options, such as live music, DJs, and other performances.`}
          href={"https://goo.gl/maps/zym8ekrSot4ub96M7"} />
      </ul>
    </>
  )
}