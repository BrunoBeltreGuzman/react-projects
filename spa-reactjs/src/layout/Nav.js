import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];
const Nav = () => (
  <nav className='bg-purple-600 text-purple-300 p-5 h-16 shadow'>
    <ul className='flex space-x-6 justify-end'>
      {navs.map((navItem) => (
        <li key={navItem.path}>
          <NavLink exact to={navItem.path} activeClassName='text-purple-100'>
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
