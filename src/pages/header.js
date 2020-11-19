import React from "react";
import { FaLinkedin, FaGithubSquare, FaStackOverflow } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <header id='home' className='header-home'>
      <div className='hero'>
        <div className='hero-banner'>
          <h1 className='animate-top'>Hi, I'm Priyanga</h1>
          <p className='animate-top'>
            <span>Software Developer</span>
            <span>Sensible to Frontend</span>
          </p>
          <p className='animate-left'>
            <NavLink
              to='portfolio'
              className='btn-default hero-btn scroll-link'
            >
              view portfolio
            </NavLink>
          </p>
          <ul className='hero-banner-social animate-top'>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/priyanga-vanangamudi'
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/PriyangaV'
              >
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://stackoverflow.com/users/3595110/priyanga-v'
              >
                <FaStackOverflow />
              </a>
            </li>
          </ul>
          <NavLink to='about' className='nav-link scroll-link page-scroll'>
            <div className='icon-scroll'></div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default header;
