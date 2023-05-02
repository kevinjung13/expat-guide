/* === 1. NAVBAR === */

// 1.1 Explore

export const ExploreOptions = [
  {
  title: "Dining",
  href: "/explore/dining"
}, {
  title: "Activities",
  href: "/explore/activities"
}, {
  title: "Attractions",
  href: "/explore/attractions"
}, {
  title: "Nightlife",
  href: "/explore/nightlife"
}, {
  title: "Nearby Destinations",
  href: "/explore/nearby-destinations"
}, {
  title: "Shopping",
  href: "/explore/shopping"
  }
]

  // 1.2 Neighbourhood

export const NeighbourhoodOptions = [
  {
      title: "Sukhumvit",
      href: "/neighbourhoods/sukhumvit",
    }, {
      title: "Sathorn/Silom",
      href: "/neighbourhoods/sathorn"
    }, {
      title: "Ari/North Bangkok",
      href: "/neighbourhoods/ari"
    }, {
      title: "Rama IX/Ratchada",
      href: "/neighbourhoods/rama9"
  }
]

  // 1.3 Resources

export const ResourcesOptions = [
  {
    title: "News",
    href: "/resources/#news",
  },
  {
    title: "Facebook Groups",
    href: "/resources/#facebook-groups"
  },
  {
    title: "Food Delivery",
    href: "/resources/#food-delivery"
  },
  {
    title: "Plant-Based",
    href: "/resources/#plant-based"
  },

  {
    title: "Transportation",
    href: "/resources/#transportation"
  },
  {
    title: "Others",
    href: "/resources/#others"
    }
  ]

  // 1.4 Main Options 
export const navigation = [
  {
    title: "About",
    href: "/about",
    dropDown: false,
  },

  {
    title: "Explore",
    href: "/explore",
    dropDown: true,
    items: ExploreOptions
  },

  {
    title: "Neighbourhoods",
    href: "/neighbourhoods",
    dropDown: true,
    items: NeighbourhoodOptions
  },

  {
    title: "Resources",
    href: "/resources",
    dropDown: true,
    items: ResourcesOptions
  }
]

/* === 2. HOME === */

// 2.1 Explore Cards

export const ExploreCards = [
  {
      title: "Dining",
      desc: "Eat and drink at my favorite locations, from street food stalls to michelin-guided establishments.",
      img: "/img/card/food-img.jpg",
      href: "/explore/dining"
  },
  {
      title: "Activities",
      desc: "Get back into your routine, meet fellow expats, stay physically active, and find new hobbies.",
      img: "/img/card/activity-img.jpg",
      href: "/explore/activities"
  },
  {
      title: "Attractions",
      desc: "Immerse yourself in the local culture, learn about the history of Bangkok and its surroundings, increase awareness on social ettiquettes.",
      img: "/img/card/attraction-img.jpg",
      href: "explore/attractions"
  },
  {
      title: "Nightlife",
      desc: "Enjoy the panoramic Bangkok skyline, discover hidden bars, and dance the night away.",
      img: "/img/card/nightlife-img.jpg",
      href: "explore/nightlife"
  },
  {
      title: "Nearby Destinations",
      desc: "Explore destinations only hours away from the city, ranging from national parks to UNESCO World Heritage Sites. Perfect for day trips or weekends.",
      img: "/img/card/nearby-img.jpg",
      href: "explore/nearby-destinations"
  },
  {
      title: "Shopping",
      desc: "Explore destinations only hours away from the city, ranging from national parks to UNESCO World Heritage Sites. Perfect for day trips or weekends.",
      img: "/img/card/shopping-img.jpg",
      href: "explore/shopping"
  },
]

 // 2.2 Resources Cards
