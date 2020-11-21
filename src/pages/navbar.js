import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaStackOverflow,
  FaBars
} from "react-icons/fa";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 10;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    setIsOpen(false);
  };
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <span className='animate-left unreset'>Priyanga</span>
          <button
            type='button'
            className='nav-toggle animate-right unreset'
            id='nav-toggle'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul
          className={`nav-links ${isOpen ? "show-links" : ""} `}
          id='nav-links'
        >
          <li className='animate-left unreset home'>
            <NavLink
              to='#home'
              replace
              exact
              smooth
              className='nav-link scroll-link active'
              scroll={(el) => scrollWithOffset(el)}
            >
              home
            </NavLink>
          </li>
          <li className='animate-top unreset'>
            <NavLink
              to='#about'
              replace
              exact
              smooth
              className='nav-link scroll-link'
              scroll={(el) => scrollWithOffset(el)}
            >
              about
            </NavLink>
          </li>
          <li className='wait animate-bottom unreset'>
            <NavLink
              to='#services'
              replace
              exact
              smooth
              className='nav-link scroll-link'
              scroll={(el) => scrollWithOffset(el)}
            >
              services
            </NavLink>
          </li>
          <li className='animate-right unreset'>
            <NavLink
              to='#resume'
              replace
              exact
              smooth
              className='nav-link scroll-link'
              scroll={(el) => scrollWithOffset(el)}
            >
              resume
            </NavLink>
          </li>
          <li className='animate-left unreset'>
            <NavLink
              to='#portfolio'
              replace
              exact
              smooth
              className='nav-link scroll-link'
              scroll={(el) => scrollWithOffset(el)}
            >
              portfolio
            </NavLink>
          </li>
          <li className='animate-right unreset'>
            <NavLink
              to='#contact'
              replace
              exact
              smooth
              className='nav-link scroll-link'
              scroll={(el) => scrollWithOffset(el)}
            >
              say hello
            </NavLink>
          </li>
        </ul>
        <ul className='nav-icons'>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/priyanga-vanangamudi'
              className='nav-icon'
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/PriyangaV'
              className='nav-icon'
            >
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://stackoverflow.com/users/3595110/priyanga-v'
              className='nav-icon'
            >
              <FaStackOverflow />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
