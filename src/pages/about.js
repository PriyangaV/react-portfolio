import React from "react";
import profile from "../assets/profile.JPG";
import { FaEnvelope, FaMapMarker, FaDownload } from "react-icons/fa";
import cv from "../pv.pdf";

const About = () => {
  return (
    <>
      <section id='about' className='section about section-center'>
        <div className='container'>
          <div className='row'>
            <div className='section-title animate-top'>
              <h2 data-heading='Who I Am'>Get to Know me</h2>
              <div className='lines'>
                <div className='diamond'></div>
              </div>
            </div>
          </div>
          <div className='personal row'>
            <div className='intro'>
              <div>
                <p className='animate-left'>
                  Hello there! Welcome to my little corner of the internet. My
                  name's Priyanga Vanangamudi. I'm a front-end developer by
                  profession but also a book reader, an avid photographer, a
                  wanderess and I'm also into learning foreign languages. I'm a
                  curious developer passionate about new and exciting
                  technologies.
                </p>
                <p className='animate-left'>
                  I started my career as a software intern with no relevant
                  background experience or degree and gradually moved on to web
                  development. I always loved JavaScript, and I had spent most
                  of my career on UI and client side technologies. I enjoy
                  creating things that focus on usefulness and elegance.
                </p>
                <p className='animate-left'>
                  I have developed projects for many companies worldwide and
                  local, both independently and in teams, cooperating with other
                  developers and designers. When dealing with a project I pay
                  attention to the smallest details addressing problems with
                  patience. I love teaching people to code and I’ve learned a
                  lot of cool stuff. But I am still in the endless journey of
                  learning new things.
                </p>
                <a
                  href={cv}
                  target='_blank'
                  rel='noreferrer'
                  className='btn-default animate-bottom'
                >
                  <FaDownload /> Download CV
                </a>
              </div>
            </div>
            <div className='photo'>
              <div className='animate-left'>
                <img src={profile} className='img-circle' alt='My Avatar' />
              </div>
              <div className='personal-detail'>
                <p className='animate-right'>
                  <FaEnvelope /> gayathripriya.sb@gmail.com
                </p>
                <p className='animate-left'>
                  <FaMapMarker /> Chennai, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