export const resourcesCards = [
  {
    title: "News",
    desc: "Stay up to date on what is happening in Thailand and around the region.",
    href: "/resources/#news",
  },
  {
    title: "Facebook Groups",
    desc: "According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film",
    href: "/resources/#facebook-groups",
  },
  {
    title: "Food Delivery",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    href: "/resources/#plant-based",
  },
  {
    title: "Plant-Based",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    href: "/resources/#plant-based",
  },
  {
    title: "Transportation",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    href: "/resources/#plant-based",
  },
  {
    title: "Others",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the",
    href: "/resources/#others",
  },
];

/* === 3. EXPLORE === */

/* 3.1 Dining */

  // A. Local Flavors

export const localFlavors = [
  {
    avatar: "/img/explore/dining/local/icons/chinatown.jpg", 
    name: "Chinatown",
    title: "MRT Station: Hua Lamphong / Wat Mangkon",
    quote: "Yaowarat Road is the main road and has plenty of street food stalls and restaurants",
    href: "",
  },
  {
      avatar: "/img/explore/dining/local/icons/polo.jpg",
      name: "Polo Fried Chicken",
      title: "MRT Station: Lumphini",
    quote: "-",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/panich.jpg",
    name: "Wattana Panich",
    title: "BTS Station: Ekkamai",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/sabaijai.jpg",
    name: "Sabaijai",
    title: "BTS Station: Ekkamai",
    quote: "Beef Broth Noodles",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/saengchai.jpg",
    name: "Saengchai Phochana",
    title: "BTS Station: Thong Lor / Phrom Pong",
    quote: "Beef Broth Noodles",
    href: "",
},
  {
    avatar: "/img/explore/dining/local/icons/jayfai.jpg",
    name: "Jay Fai",
    title: "MRT Station: Sam Yot",
    quote: "-",
    href: "",
},
  {
      avatar: "/img/explore/dining/local/icons/tersabwoey.jpg",
      name: "Ter Sab Woey",
      title: "BTS Station: Chong Nonsi",
      quote: "-",
      href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/laabubon.jpg",
    name: "Laab Ubon",
    title: "BTS Station: Surasak",
    quote: "-",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/moo.jpg",
    name: "Moohun Song Phi Nong",
    title: "BTS Station: Chong Nonsi",
    quote: "-",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/baannual.jpg", 
    name: "Baan Nual",
    title: "MRT Station: Sam Yot",
    quote: "-",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/haawm.jpg", 
    name: "HAAWM",
    title: "BTS Station: On Nut",
    quote: "-",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/.jpg", 
    name: "Charm Eatery and Bar",
    title: "BTS Station: Chong Nonsi / Saint Louis",
    quote: "-",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/.jpg",
    name: "Lon Lon Diner",
    title: "BTS Station: Chong Nonsi",
    quote: "-",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/.jpg",
    name: "Supanniga Eating Room",
    title: "BTS Station: Chong Nonsi",
    quote: "",
    href: "",
  },
  {
    avatar: "/img/explore/dining/local/icons/.jpg",
    name: "Rongros",
    title: "BTS Station: Chong Nonsi",
    quote: "-",
    href: "",
},
]

  // B. Asia

