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

/* === 3. EXPLORE === */

/* 3.1 Dining */

  // A. Local Flavors

  // B. Asia


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