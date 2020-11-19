import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaStackOverflow,
  FaBars
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        setIsOpen(false);
        let id = null;
        if (link.classList.contains("page-scroll")) {
          id = e.target.parentElement.getAttribute("href").slice(1);
        } else {
          id = e.target.getAttribute("href").slice(1);
        }
        const element = document.getElementById(id);
        let position = element.offsetTop;
        document.querySelector("nav ul li a").classList.remove("active");
        window.scrollTo({
          left: 0,
          top: position,
          behavior: "smooth"
        });
        document.querySelector("nav ul li a[href='/" + element + "']") &&
          document
            .querySelector("nav ul li a[href='/" + element + "']")
            .classList.add("active");
        history.push(`/${element}`);
      });
    });
  }, [history]);
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
              console.log("ssss", isOpen);
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
            <NavLink to='home' className='nav-link scroll-link active'>
              home
            </NavLink>
          </li>
          <li className='animate-top unreset'>
            <NavLink to='about' className='nav-link scroll-link'>
              about
            </NavLink>
          </li>
          <li className='wait animate-bottom unreset'>
            <NavLink to='services' className='nav-link scroll-link'>
              services
            </NavLink>
          </li>
          <li className='animate-right unreset'>
            <NavLink to='resume' className='nav-link scroll-link'>
              resume
            </NavLink>
          </li>
          <li className='animate-left unreset'>
            <NavLink to='portfolio' className='nav-link scroll-link'>
              portfolio
            </NavLink>
          </li>
          <li className='animate-right unreset'>
            <NavLink to='contact' className='nav-link scroll-link'>
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
