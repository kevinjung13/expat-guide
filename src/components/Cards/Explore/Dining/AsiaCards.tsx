import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function AsiaCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        {/* Liaoning Chinese Cuisine */}
        <ExploreCard
          picture={"/img/explore/dining/asia/icon/liaoning.jpg"}
          name={"Liaoning Chinese Cuisine"}
          title={"BTS Station: Chong Nonsi"}
          buttonText={"Location"}
          description={`One of the oldest Chinese restaurants in the city, and perfect for anyone seeking an authentic Northeast Chinese dining experience from the Liaoning province.
          Signature dishes include  stir-fried lamb with cumin, sautéed diced chicken with chili and peanuts, and braised eggplant with garlic sauce.
          Perfect for lunch with friends or family.`}
          href={"https://goo.gl/maps/fNEXjtWwfezZHEhS7"} />
        {/* Mensho Tokyo */}
        <ExploreCard
          picture={"/img/explore/dining/asia/icon/mensho.jpg"}
          name={"Mensho Tokyo"}
          title={"BTS Station: Phrom Pong"}
          buttonText={"Location"}
          description={`Firsrt founded in Tokyo, Mensho Tokyo is a favorite among locals and tourists for its authentic Japanese ramen. 
          Specialities include a variety of ramen dishes, with tender slices of chashu pork, bamboo shoots, and green onions.
          All chefs are trained in Japan and the ramen noodles are cooked to perfection, with just the right amount of chewiness and texture.`}
          href={"https://goo.gl/maps/QjhP5PhocCYrcMW9A"} />
        {/* Masu Maki Sushi & Bar */}
        <ExploreCard
          picture={"/img/explore/dining/asia/icon/masu.jpg"}
          name={"Masu Maki Sushi & Bar"}
          title={"BTS Station: Phrom Pong"}
          buttonText={"Location"}
          description={`Contemporary Japanese restaurant known for its innovative sushi creations and incorporation of modern twists on traditional Japanese sushi.
          For me, the best sushi place in town. A must-visit for sushi lovers and anyone seeking high-quality Japanese sushi in Bangkok.
          Perfect for a meal with a group of friends or your family.`}
          href={"https://goo.gl/maps/mh1k9mZwWkBuFvV3A"} />
        {/* Korean Plaza */}
        <ExploreCard
          picture={"/img/explore/dining/asia/icon/korean.jpg"}
          name={"Korean Plaza (Sukhumvit Plaza)"}
          title={"BTS Station: Nana"}
          buttonText={"Location"}
          description={`A popular location for Korean food lovers and a hub for Korean culture in the city, 
          with a range of korean restaurants, shops and grocery stores catering to the Korean community and beyond.
          Also hosts regular events and festivals such as the Korean Food Festival and Korean Pop Culture Festival.
          Recommended for those who love Korean food.`}
          href={"https://goo.gl/maps/tiHNGTRWmKx99saH8"} />
        {/* Haoma */}
        <ExploreCard
          picture={"/img/explore/dining/asia/icon/haoma.jpg"}
          name={"Haoma ⭐"}
          title={"BTS Station: Asoke / MRT Station: Sukhumvit"}
          buttonText={"Location"}
          description={`A true farm-to-table Indian-Thai fusion dining using organic produce grown in the restaurant's rooftop garden and hydroponic farm. 
          Led by 1 michelin star Chef Deepanker Khosla, some of the restaurant's specialties include the "Garden of Babylon", and the "Jackfruit Tacos".
          Recommended for fancy dinners with friends or your loved one.`}
          href={"https://goo.gl/maps/bjNEUeHewqddyxpcA"} />
        {/* Teppen */}
        <ExploreCard
          picture={"/img/explore/dining/asia/icon/teppen.jpg"}
          name={"Teppen"}
          title={"BTS Station: Chong Nonsi"}
          buttonText={"Location"}
          description={`Authentic teppanyaki dining experience. 
          Predominantly serves fresh seafood and high-grade meats, all cooked in front of diners on a teppan grill.
          Signature dishes include Wagyu beef, lobster, and sushi.
          A cozy and intimate atmosphere. Perfect place to enjoy food and drinks on a night out. Another venue I recommend is Daimasu.`}
          href={"https://goo.gl/maps/kVgGTGuuwwHsPZM18"} />
      </ul>
    </>
  )
}
