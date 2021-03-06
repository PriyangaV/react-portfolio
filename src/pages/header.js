import React from "react";
import { FaLinkedin, FaGithubSquare, FaStackOverflow } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import banner from "../assets/banner.png";
import { NavHashLink as NavLink } from "react-router-hash-link";

const HeroContainer = styled.div`
  min-height: 90vh;
  min-width: 100vw;
  display: table-cell;
  text-align: center;
  background: linear-gradient(20deg, var(--theme-color-1), rgba(0, 0, 0, 0.7)),
    url(${banner}) center/cover no-repeat fixed;
`;

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = 120;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const header = () => {
  return (
    <header id='home' className='header-home'>
      <HeroContainer>
        <div className='hero-banner'>
          <h1 className='animate-top'>Hi, I'm Priyanga</h1>
          <p className='animate-top'>
            <span>Software Developer</span>
            <span>Sensible to Frontend</span>
          </p>
          <p className='animate-left'>
            <NavLink
              to='#portfolio'
              className='btn-default hero-btn scroll-link'
              replace
              smooth
              scroll={(el) => scrollWithOffset(el)}
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
            to='#about'
            className='nav-link scroll-link page-scroll'
            replace
            smooth
            scroll={(el) => scrollWithOffset(el)}
          >
            <div className='icon-scroll'></div>
          </NavLink>
        </div>
      </HeroContainer>
    </header>
  );
};

export default header;
