/* === 1. NAVBAR === */

// 1.1 Explore

export const ExploreOptions = [{
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
  }]

  // 1.2 Neighbourhood

export const NeighbourhoodOptions = [{
      title: "Sukhumvit",
      href: "/neighbourhoods",
    }, {
      title: "Sathorn/Silom",
      href: "/neighbourhoods"
    }, {
      title: "Ari/North Bangkok",
      href: "/neighbourhoods"
    }, {
      title: "Rama IX/Ratchada",
      href: "/neighbourhoods"
  }]

  // 1.3 Resources

  export const ResourcesOptions = [{
    title: "News",
    href: "/resources",
  }, {
    title: "Social Media Groups",
    href: "/resources"
  }, {
    title: "Plant-Based",
    href: "/resources"
  }, {
    title: "Others",
    href: "/resources"
  }]

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
    title: "Plant-Based",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    href: "/resources/#plant-based",
  },
  {
    title: "Others",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the",
    href: "/resources/#others",
  },
];

/* 3. === NEIGHBOURHOODS === */

// 3.1 Neighbourhood Cards

export const neighbourhoodsCards = [
  {
    title: "Sukhumvit",
    desc: "Ut enim ad minim veniam",
    img: "/img/neighbourhoods/sukhumvit-img.jpg",
    href: "/neighbourhoods/sukhumvit"
  },
  {
    title: "Sathorn / Silom",
    desc: "Ut enim ad minim veniam",
    img: "/img/neighbourhoods/sathorn-img.jpg",
    href: "/neighbourhoods/sathorn"
  },
  {
    title: "Ari / North Bangkok",
    desc: "Ut enim ad minim veniam",
    img: "/img/neighbourhoods/ari-img.png",
    href: "/neighbourhoods/ari"
  },
  {
    title: "Rama IX / Ratchadaphisek",
    desc: "Ut enim ad minim veniam",
    img: "/img/neighbourhoods/rama-ix-img.jpg",
    href: "/neighbourhoods/rama9"
  },
];


/* 4. === RESOURCES === */

// 4.1 News Section

export const News = [
  {
    company_name: "Bangkok Post",
    job_title: "News Outlet",
    job_description:
      "Bangkok Post is one of the main Newspapers in Thailand.",
    path: "https://www.bangkokpost.com/",
    icon:
      (
      <img
        src={"/img/resources/icons/bangkok-post.jpg"}
        alt={"Bangkok Postlogo"}
          className={"w-8 h-8"} />
      )
  },
    
  {
    company_name: "The Thaiger",
    job_title: "News Outlet",
    job_description:
      "Known as ",
    path: "https://thethaiger.com/",
    icon: (
      <img
        src={"/img/resources/icons/thaiger.png"}
        alt={"Thaiger logo"}
        className={"w-8 h-8"} />
    ),
  },

  {
    company_name: "Thai Enquirer",
    job_title: "English-Language News Outlet",
    job_description:
      "Thai Enquirer is an ",
    path: "https://www.thaienquirer.com/",
    icon: (
      <img
        src={"/img/resources/icons/thai-enquirer.png"}
        alt={"Thai Enquirer"}
        className={"w-8 h-8"} />
    ),
  },

  {
    company_name: "Richard Barrow in Thailand",
    job_title: "News & Blog",
    job_description:
      "Richard has been in Thailand for over xxx years and has been sharing news since 1998. He has often stayed ahead of authorities in terms of news and has proven to be one of the most informed expats in the country.",
    path: "https://www.richardbarrow.com/",
    icon: (
      <img
        src={"/img/resources/icons/richard-barrow.jpg"}
        alt={"Richard Barrow"}
        className={"w-8 h-8"} />
    ),
  },
];

// 4.2 Facebook Groups Section

export const FacebookGroups = [
  {
    company_name: "Bangkok Expats",
    job_title: "Group",
    job_description:
      'There is both "Bangkok Expats" and "BANGKOK EXPATS".',
    path: "https://www.facebook.com/groups/bkexpats.kc/",
    icon: (
      <img
      src={"/img/resources/icons/bangkok-expats.jpg"}
      alt={"BKK expats Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Bangkok Expats Classified Forum",
    job_title: "Forum and Marketplace",
    job_description:
      "Place to look for condo rental and secondhand items",
    path: "https://www.facebook.com/groups/BangkokClassifiedsForum/",
    icon: (
        <img
      src={"/img/resources/icons/bangkok-classifieds.jpg"}
      alt={"BKK classifieds Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    
    company_name: "Farang Girls in Bangkok",
    job_title: "Group",
    job_description:
      "An all-female expat group to share information, with an aim to make friends and get together.",
    path: "https://www.facebook.com/groups/fgibkk",
    icon: (
      <img
      src={"/img/resources/icons/farang-girls-bkk.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
      ),
  },
];

// 4.3 Food Delivery Section

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

// 4.4 Plant-Based Section

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

// 4.5 Transportation Section

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
  job_title: "For flights within the region",
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
];


// 4.6 Others Section

export const Others = [
  {
    company_name: "Mobile Phone",
    job_title: "Packages",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://www.bangkokpost.com/",
    icon: (
      <img
      src={"/img/resources/icons/farang-girls-bkk.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Internet",
  job_title: "Home Internet",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://thethaiger.com/",
    icon: (
      <img
      src={"/img/resources/icons/farang-girls-bkk.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
    
  },
  {
    company_name: "Airline Platforms",
  job_title: "For flights within the region",
  job_description:
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  path: "https://www.richardbarrow.com/",
    icon: (
      <img
      src={"/img/resources/icons/farang-girls-bkk.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Public Transportation",
    job_title: "Telecommunications Companies",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://www.bangkokpost.com/",
    icon: (
      <img
      src={"/img/resources/icons/farang-girls-bkk.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
  {
    company_name: "Food Delivery",
    job_title: "Telecommunications Companies",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://www.bangkokpost.com/",
    icon: (
      <img
      src={"/img/resources/icons/farang-girls-bkk.jpg"}
      alt={"Group Logo"}
      className={"w-8 h-8"} />
    ),
  },
];


/* 5. === FOOTER === */

// 5.1 Menu Options

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