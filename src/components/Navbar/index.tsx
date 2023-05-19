import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navigation } from '@/components/Navbar/data';

/* Props for Dropdown */
interface DropDownProps {
  idx?: number | null;
  isActive?: boolean | null;
}

export default function Navbar() {

  {/* State for Menu */}
  const [isOpen, setIsOpen] = useState(false)
  {/* State for Dropdown Options */}
  const [isDropdown, setIsDropdown] = useState<DropDownProps>({ idx: null, isActive: false })
  {/* State for Scrolling */}
  const [isScrolling, setIsScrolling] = useState(false)

  {/* Effects for DropDown Menu */}
  useEffect(() => {
    document.onclick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-menu"))
      setIsDropdown({ idx: null, isActive: false });
    };
  }, [])

  {/* Effects for Scrolling */}
  useEffect(() => {
    {/* HandleScroll Function */}
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolling(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  {/* Scrolling Settings */}
  const scroll = `${isScrolling ? 'md:bg-gray-800 md:fixed md:top-0 md:left-0 md:transition md:duration-300' : 'bg-transparent'}`

  return (
    <>
      {/* Navbar Main container */}
      <nav className={`w-full relative pb-2 z-20 md:static md:text-md md:border-none
      ${isOpen ? "shadow-lg rounded-xl bg-slate-500/50 mx-2 md:shadow-none md:bg-transparent md:border-none md:mx-2 md:mt-0" : ""}
      ${!isOpen && isDropdown.isActive ? "mb-44" : ""}`}>
        <div className={"items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8"}>
          {/* Container for logo and Hamburger Icon */}
          <div className={"flex items-center justify-between py-5 md:block"}>
            {/* Logo */}
            <Link href={"/"}>
              <img
                className={"hover:opacity-70"}     
                src={"../img/logo-main.png"}
                width={"100px"}
                height={"50px"}
                alt={"Logo"} />
            </Link>
            {/* Hamburger and Close Icon */}
            <div className={"md:hidden"}>
              <button
                className={"text-white hover:text-gray-800"}
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ?
                (<svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  className={"h-6 w-6"}
                  viewBox={"0 0 20 20"}
                  fill={"currentColor"}>
                  <path
                    fillRule={"evenodd"}
                    d={"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}
                    clipRule={"evenodd"} />
                 </svg>) :
                (<svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  fill={"none"}
                  viewBox={"0 0 24 24"}
                  strokeWidth={1.5}
                  stroke={"currentColor"}
                  className={"w-6 h-6"}>
                  <path
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    d={"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                 </svg>)}
              </button>
            </div>
          </div>
          {/* Navbar Menu Options */}
          <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className={"justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0"}>
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                {/* Rendering of Navbar Options */}
                  {/* Rendering of Hamburger Icon */}
                  {item.dropDown ? (
                    <button
                      className={"w-full flex items-center justify-between gap-1 text-white hover:text-gray-800 font-bold"}
                      onClick={() => setIsDropdown({ idx, isActive: !isDropdown.isActive })}>
                      {item.title}
                      {isDropdown.idx == idx && isDropdown.isActive ? (
                        <svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 20 20"} fill={"currentColor"} className={"w-5 h-5"}>
                          <path fillRule={"evenodd"} d={"M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"} clipRule={"evenodd"} />
                        </svg>) : (
                        <svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 20 20"} fill={"currentColor"} className={"w-5 h-5"}>
                          <path fillRule={"evenodd"} d={"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"} clipRule={"evenodd"} />
                        </svg>)
                      }
                    </button>) : (
                    <Link
                      href={item.href}
                        className={`block text-white hover:text-gray-800 font-bold mr-3
                      ${isScrolling ? "md:hover:text-yellow-700" : ""}`}>
                    {item.title}
                  </Link>)}    
                  {/* Rendering of Nav Dropdown Options */}
                  {item.dropDown && isDropdown.idx == idx && isDropdown.isActive ? (
                    <div className={"mt-6 top-20 w-fit md:absolute md:shadow-md md:mt-0 md:bg-slate-500/50"}>
                      <ul className={"max-w-screen-xl mx-auto grid grid-cols-1 items-center gap-6 md:px-5 md:py-6"}>
                        {item?.items?.map((dropdownItem, idx) => (
                          <li key={idx}>
                            <Link key={idx} href={dropdownItem.href}>
                              <p className={`ml-3 text-white text-sm hover:text-gray-800 
                              ${!isOpen ? "relative z-20" : ""}
                              ${isScrolling ? "md:hover:text-yellow-700" : ""}`}>
                              {dropdownItem.title}  
                              </p>
                            </Link>
                        </li>))}
                      </ul>
                    </div>) : ""}
                </li>)
              })
            }
            {/* Contact Button */}  
              <div className={"flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0"}>
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
      {isOpen ? (
        <div
          className={"z-10 fixed top-0 w-screen h-screen md:hidden"}
          onClick={() => setIsOpen(false)}>
        </div>) : ""}
    </>
  )
}