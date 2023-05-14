import ExploreCard from "@/components/Layout/ExploreLayout/ExploreCard";

export default function BrunchCards() {
  return (
    <>
      <ul className={"grid gap-8 sm:grid-cols-2 md:grid-cols-3"}>
        {/* Tobys */}
        <ExploreCard
          picture={"/img/explore/dining/brunch/icons/tobys.jpg"}
          name={"Toby's"}
          title={"BTS Station: Thong Lor / Sala Daeng"}
          buttonText={"Toby's"}
          description={`Toby's is a popular cafe with 2 locations: Thong Lor and Sala Daeng. 
          Founded by a British expat named Toby in 2011, the aim was to create a cozy and welcoming space for food lovers.
          Toby's has a wide range of Western dishes, including breakfast classics, sandwiches, salads, and hearty mains.        
          The restaurant's cozy and laid-back atmosphere, creates a comfortable and relaxed ambiance for a nice brunch with friends or family.`}
          href={"https://goo.gl/maps/xQ5haWLsheGH71RRA"} />
        {/* Luka */}
        <ExploreCard
          picture={"/img/explore/dining/brunch/icons/luka.jpg"}
          name={"Luka"}
          title={"BTS Station: Saint Louis / Chitlom"}
          buttonText={"Luka"}
          description={`Luka is an extremely popular restaurant among expats, with 2 branches (Luka and Siri House). 
          Luka has a wide range of delicious Western-style dishes, with a focus on fresh, natural ingredients and healthy cooking techniques. 
          The menu features classic breakfast dishes, sandwiches, salads, and hearty mains, as well as a variety of vegan and vegetarian options.       
          Great place for brunch and for remote workers to work and grab a bite.`}
          href={"https://goo.gl/maps/XzEqeQ38Fv2MVv7GA"} />
        {/* Rocket CoffeeBar */}
        <ExploreCard
          picture={"/img/explore/dining/brunch/icons/rocket.jpg"}
          name={"Rocket CoffeeBar"}
          title={"BTS Station: Chong Nonsi / Saint Louis"}
          buttonText={"Rocket CoffeeBar"}
          description={`A small café and restaurant. 
          Specialties at Rocket CoffeeBar include a wide range of Western-style breakfast and lunch dishes, as well as specialty coffee drinks made with high-quality beans sourced from around the world. 
          They also have a good variety of vegetarian and gluten-free options.        
          Best to go before lunch time as the venue is small and get busy.`}
          href={"https://goo.gl/maps/Z4Vk9fnMPVjTk1EdA"} />
        {/* Bartels */}
        <ExploreCard
          picture={"/img/explore/dining/brunch/icons/bartels.jpg"}
          name={"Bartels"}
          title={"BTS Station: Thong Lor / Phrom Pong"}
          buttonText={"Bartels"}
          description={`With 2 branches in the city, Bartels is a fantastic place for breakfast or brunch. 
          Sandwitches and fresh juices are their speciality.     
          It is also a perfect venue for remote workers to work and eat.`}
          href={"https://goo.gl/maps/yErMJ33PA2JnD7gn8"} />
        {/* Yellow Lane Cafe */}
        <ExploreCard
          picture={"/img/explore/dining/brunch/icons/yellowlane.jpg"}
          name={"Yellow Lane Cafe"}
          title={"BTS Station: Ari"}
          buttonText={"Yellow Lane Cafe"}
          description={`Yellow Lane Cafe is a cozy and trendy cafe located in Ari.
          Yellow Lane offers a wide range of delicious coffee drinks, with a focus on specialty brews such as pour-over, cold brew, and espresso-based drinks. 
          In addition, they also offer a variety of breakfast and brunch dishes, as well as sandwiches and salads for lunch.        
          Highly recommended for brunch with friends on a nice sunny day.`}
          href={"https://goo.gl/maps/zYiuYNi42oQMWkmo7"} />
        {/* Café Tartine */}
        <ExploreCard
          picture={"/img/explore/dining/brunch/icons/cafetartine.jpg"}
          name={"Café Tartine"}
          title={"BTS Station: Phloen Chit"}
          buttonText={"Café Tartine"}
          description={`French style café and bistro, known for its breakfast items like croissants, quiches, and omelets, as well as tasty sandwiches and salads.
          The restaurant offers a cozy and relaxed atmosphere, complete with Parisian-style decor and outdoor seating.
          Recommended for those craving French food.`}
          href={"https://goo.gl/maps/Ne2C1TpwQuZ9cFwb6"} />
      </ul>
    </>
  )
}