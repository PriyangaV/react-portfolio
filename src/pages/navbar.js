import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaStackOverflow,
  FaBars
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { NavHashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        setIsOpen(false);
        let id = null;
        if (link.classList.contains("page-scroll")) {
          id = e.target.parentElement.getAttribute("href").slice(2);
        } else {
          id = e.target.getAttribute("href").slice(2);
        }
        const element = document.getElementById(id);
        let position = element.offsetTop + 64;
        window.scrollTo({
          left: 0,
          top: position,
          behavior: "smooth"
        });
      });
    });
  }, []);
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
          <li className='animate-left unreset'>
            <NavLink
              to='home'
              replace
              className='nav-link scroll-link selected'
              activeClassName='selected'
            >
              home
            </NavLink>
          </li>
          <li className='animate-top unreset'>
            <NavLink
              to='about'
              replace
              className='nav-link scroll-link'
              activeClassName='selected'
            >
              about
            </NavLink>
          </li>
          <li className='wait animate-bottom unreset'>
            <NavLink
              to='services'
              replace
              className='nav-link scroll-link'
              activeClassName='selected'
            >
              services
            </NavLink>
          </li>
          <li className='animate-right unreset'>
            <NavLink
              to='resume'
              replace
              className='nav-link scroll-link'
              activeClassName='selected'
            >
              resume
            </NavLink>
          </li>
          <li className='animate-left unreset'>
            <NavLink
              to='portfolio'
              replace
              className='nav-link scroll-link'
              activeClassName='selected'
            >
              portfolio
            </NavLink>
          </li>
          <li className='animate-right unreset'>
            <NavLink
              to='contact'
              replace
              className='nav-link scroll-link'
              activeClassName='selected'
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