export const asia = [
  {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Liaoning Chinese Cuisine ",
      title: "BTS Station: Chong Nonsi",
      quote: "",
      href: "",
  },
  {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Mensho Tokyo",
      title: "BTS Station: Phrom Pong",
    quote: "-",
    href: "",
  },
  {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Masu Maki Sushi & Bar",
      title: "BTS Station: Phrom Pong",
    quote: "-",
      href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Bangkok Banjom",
    title: "BTS Station: Ekkamai",
    quote: "-",
    href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Korean Plaza",
    title: "BTS Station: Nana",
    quote: "-",
    href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Haoma",
    title: "BTS Station: Asoke / MRT Station: Sukhumvit",
    quote: "-",
    href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Teppen",
    title: "BTS Station: Asoke / MRT Station: Sukhumvit",
    quote: "",
    href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Daimasu",
    title: "BTS Station: Asoke / MRT Station: Sukhumvit",
    quote: "-",
    href: "",
},
]

  // C. Europe

  export const europe = [
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Bardo Social Bar & Bistro",
        title: "BTS Station: Saint Louis / Chong Nonsi",
      quote: "-",
      href: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Peppina",
        title: "BTS Station: Phrom Pong",
        quote: "-",
        href: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "El Mercado",
        title: "BTS Station: Phrom Pong",
        quote: "-",
        href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Le Buchon",
      title: "BTS Station: Nana",
      quote: "-",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "El Tapeo",
      title: "BTS Station: Asoke / MRT Station: Sukhumvit",
      quote: "-",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Mediterra",
      title: "BTS Station: Asoke / MRT Station: Sukhumvit",
      quote: "",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Belga Rooftop Bar and Brasserie",
      title: "BTS Station: Asoke / MRT Station: Sukhumvit",
      quote: "-",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Cantina Wine Bar and Italian Kitchen",
      title: "BTS Station: Asoke / MRT Station: Sukhumvit",
      quote: "-",
      href: "",
    },
 ]

    // D. The Americas

  export const theAmericas = [
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Ojo",
        title: "BTS Station: Saint Louis / Chong Nonsi",
        quote: "-",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "The Missing Burro",
      title: "BTS Station: Asoke / MRT Station: Sukhumvit",
      quote: "-",
      href: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "La Monita Taqueria",
        title: "BTS Station: Phrom Pong",
        quote: "-",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Sabor Brasil",
      title: "BTS Station: Ekkamai",
      quote: "-",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "El Gaucho",
      title: "BTS Station: Nana",
      quote: "-",
      href: "",
    },
  ]
    
    // E. Middle East & Africa

  export const middleEastAndAfrica = [
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Taye",
        title: "BTS Station: Saint Louis / Chong Nonsi",
        quote: "-",
      href: "",
    },
     {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Mama Dolores",
      title: "BTS Station: Ekkamai",
      quote: "-",
      href: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Beirut Restaurant",
        title: "BTS Station: Phrom Pong",
        quote: "-",
      href: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Nadimos",
        title: "BTS Station: Phrom Pong",
        quote: "-",
      href: "",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Al Saray",
      title: "BTS Station: Ekkamai",
      quote: "-",
      href: "",
    },
  ]

  // F. Brunch 

export const brunch = [
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Tobys",
    title: "BTS Station: Asoke / MRT Station: Sukhumvit",
    quote: "-",
      href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Luka",
    title: "BTS Station: Asoke / MRT Station: Sukhumvit",
    quote: "-",
      href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Rocket CoffeeBar",
    title: "BTS Station: Asoke / MRT Station: Sukhumvit",
    quote: "-",
      href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Bartels",
    title: "BTS Station: Ekkamai",
    quote: "-",
      href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Bartels",
    title: "BTS Station: Ekkamai",
    quote: "-",
      href: "",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Yellow Lane Cafe",
    title: "BTS Station: Ekkamai",
    quote: "-",
      href: "",
  },
]
    

/* === 4. NEIGHBOURHOODS === */

// 4.1 Neighbourhood Cards


/* 5. === RESOURCES === */



// 5.2 Facebook Groups Section


// 5.3 Food Delivery Section

