import DiningCard from "@/components/Layout/DiningLayout/DiningCard";

export default function BrunchCards() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* Tobys */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/tobys.jpg"}
        name={"Tobys on Sukhumvit 38"}
        station={"BTS Station: Thong Lor"}
          description={`"Toby's on Sukhumvit 38" is a popular restaurant located in the heart of Bangkok, Thailand. 
        The restaurant was founded by a British expat named Toby in 2011, with the aim of creating a cozy and welcoming space for food lovers.
        Specialties at Toby's include a wide range of delicious Western dishes, including breakfast classics, sandwiches, salads, and hearty mains. 
        The menu features high-quality ingredients sourced locally and internationally, ensuring a consistently delicious dining experience.        
        Dining at Toby's is a unique and enjoyable experience that shouldn't be missed for anyone who loves Western-style cuisine. 
        The restaurant's cozy and laid-back atmosphere, featuring a welcoming and friendly vibe, creates a comfortable and relaxed ambiance. The staff are knowledgeable and attentive, providing helpful recommendations and ensuring a memorable dining experience.        
        Overall, Toby's on Sukhumvit 38 is a must-visit restaurant for anyone looking to enjoy delicious Western-style cuisine in Bangkok. With its diverse and flavorful menu, cozy atmosphere, and friendly service, Toby's is a restaurant that promises to deliver an unforgettable dining experience.`}
        href={"https://goo.gl/maps/xQ5haWLsheGH71RRA"} />
       {/* Luka */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/luka.jpg"}
        name={"Luka"}
        station={"BTS Station: Chong Nonsi / Sala Daeng"}
        description={`"Luka" is a trendy restaurant located in the heart of Bangkok, Thailand. The restaurant was founded in 2017 by a group of friends with a passion for healthy, wholesome food.
        Specialties at Luka include a wide range of delicious Western-style dishes, with a focus on fresh, natural ingredients and healthy cooking techniques. The menu features classic breakfast dishes, sandwiches, salads, and hearty mains, as well as a variety of vegan and vegetarian options.       
        Dining at Luka is a unique and enjoyable experience that shouldn't be missed for anyone who loves healthy and delicious cuisine. The restaurant's trendy and modern atmosphere, featuring a stylish and Instagram-friendly decor, creates a lively and upbeat ambiance. The staff are friendly and attentive, providing helpful recommendations and ensuring a memorable dining experience.       
        Overall, Luka is a must-visit restaurant for anyone looking to enjoy healthy and delicious Western-style cuisine in Bangkok. With its diverse and flavorful menu, trendy atmosphere, and friendly service, Luka is a restaurant that promises to deliver an unforgettable dining experience.`}
        href={"https://goo.gl/maps/XzEqeQ38Fv2MVv7GA"} />
        {/* Rocket CoffeeBar */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/rocket.jpg"}
        name={"Rocket CoffeeBar"}
        station={"BTS Station: Chong Nonsi / Saint Louis"}
        description={`"Rocket CoffeeBar" is a popular café and restaurant located in the heart of Bangkok, Thailand. The restaurant was founded in 2013 by a group of friends with a passion for specialty coffee and delicious food.
        Specialties at Rocket CoffeeBar include a wide range of Western-style breakfast and lunch dishes, as well as specialty coffee drinks made with high-quality beans sourced from around the world. The menu features classic breakfast dishes, sandwiches, salads, and hearty mains, as well as a variety of vegetarian and gluten-free options.        
        Dining at Rocket CoffeeBar is a unique and enjoyable experience that shouldn't be missed for anyone who loves coffee and delicious food. The restaurant's chic and modern atmosphere, featuring a stylish and sophisticated decor, creates a comfortable and relaxed ambiance. The staff are knowledgeable and attentive, providing helpful recommendations and ensuring a memorable dining experience.        
        Overall, Rocket CoffeeBar is a must-visit restaurant for anyone looking to enjoy specialty coffee and delicious Western-style cuisine in Bangkok. With its diverse and flavorful menu, trendy atmosphere, and friendly service, Rocket CoffeeBar is a restaurant that promises to deliver an unforgettable dining experience.`}
        href={"https://goo.gl/maps/Z4Vk9fnMPVjTk1EdA"} />
        {/* Bartels */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/bartels.jpg"}
        name={"Bartels"}
        station={"BTS Station: Thong Lor / Phrom Pong"}
        description={`"Bartels Sukhumvit" is a trendy restaurant and bar located in the bustling neighborhood of Sukhumvit in Bangkok, Thailand. The restaurant was founded in 2019 by a group of Dutch friends who wanted to bring their love of European cuisine to Thailand.
        Specialties at Bartels Sukhumvit include a wide range of European-style dishes, with a focus on classic Dutch and Belgian cuisine. The menu features a variety of delicious mains such as steak, ribs, and roasted chicken, as well as smaller plates and snacks perfect for sharing. The bar also serves a selection of craft beers, wines, and cocktails to pair with your meal.        
        Dining at Bartels Sukhumvit is a unique and enjoyable experience that shouldn't be missed for anyone who loves European-style cuisine and drinks. The restaurant's chic and modern atmosphere, featuring a stylish and sophisticated decor, creates a comfortable and relaxed ambiance. The staff are knowledgeable and attentive, providing helpful recommendations and ensuring a memorable dining experience.       
        Overall, Bartels Sukhumvit is a must-visit restaurant for anyone looking to enjoy delicious European-style cuisine and drinks in Bangkok. With its authentic and flavorful menu, trendy atmosphere, and friendly service, Bartels Sukhumvit is a restaurant that promises to deliver an unforgettable dining experience.`}
        href={"https://goo.gl/maps/yErMJ33PA2JnD7gn8"} />
        {/* Yellow Lane Cafe */}
       <DiningCard
        picture={"/img/explore/dining/brunch/icons/yellowlane.jpg"}
        name={"Yellow Lane Cafe"}
        station={"BTS Station: Ari"}
        description={`"Yellow Lane Cafe" is a cozy and trendy cafe located in the Ari neighborhood of Bangkok, Thailand. The cafe was founded in 2015 by a group of friends who shared a passion for good food and coffee.
        Specialties at Yellow Lane Cafe include a wide range of delicious coffee drinks, with a focus on specialty brews such as pour-over, cold brew, and espresso-based drinks. The cafe also offers a variety of breakfast and brunch dishes, as well as sandwiches and salads for lunch.        
        Dining at Yellow Lane Cafe is an enjoyable experience that shouldn't be missed for anyone who loves coffee and delicious food. The cafe's warm and inviting atmosphere, featuring a stylish decor and comfortable seating, creates a comfortable and relaxed ambiance. The staff are knowledgeable and attentive, providing helpful recommendations and ensuring a memorable dining experience.        
        Overall, Yellow Lane Cafe is a must-visit spot for anyone looking to enjoy delicious coffee and food in a cozy and trendy setting. With its authentic and flavorful menu, welcoming atmosphere, and friendly service, Yellow Lane Cafe is a cafe that promises to deliver an unforgettable dining experience.`}
        href={"https://goo.gl/maps/zYiuYNi42oQMWkmo7"} />
      </ul>
  </>
  )
}