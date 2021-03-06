import React, { useState, useEffect } from 'react'
import './style.css';

export function Dropdown({ children }) {

    const open = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    useEffect(() => {
        /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }, [])

    return (
        <div id="content" onClick={open} className="relative inline-block text-left">
            {children}
        </div>
    )
}

export function DropdownContent({ children, ...rest }) {
    return (
        <div
            {...rest}
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            id="menu-content"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
        >
            {children}
        </div>
    )
}
export function DropdownTrig({ children, ...rest }) {
    return (
        <div>
            <div
                {...rest}
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
            >
                {children}
            </div>
        </div>
    )
}
export function DropdownItem({ children, ...rest }) {
    return (
        <div>
            <div
                {...rest}
                className="dropdown-item text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
            >
                {children}
            </div>
        </div>
    )
}




// export default function Dropdown({children}) {
//     return (
//         <div id="content" className="relative inline-block text-left">
//             <div>
//                 <button type="button"
//                     className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//                     id="menu-button"
//                     aria-expanded="true"
//                     aria-haspopup="true">
//                     Options

//                     <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                 </button>
//             </div>


//             <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
//                 id="menu-content"
//                 role="menu"
//                 aria-orientation="vertical"
//                 aria-labelledby="menu-button"
//                 tabIndex="-1"
//             >
//                 <div className="py-1" role="none">
//                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Edit</a>
//                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Test</a>
//                 </div>
//                 <div className="py-1" role="none">
//                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Archive</a>
//                 </div>
//             </div>
//         </div>
//     )
// }