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