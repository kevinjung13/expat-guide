
/* 1. Navbar  */

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

export const navigation = [

  /* About */
  {
    title: "About",
    href: "/about",
    dropDown: false,
  },

  /* Explore */
  {
    title: "Explore",
    href: "/explore",
    dropDown: true,
    items: ExploreOptions
  },

  /* Neighbourhoods */
  {
    title: "Neighbourhoods",
    href: "/neighbourhoods",
    dropDown: true,
    items: NeighbourhoodOptions
  },

  /* Resources */
  {
    title: "Resources",
    href: "/resources",
    dropDown: true,
    items: ResourcesOptions
  }
]

/* 2. Body */

/* Card Information and Props */
export const posts = [
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

/* 3. Neighbourhoods Section */

export const neighbourhoods = [
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


/* 4. Resources Section */

/* News */

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

/* News */

export const SocialMediaGroups = [
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

/* News */

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

/* Others */

export const Others = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_715_1824)">
          <path
            d="M34.6588 17.9031C34.6588 16.7135 34.5623 15.5175 34.3565 14.3472H17.85V21.0861H27.3025C26.9103 23.2595 25.6499 25.1822 23.8044 26.4039V30.7765H29.4438C32.7554 27.7286 34.6588 23.2274 34.6588 17.9031Z"
            fill="#4285F4"
          />
          <path
            d="M17.85 35.0011C22.5698 35.0011 26.5502 33.4514 29.4502 30.7764L23.8109 26.4038C22.2419 27.4712 20.2163 28.0757 17.8564 28.0757C13.2909 28.0757 9.41989 24.9956 8.03095 20.8545H2.21155V25.3621C5.18234 31.2715 11.2332 35.0011 17.85 35.0011Z"
            fill="#34A853"
          />
          <path
            d="M8.02451 20.8547C7.29146 18.6813 7.29146 16.3278 8.02451 14.1544V9.64673H2.21154C-0.270546 14.5916 -0.270546 20.4174 2.21154 25.3623L8.02451 20.8547Z"
            fill="#FBBC04"
          />
          <path
            d="M17.85 6.92659C20.3449 6.88801 22.7563 7.82683 24.5632 9.55014L29.5595 4.55382C26.3958 1.58303 22.1968 -0.0502629 17.85 0.0011793C11.2332 0.0011793 5.18234 3.73074 2.21155 9.6466L8.02452 14.1542C9.40703 10.0067 13.2845 6.92659 17.85 6.92659Z"
            fill="#EA4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_715_1824">
            <rect width="35" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    company_name: "Mobile Phone and Internet",
    job_title: "Telecommunications Companies",
    job_description:
      "AIS is Best company for mobile packages and ",
    path: "https://www.bangkokpost.com/",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_694_1831)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z"
            fill="#191717"
          />
          <path
            d="M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z"
            fill="#191717"
          />
          <path
            d="M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z"
            fill="#191717"
          />
          <path
            d="M11.0085 37.7139C10.8614 37.8167 10.6111 37.7139 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3296 10.3503 37.2771 10.3503 37.2239C10.3503 37.1708 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9394C10.619 36.8406 10.8694 36.9394 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.7139Z"
            fill="#191717"
          />
          <path
            d="M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9509C11.4575 38.7533 11.4059 38.4846 11.537 38.3423C11.6682 38.2001 11.9344 38.2396 12.161 38.4332C12.3875 38.6268 12.4312 38.8995 12.2921 39.0417Z"
            fill="#191717"
          />
          <path
            d="M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0058C13.222 39.9268 13.0432 39.7055 13.0948 39.5158C13.1465 39.3262 13.4207 39.2392 13.6949 39.3262C13.9691 39.4131 14.144 39.6225 14.0923 39.8162Z"
            fill="#191717"
          />
          <path
            d="M16.0557 39.9506C16.0557 40.1442 15.8331 40.3102 15.547 40.3141C15.2608 40.3181 15.0264 40.16 15.0264 39.9664C15.0264 39.7728 15.2489 39.6068 15.535 39.6029C15.8212 39.5989 16.0557 39.753 16.0557 39.9506Z"
            fill="#191717"
          />
          <path
            d="M17.8838 39.6463C17.9196 39.84 17.7208 40.0415 17.4347 40.0889C17.1486 40.1363 16.8982 40.0217 16.8624 39.8321C16.8267 39.6424 17.0333 39.4369 17.3115 39.3855C17.5897 39.3342 17.848 39.4527 17.8838 39.6463Z"
            fill="#191717"
          />
        </g>
        <defs>
          <clipPath id="clip0_694_1831">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    company_name: "Airline Platforms",
    job_title: "For flights within the region",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://thethaiger.com/",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 43 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_690_1894)">
          <path
            d="M14.1693 48C18.08 48 21.254 44.4159 21.254 39.9999V31.9999H14.1693C10.2586 31.9999 7.08459 35.5839 7.08459 39.9999C7.08459 44.4159 10.2586 48 14.1693 48Z"
            fill="#0ACF83"
          />
          <path
            d="M7.08459 23.9999C7.08459 19.5839 10.2586 15.9999 14.1693 15.9999H21.254V31.9998H14.1693C10.2586 32 7.08459 28.4159 7.08459 23.9999Z"
            fill="#A259FF"
          />
          <path
            d="M7.08459 8.00006C7.08459 3.58406 10.2586 0 14.1693 0H21.254V15.9999H14.1693C10.2586 15.9999 7.08459 12.4161 7.08459 8.00006Z"
            fill="#F24E1E"
          />
          <path
            d="M21.2535 0H28.3382C32.2489 0 35.4229 3.58406 35.4229 8.00006C35.4229 12.4161 32.2489 15.9999 28.3382 15.9999H21.2535V0Z"
            fill="#FF7262"
          />
          <path
            d="M35.4229 23.9999C35.4229 28.4159 32.2489 32 28.3382 32C24.4275 32 21.2535 28.4159 21.2535 23.9999C21.2535 19.5839 24.4275 15.9999 28.3382 15.9999C32.2489 15.9999 35.4229 19.5839 35.4229 23.9999Z"
            fill="#1ABCFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_690_1894">
            <rect width="42.5075" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    company_name: "Richard Barrow in Thailand",
    job_title: "UI/UX Designer",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    path: "https://www.richardbarrow.com/",
  },
];


/* 5. Footer */

/* Footer Menu Options */
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