import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function BrunchCards() {
  return (
    <>
      <ul className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
       {/* Tobys */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/tobys.jpg"}
        name={"Tobys on Sukhumvit 38"}
        station={"BTS Station: Thong Lor"}
        description={`Toby's is a popular cafe located in Thong Lor. 
        Founded by a British expat named Toby in 2011, the aim was to create a cozy and welcoming space for food lovers.
        Toby's has a wide range of Western dishes, including breakfast classics, sandwiches, salads, and hearty mains.        
        The restaurant's cozy and laid-back atmosphere, creates a comfortable and relaxed ambiance for a nice brunch with friends or family.`}
        href={"https://goo.gl/maps/xQ5haWLsheGH71RRA"} />
       {/* Luka */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/luka.jpg"}
        name={"Luka"}
        station={"BTS Station: Chong Nonsi / Sala Daeng"}
        description={`Luka is an extremely popular restaurant among expats. 
        Luka also has a wide range of delicious Western-style dishes, with a focus on fresh, natural ingredients and healthy cooking techniques. 
        The menu features classic breakfast dishes, sandwiches, salads, and hearty mains, as well as a variety of vegan and vegetarian options.       
        Great place for brunch and for remote workers to work and grab a bite.`}
        href={"https://goo.gl/maps/XzEqeQ38Fv2MVv7GA"} />
        {/* Rocket CoffeeBar */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/rocket.jpg"}
        name={"Rocket CoffeeBar"}
        station={"BTS Station: Chong Nonsi / Saint Louis"}
        description={`Rocket CoffeeBar is a small café and restaurant. 
        Specialties at Rocket CoffeeBar include a wide range of Western-style breakfast and lunch dishes, as well as specialty coffee drinks made with high-quality beans sourced from around the world. 
        They also have a good variety of vegetarian and gluten-free options.        
        Best to go before lunch time as the venue is small and get busy.`}
        href={"https://goo.gl/maps/Z4Vk9fnMPVjTk1EdA"} />
        {/* Bartels */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/bartels.jpg"}
        name={"Bartels"}
        station={"BTS Station: Thong Lor / Phrom Pong"}
        description={`With 2 branches in the city, Bartels is a fantastic place for breakfast or brunch. 
        Sandwitches and fresh juices are their speciality.     
        It is also a perfect venue for remote workers to work and eat.`}
        href={"https://goo.gl/maps/yErMJ33PA2JnD7gn8"} />
        {/* Yellow Lane Cafe */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/yellowlane.jpg"}
        name={"Yellow Lane Cafe"}
        station={"BTS Station: Ari"}
        description={`Yellow Lane Cafe is a cozy and trendy cafe located in Ari.
        Yellow Lane offers a wide range of delicious coffee drinks, with a focus on specialty brews such as pour-over, cold brew, and espresso-based drinks. 
        In addition, they also offer a variety of breakfast and brunch dishes, as well as sandwiches and salads for lunch.        
        Highly recommended for brunch with friends on a nice sunny day.`}
        href={"https://goo.gl/maps/zYiuYNi42oQMWkmo7"} />
      </ul>
  </>
  )
}