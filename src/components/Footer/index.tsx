import Link from 'next/link';
import { footerNavs } from '@/data/data';

export default function Footer() {

  return (
   <footer className="text-white bg-cyan-900 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
    <div className="max-w-lg sm:mx-auto sm:text-center">
    <img src={"../img/logo-main.png"} className="w-24  sm:mx-auto" />
    </div>
     <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
      {footerNavs.map((item, idx) => (
       <li className={" hover:text-gray-800"}>
        <Link key={idx} href={item.href}>
         { item.name }
        </Link>
       </li>))
       }
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
       <div className="mt-4 sm:mt-0">
        &copy; 2023 Kevin Jung All rights reserved.
       </div>
       <div className="mt-6 sm:mt-0">
        <ul className="flex items-center space-x-4">
         {/* Twitter */}
         <li className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-60">
          <Link href="https://twitter.com/kevinhjung93" target={"_blank"}>
           <svg xmlns="http://www.w3.org/2000/svg"
                className={"svg-icon w-6 h-6 text-white hover:opacity-60"}
                viewBox="0 0 48 48">
            <path fill="none" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
           </svg>                
          </Link>
         </li>
         {/* GitHub */}
         <li className="w-10 h-10 rounded-full flex items-center justify-center">
          <Link href="https://github.com/kevinjung13" target={"_blank"}>
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"svg-icon w-6 h-6 text-white hover:opacity-60"}
            viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
           </svg>
          </Link>
         </li>
         {/* Linkedin */}
                      <li className="w-10 h-10 rounded-full flex items-center justify-center ">
                          <Link href="https://www.linkedin.com/in/kevin-hwisung-jung-11374a6a/" target={"_blank"} >
                              <svg xmlns="http://www.w3.org/2000/svg"
                                  className={"svg-icon w-6 h-6 text-white hover:opacity-60"}
                                  viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
</svg>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </footer>
  )
}