export const FoodDelivery = [

  {
    company_name: "Food Panda",
  job_title: "Food Panda",
  job_description:
    "Food Panda",
  path: "https://www.foodpanda.co.th/?gclid=CjwKCAjwxr2iBhBJEiwAdXECwymjhHt0W-igqPIy1i9YQE_0rp4JvCU6FQVz--HRCu-rZZbBllM9FBoCIasQAvD_BwE",
    icon: (
      <img
      src={"/img/resources/icons/food-panda.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Grab Food",
    job_title: "Grab Food",
    job_description:
      "Grab Food ",
    path: "https://food.grab.com/th/en/",
    icon: (
      <img
      src={"/img/resources/icons/grab-food.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "LINE Man",
    job_title: "LINE Man",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://lineman.line.me/",
    icon: (
      <img
      src={"/img/resources/icons/lineman.png"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
];

// 5.4 Plant-Based Section

export const PlantBased = [
  {
    
    company_name: "Root The Future",
    job_title: "Plant Based Related News",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    path: "https://rootthefuture.com/",
    icon: (
      <img
        src={"/img/resources/icons/root-the-future.jpg"}
        alt={"RTF Logo"}
        className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Vegan Monkey",
    job_title: "Food Platform",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://veganmonkey.co/",
    icon: (
      <img
      src={"/img/resources/icons/vegan-monkey.png"}
      alt={"Vegan Monkey Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    
    company_name: "Happy Cow",
    job_title: "Restaurant Finder and Blog",
    job_description:
      "A great platform to find Vegan and Vegetarian restaurants near you.",
    path: "https://www.happycow.net/",
    icon: (
      <img
      src={"/img/resources/icons/happy-cow.png"}
      alt={"Vegan Monkey Logo"}
      className={"w-8 h-8"} />
    ),
  },
];

// 5.5 Transportation Section

export const Transportation = [
  {
    company_name: "Grab",
    job_title: "Grab",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://www.grab.com/",
    icon: (
      <img
      src={"/img/resources/icons/grab.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Bolt",
    job_title: "Bolt",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://bolt.eu/en-th/",
    icon: (
      <img
      src={"/img/resources/icons/bolt.png"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "BTS",
  job_title: "Bangkok Skytrain System",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://www.bts.co.th/eng/",
    icon: (
      <img
      src={"/img/resources/icons/bts.png"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
    
  },
  {
    company_name: "MRT",
  job_title: "Metropolitan Rapid Transit (Metro)",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  path: "https://metro.bemplc.co.th/MRT-System-Map?lang=en",
    icon: (
      <img
      src={"/img/resources/icons/mrt.png"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Taxi Meter",
    job_title: "Taxi Meter",
    job_description:
      "Taxi Meter ",
    path: "https://thaiest.com/thailand/bangkok/taxi",
    icon: (
      <img
      src={"/img/resources/icons/taxi-meter.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },

  {
    company_name: `"Win" Motorcycle Taxi`,
    job_title: "Motorcycle Taxi",
    job_description:
      `Known as "The Orange Jackets", `,
    path: "https://touristbangkok.com/city-transport/motorcycle-taxi/",
    icon: (
      <img
      src={"/img/resources/icons/motorcycle-taxi.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
];


// 5.6 Others Section

export const Others = [
  {
    company_name: "Mobile Phone",
    job_title: "Packages",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://www.tourismthailand.org/Articles/plan-your-trip-mobile-phone-and-internet",
    icon: (
      <img
      src={"/img/resources/icons/phone.jpg"}
      alt={"Group Logo"}
      className={"w-4 h-6"} />
    ),
  },
  {
    company_name: "Internet",
  job_title: "Home Internet",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://www.tourismthailand.org/Articles/plan-your-trip-mobile-phone-and-internet",
    icon: (
      <img
      src={"/img/resources/icons/internet.png"}
      alt={"Group Logo"}
      className={"w-9 h-8"} />
    ),
    
  },
  {
    company_name: "Airline Platforms",
  job_title: "For flights within the region",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  path: "https://www.skyscanner.net/",
    icon: (
      <img
      src={"/img/resources/icons/plane.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
];


/* 6. === FOOTER === */

// 6.1 Menu Options

export const footerNavs = [
  {
      href: '/about',
      name: 'About'
  },
  {
      href: '/explore',
      name: 'Explore'
  },
  {
      href: '/neighbourhoods',
      name: 'Neighbourhoods'
  },
  {
      href: '/resources',
      name: 'Resources'
  },

  {
      href: 'mailto:kevinjung13@gmail.com',
      name: 'Contact'
  }
]