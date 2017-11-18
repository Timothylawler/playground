import React from 'react';
import { Link } from 'react-router'
import './Nav.css'

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-list--item'>
            <Link to='/'>Start</Link>
          </li>
          <li className='navbar-list--item'>
            <Link to='/menuanimation'>menuanimation</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export { Navbar };