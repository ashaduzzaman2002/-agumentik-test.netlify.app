import React from 'react';
import './header.css';
import {BiMenuAltLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Header = () => {
  const navlinks = [
    'Home',
    'Services',
    'Location',
    'Merch',
    'Simulator',
    'Contact',
  ];
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__sidebar">
          <a className="header__sidebar-logo" href="/">
            DRIFT <br /> SUNDAYS
          </a>

          <div className="menu-bar">
          <BiMenuAltLeft />
          </div>
        </div>

        <nav className="header__menu">
          <ul className="nav-menu">
            {navlinks.map((navlink, i) => (
              <li key={i} className="mix-blend-mode mod-scale">
                <Link to={navlink=== 'Home'? '/': navlink.toLocaleLowerCase()}>{navlink}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__lang">
          <ul>
            <li className="active mix-blend-mode mod-black">
              <a href="#">ENG</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
