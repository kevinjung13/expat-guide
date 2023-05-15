import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function OthersCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        { /* Cooking Class */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/cooking.jpg"}
          name={"Cooking Class"}
          title={"Indoor"}
          buttonText={"Bangkok Thai Cooking Academy"}
          description={`Do you enjoy cooking? Learn how to cook Thai dishes at Bangkok Thai Cooking Academy.
          The class starts by heading to the market with the chef and learning how prepare a set of dishes from A to Z.
          At the end, you get to enjoy what you cooked.`}
          href={"https://bangkokthaicookingacademy.com/"} />
          { /* Book Stores */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/bookstore.jpg"}
          name={"Book Stores"}
          title={"Indoor"}
          buttonText={"Dasa Book Cafe"}
          description={`While Bangkok has numerous book stores in its malls (Ex: Kinokuniya), there are also many hidden or secondhand shops around the city.
          Dasa Book Cafe has been my favorite place to buy secondhand books, with books available in multiple languages.`}
          href={"https://www.dasabookcafe.com/"} />
        { /* Bowling */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/bowling.jpg"}
          name={"Bowling"}
          title={"Indoor"}
          buttonText={"Blu-O"}
          description={`One of the most popular activities among expats on a weekend during the day. 
          Blu-O is a chain of bowling alleys located in many different malls in the city and also quite popular among the locals.
          Great place to have a few drinks and have a fun afternoon.`}
          href={"https://www.bluofriends.com/en/"} />
          { /* Paintball */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/paintball.jpg"}
          name={"Paintball"}
          title={"Outdoor"}
          buttonText={"Combat Zone Seacon"}
          description={`Paintball is a great activity to test your shooting skills and build teamwork.
          It has also been a great activity for me to meet new people and get to know people better.
          Recommended for large groups.`}
          href={"https://goo.gl/maps/3PuffT5iSeqWmecZ6"} />
        { /* Archery */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/archery.jpg"}
          name={"Archery"}
          title={"Outdoor"}
          buttonText={"Archery Thai"}
          description={`Something quite unique that I have not done since I was a kid. 
          While I was in Bangkok, Archery Thai was my place to go to shoot some arrows for a very affordable price.
          Great place to go with friends.`}
          href={"https://archerythai.myshopify.com/en"} />
        { /* Shooting */}
        <ExploreCard
          picture={"/img/explore/activities/others/icons/shooting.jpg"}
          name={"Shooting"}
          title={"Outdoor"}
          buttonText={"Ratchanawi Bang Na Shooting Range"}
          description={`During my time in the military, I enjoyed shooting very much as it served as a stress releasing activity.
          Ratchanawi Bang Na Shooting Range was a great place that reminded me how much I missed it.`}
          href={"https://goo.gl/maps/ykaCRQ3bQLfs3HK17"} />
      </ul>
    </>
  )
}