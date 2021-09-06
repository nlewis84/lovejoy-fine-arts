import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="inline-flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-red-600 text-4xl font-bold cursive tracking-widest"
          >
            Lovejoy Fine Arts
          </NavLink>
          <NavLink
            to="/event"
            activeClassName="text-white bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white fire hover:text-red-600"
          >
            Events
          </NavLink>
          <NavLink
            to="/staff"
            activeClassName="text-white bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white fire hover:text-red-600"
          >
            Staff
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white fire hover:text-red-600"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
