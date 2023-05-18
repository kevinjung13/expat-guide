import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function NewsCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
        {/* Bangkok Post */}
        <ResourcesCards
          name={"Bangkok Post"}
          type={"News Outlet"}
          description={`One of Thailand's leading English-language newspapers, providing comprehensive coverage of national and international news, business, politics, lifestyle, and more. 
          It has a reputation for delivering reliable and accurate information to its readers.
          The newspaper has a long-standing history and has been serving the expat community in Bangkok for many years..`}
          href={"https://www.bangkokpost.com/"}
          icon={
            <img
            src={"/img/resources/icons/bangkok-post.jpg"}
            alt={"Bangkok Post logo"}
            className={"rounded-full object-cover h-full"} />} />
        {/* The Thaiger */}
        <ResourcesCards
          name={"The Thaiger"}
          type={"News Outlet"}
          description={`A popular news outlet in Thailand that provides comprehensive coverage of news and events in the country.
          Features great articles on expat-related issues, offering practical information and tips for living and working in Thailand.
          Also offers a mix of news articles, feature stories, and opinion pieces, providing a diverse range of perspectives on current affairs, business, lifestyle, travel, tourism, and entertainment within the country.`}
          href={"https://thethaiger.com/"}
          icon={
            <img
              src={"/img/resources/icons/thaiger.png"}
              alt={"Thaiger logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* Thai Enquirer */}
        <ResourcesCards
          name={"Thai Enquirer"}
          type={"News Outlet"}
          description={`An English-language news outlet in Thailand known for its independent and investigative journalism. 
          While it covers national news and current affairs, it also provides in-depth analysis and commentary on social, political, and cultural issues, which expats can refer to as a valuable resource for gaining a deeper understanding of Thailand's society and politics.
          Perfect for those seeking insights into Thailand's political landscape, social issues, and cultural trends.`}
          href={"https://www.thaienquirer.com/"}
          icon={
            <img
              src={"/img/resources/icons/thai-enquirer.png"}
              alt={"Thai Enquirer"}
              className={"rounded-full object-cover"} />} />
        {/* Richard Barrow in Thailand */}
        <ResourcesCards
          name={"Richard Barrow in Thailand"}
          type={"News & Blog"}
          description={`Richard has been in Thailand for over 26 years and has been sharing valuable information, updates, and insights about Thailand (particularly for expats and travelers) since 1998. 
          His blog covers a wide range of topics including travel destinations, cultural events, festivals, local customs, and practical tips for living in Thailand. 
          He has also often stayed ahead of authorities in terms of news and has proven to be one of the most informed expats in the country.`}
          href={"https://www.richardbarrow.com/"}
          icon={
            <img
              src={"/img/resources/icons/richard-barrow.jpg"}
              alt={"Richard Barrow"}
              className={"rounded-full object-cover h-full"} />} />
        {/* THAIest */}
        <ResourcesCards
          name={"THAIest"}
          type={"Travel News and Guide"}
          description={`An online platform that offers a variety of information and resources related to travel, lifestyle, and culture in Thailand.
          Provides insights into popular tourist destinations, local attractions, dining options, and travel tips. 
          Expats can benefit from their platform by exploring recommendations for weekend getaways, exploring Thai cuisine, and discovering unique experiences within the country. 
          The platform also features articles on Thai culture, festivals, and traditions, allowing expats to gain a deeper understanding of the local customs.`}
          href={"https://thaiest.com/"}
          icon={
            <img
              src={"/img/resources/icons/thaiest.png"}
              alt={"THAIest logo"}
              className={"rounded-full object-cover h-full"} />} />
      </ul>
    </>
  )
}