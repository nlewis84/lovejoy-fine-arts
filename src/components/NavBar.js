import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
          >
            Lovejoy Fine Arts
          </NavLink>
          <NavLink
            to="/event"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Event
          </NavLink>
          <NavLink
            to="/teachers"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Teachers
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex px-3 py-3 my-6">
          <SocialIcon
            url="https://www.facebook.com/lovejoy.arts"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.twitter.com/LovejoyArts"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
