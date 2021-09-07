import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-black">
      <nav>
        <div className="mx-auto px-4">
          <div className="md:pl-9 mx-auto flex justify-between">
            <div className="flex">
              <div>
                {/* <!-- Website Logo --> */}
                <NavLink
                  to="/"
                  exact
                  activeClassName="text-white"
                  className="inline-flex items-center py-6 px-3 md:mr-4 text-white hover:text-red-600 text-xl md:text-4xl font-bold cursive tracking-widest"
                >
                  Lovejoy Fine Arts
                </NavLink>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:inline-flex items-center">
                <NavLink
                  to="/staff"
                  activeClassName="text-white bg-red-700"
                  className="inline-flex py-3 px-3 rounded text-xs sm:text-base text-white fire hover:text-red-600"
                >
                  Staff
                </NavLink>
                <NavLink
                  to="/event"
                  activeClassName="text-white bg-red-700"
                  className="inline-flex py-3 px-3 rounded text-xs sm:text-base text-white fire hover:text-red-600"
                >
                  Events
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="text-white bg-red-700"
                  className="inline-flex py-3 px-3 rounded text-xs sm:text-base text-white fire hover:text-red-600"
                >
                  About
                </NavLink>
              </div>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => {
                  document
                    .querySelector('.mobile-menu')
                    .classList.toggle('hidden');
                }}
              >
                <svg
                  className="bg-black w-6 h-6 text-white hover:text-white"
                  x-show="!showMenu"
                  fill="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <NavLink
                to="/staff"
                activeClassName="text-white bg-red-700"
                className="block text-sm pl-6 px-2 py-4 bg-black text-white hover:bg-red-700 transition duration-300"
              >
                Staff
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/event"
                activeClassName="text-white bg-red-700"
                className="block text-sm pl-6 px-2 py-4 text-white hover:bg-red-700 transition duration-300"
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="text-white bg-red-700"
                className="block text-sm pl-6 px-2 py-4 text-white hover:bg-red-700 transition duration-300"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

// export default function NavBar() {
//   return (
//     <header className="bg-black">
//       <div className="container mx-auto flex justify-between">
//         <nav className="inline-flex">
// <NavLink
//   to="/"
//   exact
//   activeClassName="text-white"
//   className="inline-flex items-center py-6 px-3 md:mr-4 text-white hover:text-red-600 text-xs md:text-4xl font-bold cursive tracking-widest"
// >
//   Lovejoy Fine Arts
// </NavLink>
//           <NavLink
//             to="/event"
//             activeClassName="text-white bg-red-700"
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-xs sm:text-base text-white fire hover:text-red-600"
//           >
//             Events
//           </NavLink>
// <NavLink
//   to="/staff"
//   activeClassName="text-white bg-red-700"
//   className="inline-flex items-center py-3 px-3 my-6 rounded text-xs sm:text-base text-white fire hover:text-red-600"
// >
//   Staff
// </NavLink>
//           <NavLink
//             to="/about"
//             activeClassName="text-white bg-red-700"
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-xs sm:text-base text-white fire hover:text-red-600"
//           >
//             About
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// }
