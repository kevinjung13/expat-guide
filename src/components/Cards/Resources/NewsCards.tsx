import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function NewsCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
        {/* Bangkok Post */}
        <ResourcesCards
          name={"Bangkok Post"}
          type={"News Outlet"}
          description={"Bangkok Post is one of the main Newspapers in Thailand."}
          href={"https://www.bangkokpost.com/"}
          icon={
            <img
            src={"/img/resources/icons/bangkok-post.jpg"}
            alt={"Bangkok Postlogo"}
            className={"w-8 h-8"} />} />
        {/* The Thaiger */}
        <ResourcesCards
          name={"The Thaiger"}
          type={"News Outlet"}
          description={"Known as "}
          href={"https://thethaiger.com/"}
          icon={
            <img
              src={"/img/resources/icons/thaiger.png"}
              alt={"Thaiger logo"}
              className={"w-8 h-8"} />} />
        {/* Thai Enquirer */}
        <ResourcesCards
          name={"Thai Enquirer"}
          type={"English-Language News Outlet"}
          description={"Known as "}
          href={"https://www.thaienquirer.com/"}
          icon={
            <img
              src={"/img/resources/icons/thai-enquirer.png"}
              alt={"Thai Enquirer"}
              className={"w-8 h-8"} />} />
        {/* Richard Barrow in Thailand */}
        <ResourcesCards
          name={"Richard Barrow in Thailand"}
          type={"News & Blog"}
          description={"Richard has been in Thailand for over xxx years and has been sharing news since 1998. He has often stayed ahead of authorities in terms of news and has proven to be one of the most informed expats in the country."}
          href={"https://www.richardbarrow.com/"}
          icon={
            <img
              src={"/img/resources/icons/richard-barrow.jpg"}
              alt={"Richard Barrow"}
              className={"w-8 h-8"} />} />
        {/* THAIest */}
        <ResourcesCards
          name={"THAIest"}
          type={"Travel News and Guide"}
          description={"Known as "}
          href={"https://thaiest.com/"}
          icon={
            <img
              src={"/img/resources/icons/thaiest.png"}
              alt={"Thaiger logo"}
              className={"w-8 h-8"} />} />
      </ul>
    </>
  )
}