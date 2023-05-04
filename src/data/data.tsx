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
