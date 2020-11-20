import React from "react";
import { FaLinkedin, FaGithubSquare, FaStackOverflow } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import banner from "../assets/banner.png";
// import { NavHashLink as NavLink } from "react-router-hash-link";

const HeroContainer = styled.div`
  min-height: 100vh;
  display: table-cell;
  text-align: center;
  background: linear-gradient(20deg, var(--theme-color-1), rgba(0, 0, 0, 0.7)),
    url(${banner}) center/cover no-repeat fixed;
  /* background: linear-gradient(20deg, var(--theme-color-1), rgba(0, 0, 0, 0.7)),
    url(${banner});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover; */
`;

const header = () => {
  return (
    <header id='home' className='header-home'>
      {/* <div className='hero'> */}
      <HeroContainer>
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
              replace
              activeClassName='selected'
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
          <NavLink
            replace
            to='about'
            activeClassName='selected'
            className='nav-link scroll-link page-scroll'
          >
            <div className='icon-scroll'></div>
          </NavLink>
        </div>
        {/* </div> */}
      </HeroContainer>
    </header>
  );
};

export default header;
