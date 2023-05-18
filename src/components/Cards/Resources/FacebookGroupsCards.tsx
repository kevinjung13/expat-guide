import ResourcesCards from "@/components/Layout/ResourcesLayout/ResourcesCards";

export default function FacebookGroupCards() {
  return (
    <>
      <ul className="mt-12 divide-y space-y-3">
        {/* Bangkok Expats */}
        <ResourcesCards
          name={"Bangkok Expats"}
          type={"Group"}
          description={`With 2 groups of the same name ("Bangkok Expats" & "BANGKOK EXPATS"), Bangkok Expats is a group dedicated to providing a platform for expats living in Bangkok to connect, share information, and engage in discussions.
          Primarily serves as a virtual community where expats can seek advice, ask questions, and exchange experiences related to life in Bangkok and Thailand.
          Great for gaining and sharing insights, tips, and recommendations on various topics, including housing, visas, healthcare, events, local services, and cultural integration.`}
          href={"https://www.facebook.com/groups/bkexpats.kc/"}
          icon={
            <img
              src={"/img/resources/icons/bangkok-expats.jpg"}
              alt={"BKK expats Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* Bangkok Expats Classified Forum */}
        <ResourcesCards
          name={"Bangkok Expats Classified Forum"}
          type={"Forum and Marketplace"}
          description={`A group specifically focused on classified ads and buy/sell transactions within the expat community in Bangkok.
          A great place to buy, sell, or exchange goods and services. 
          Members can post advertisements for various items such as furniture, electronics, vehicles, housing rentals, job opportunities, and more, making it an efficient marketplace for finding what you need.
          Additionally, it provides opportunities to discover second-hand items, which is cost-effective and convenient for expats settling into their new life in Bangkok.`}
          href={"https://www.facebook.com/groups/BangkokClassifiedsForum/"}
          icon={
            <img
              src={"/img/resources/icons/bangkok-classifieds.jpg"}
              alt={"BKK classifieds Logo"}
              className={"rounded-full object-cover h-full"} />} />
        {/* Farang Girls in Bangkok */}
        <ResourcesCards
          name={"Farang Girls in Bangkok"}
          type={"Group"}
          description={`An all-female expat group for connecting with other like-minded women who are navigating the expat experience in Bangkok. 
          It provides a supportive community where members can share their experiences, seek advice, and engage in discussions related to various aspects of life in Bangkok such as housing, safety, healthcare, social activities, local services, and more. 
          Also facilitates the organization of social events, meetups, and activities specifically catered to female expats in Bangkok.
          It offers an opportunity to build friendships, expand social networks, and engage in shared interests and hobbies.`}
          href={"https://www.facebook.com/groups/fgibkk"}
          icon={
            <img
              src={"/img/resources/icons/farang-girls-bkk.jpg"}
              alt={"Group Logo"}
              className={"w-14 h-14 rounded-full"} />} />
      </ul>
    </>
  )
}