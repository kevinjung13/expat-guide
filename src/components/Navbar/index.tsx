import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {

  /* State */
  const [state, setState] = useState(false)
  const [dropdownState, setDropdownState] = useState({ isActive: false, idx: null })

  /* Navbar Sub Options */
  const exploreNavItems = ["Dining", "Activities", "Attractions", "Nightlife", "Nearby Destinations", "Shopping"]
  const neighbourhoodsNavItems = ["Sukhumvit", "Sathorn/Silom", "Ari/North Bangkok", "Rama IX/Ratchada"]
  const resourcesNavItems = ["News", "Social Media Groups", "Plant-Based", "Others"]

  /* Navbar Menu Options */
  const navigation = [
    {
      title: "About",
      href: "/about",
      dropDown: false
    },
    {
      title: "Explore",
      href: "/explore",
      dropDown: true,
      items: exploreNavItems
    },
    {
      title: "Neighbourhoods",
      href: "/neighbourhoods",
      dropDown: true,
      items: neighbourhoodsNavItems
    },
    {
      title: "Resources",
      href: "/resources",
      dropDown: true,
      items: resourcesNavItems
    }
  ]

  useEffect(() => {
    document.onclick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-menu"))
      setDropdownState({ isActive: false, idx: null });
    };
  }, [])

  return (
    <>
      <nav className={`relative pb-2 z-20 md:static md:text-md md:border-none ${state ? "shadow-lg rounded-xl md:shadow-none bg-slate-500/50 mx-2 mt-2 md:bg-transparent md:border-none md:mx-2 md:mt-0" : ""}`}>
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          {/* Container for logo and Hamburger Icon */}
          <div className="flex items-center justify-between py-5 md:block">
            {/* Logo */}
            <Link href={"/"}>
              <img
                className={"hover:opacity-70"}     
                src={"../img/logo-main.png"}
                width={"100px"}
                height={"50px"}
                alt={"Logo"} />
            </Link>
            {/* Hamburger Icon */}
            <div className={"md:hidden"}>
              <button
                className="text-white hover:text-gray-800"
                onClick={() => setState(!state)}>
                {state ?
                (<svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd" />
                 </svg>) :
                (<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>)}
              </button>
            </div>
          </div>
          {/* Navbar Menu Options */}
          <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
            <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                {/* Dropdown Settings */}
                  {item.dropDown ? (
                  <button
                    className="w-full flex items-center justify-between gap-1 text-white hover:text-gray-800 font-bold"
                    onClick={() => setDropdownState({ idx, isActive: !dropdownState.isActive })}>
                    {item.title}
                    {/* Rendering of Dropdown Arrow */}
                    {dropdownState.idx == idx && dropdownState.isActive ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                      </svg>) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>)
                    }
                  </button>) : (
                  <Link href={item.href} className="block text-white hover:text-gray-800 font-bold">
                    {item.title}
                  </Link>)}    
                  {/* rendering of drop down menu options */}
                  {item.dropDown && dropdownState.idx == idx && dropdownState.isActive ? (
                    <div className="bg-opacity-30 mt-6 inset-x-0 top-20 w-full md:absolute md:shadow-md md:mt-0">
                      <ul className='max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 grid-cols-1'>
                        {item.items.map((dropdownItem, idx) => (
                        <li key={idx}>
                          <Link href={item.href}>
                            <p className={"ml-3 text-white text-sm hover:text-gray-800"}>{dropdownItem}</p>
                          </Link>
                        </li>))}
                      </ul>
                    </div>) : ""}
                </li>)
              })
            }
            {/* Contact Button */}  
              <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0 '>
                <li>
                  <Link
                    href={"mailto:kevinjung13@gmail.com"}
                    className={"flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"}>
                    Contact
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}>
        </div>) : ""
      }
    </>
  )
}