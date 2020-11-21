import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaStackOverflow,
  FaChevronUp
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    const backToTopIcon = document.querySelector(".back-to-top");
    backToTopIcon.addEventListener("click", () => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
      });
    });
    document.addEventListener("scroll", function () {
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
      ) {
        backToTopIcon.classList.add("active");
      } else {
        backToTopIcon.classList.remove("active");
      }
    });
  }, []);
  return (
    <>
      <section className='contact section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='section-title animate-top'>
              <h2 data-heading='Say Hello'>Get in touch</h2>
              <div className='lines'>
                <div className='diamond'></div>
              </div>
            </div>
          </div>
          <div className='row get-in-touch animate-left'>
            <p>You can reach me via email or phone</p>
            <p>I would love to hear from you!</p>

            <h4 className='contact-info'>
              <a href='mailto:gayathripriya.sb@gmail.com'>
                gayathripriya.sb@gmail.com
              </a>
              <span>India: +91-959-757-0900</span>
            </h4>
            <ul className='contact-social-icons'>
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
          </div>
        </div>
        <br />
        <br />
      </section>
      <button className='back-to-top'>
        <FaChevronUp />
      </button>
    </>
  );
};

export default Contact;
