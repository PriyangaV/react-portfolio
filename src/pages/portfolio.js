import React, { useEffect, useState } from "react";
import project1 from "../assets/portfolio/thumb/project-1.png";
import project2 from "../assets/portfolio/thumb/project-2.png";
import project3 from "../assets/portfolio/thumb/project-3.png";
import project4 from "../assets/portfolio/thumb/project-4.png";
import project5 from "../assets/portfolio/thumb/project-5.png";
import project6 from "../assets/portfolio/thumb/project-6.png";
import project7 from "../assets/portfolio/thumb/project-7.png";
import project8 from "../assets/portfolio/thumb/project-8.png";
import project9 from "../assets/portfolio/thumb/project-9.png";
import project10 from "../assets/portfolio/thumb/project-10.png";
import project11 from "../assets/portfolio/thumb/project-11.png";

import proOne from "../assets/portfolio/large/project-1/1.png";
import proTwo from "../assets/portfolio/large/project-2/1.png";
import proThree from "../assets/portfolio/large/project-3/1.png";
import proFour from "../assets/portfolio/large/project-4/1.png";
import proFive from "../assets/portfolio/large/project-5/1.png";
import proSix from "../assets/portfolio/large/project-6/1.png";
import proSeven1 from "../assets/portfolio/large/project-7/1.png";
import proSeven2 from "../assets/portfolio/large/project-7/2.png";
import proSeven3 from "../assets/portfolio/large/project-7/3.png";
import proEight1 from "../assets/portfolio/large/project-8/1.png";
import proEight2 from "../assets/portfolio/large/project-8/2.png";
import proEight3 from "../assets/portfolio/large/project-8/3.png";
import proEight4 from "../assets/portfolio/large/project-8/4.png";
import proEight5 from "../assets/portfolio/large/project-8/5.png";
import proEight6 from "../assets/portfolio/large/project-8/6.png";
import proEight7 from "../assets/portfolio/large/project-8/7.png";
import proNine1 from "../assets/portfolio/large/project-9/1.png";
import proNine2 from "../assets/portfolio/large/project-9/2.png";
import proNine3 from "../assets/portfolio/large/project-9/3.png";
import proNine4 from "../assets/portfolio/large/project-9/4.png";
import proNine5 from "../assets/portfolio/large/project-9/5.png";
import proNine6 from "../assets/portfolio/large/project-9/6.png";
import proNine7 from "../assets/portfolio/large/project-9/7.png";
import proNine8 from "../assets/portfolio/large/project-9/8.png";
import proNine9 from "../assets/portfolio/large/project-9/9.png";
import proTen1 from "../assets/portfolio/large/project-10/1.png";
import proTen2 from "../assets/portfolio/large/project-10/2.png";
import proEleven1 from "../assets/portfolio/large/project-11/1.png";
import proEleven2 from "../assets/portfolio/large/project-11/2.png";
import proEleven3 from "../assets/portfolio/large/project-11/3.png";

import { FaPlay, FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const Portfolio = () => {
  const portfolioArray = [
    {
      id: 1,
      category: "html-css-js",
      src: project1,
      screenshots: [proOne],
      title: "Trip Portal",
      desc:
        "Every beginner’s coding journey in frontend starts with html and css and the best way to learn them is by practice. I found this site on the internet and did recreate using html, css and a little bit of javascript.",
      stack: "html, css, javascript",
      demoUrl: "https://trip-portal.netlify.app/",
      githubUrl: "https://github.com/PriyangaV/trip-portal"
    },
    {
      id: 2,
      category: "vue",
      src: project10,
      screenshots: [proTen1, proTen2],
      title: "Cocktail Builder",
      desc:
        "The purpose of this application is to learn Vue.js. It's a simple website displaying random cocktails.",
      stack: "html, css, vue",
      demoUrl: "https://cocktail-builder.netlify.app/",
      githubUrl: "https://github.com/PriyangaV/cocktail-builder"
    },
    {
      id: 3,
      category: "react",
      src: project9,
      screenshots: [
        proNine1,
        proNine2,
        proNine3,
        proNine4,
        proNine5,
        proNine6,
        proNine7,
        proNine8,
        proNine9
      ],
      title: "Backpackers Villa",
      desc:
        "An Online Hotel Reservation website, as it provides a platform for both hoteliers and customers. Hoteliers can manage their hotel rooms and customers can book rooms through the website. Used React, Redux and Node.js along with Express to make the application and MongoDB for the database.",
      stack:
        "react, redux, node.js, mongodb, express.js, heroku, cloudinary, contentful",
      demoUrl: "https://backpackers-villa-react.herokuapp.com",
      githubUrl: "https://github.com/PriyangaV/backpackers-villa"
    },
    {
      id: 4,
      category: "html-css-js",
      src: project2,
      screenshots: [proTwo],
      title: "Finance",
      desc:
        "Every beginner’s coding journey in frontend starts with html and css and the best way to learn them is by practice. I found this site on the internet and did recreate using html, css and a little bit of javascript.",
      stack: "html, css, javascript",
      demoUrl: "https://finance-pro.netlify.app/",
      githubUrl: "https://github.com/PriyangaV/finance-pro"
    },
    {
      id: 5,
      category: "html-css-js",
      src: project3,
      screenshots: [proThree],
      title: "Code Studio",
      desc:
        "Every beginner’s coding journey in frontend starts with html and css and the best way to learn them is by practice. I found this site on the internet and did recreate using html, css and a little bit of javascript.",
      stack: "html, css, javascript",
      demoUrl: "https://ziva-code-studio.netlify.app/",
      githubUrl: "https://github.com/PriyangaV/code-studio"
    },
    {
      id: 6,
      category: "html-css-js",
      src: project4,
      screenshots: [proFour],
      title: "Personal Blog",
      desc:
        "Every beginner’s coding journey in frontend starts with html and css and the best way to learn them is by practice. I found this site on the internet and did recreate using html, css and a little bit of javascript.",
      stack: "html, css, javascript",
      demoUrl: "https://ziva-blog.netlify.app/",
      githubUrl: "https://github.com/PriyangaV/personal-blog"
    },
    {
      id: 7,
      category: "html-css-js",
      src: project5,
      screenshots: [proFive],
      title: "Tasty",
      desc:
        "Every beginner’s coding journey in frontend starts with html and css and the best way to learn them is by practice. I found this site on the internet and did recreate using html, css and a little bit of javascript.",
      stack: "html, css, javascript",
      demoUrl: "https://tasty-corner.netlify.app/",
      githubUrl: "https://github.com/PriyangaV/tasty-corner"
    },
    {
      id: 8,
      category: "html-css-js",
      src: project6,
      screenshots: [proSix],
      title: "Professionals",
      desc:
        "Every beginner’s coding journey in frontend starts with html and css and the best way to learn them is by practice. I found this site on the internet and did recreate using html, css and a little bit of javascript.",
      stack: "html, css, javascript",
      demoUrl: "https://professionals.netlify.app",
      githubUrl: "https://github.com/PriyangaV/professionals"
    },
    {
      id: 9,
      category: "react",
      src: project7,
      screenshots: [proSeven1, proSeven2, proSeven3],
      title: "Ocean Breeze",
      desc:
        "A real world web application built with React and nested routes with React Router.",
      stack: "html, css, react, javascript, styled-components",
      demoUrl: "https://ocean-breeze-react.netlify.app",
      githubUrl: "https://github.com/PriyangaV/ocean-breeze"
    },
    {
      id: 10,
      category: "react",
      src: project8,
      screenshots: [
        proEight1,
        proEight2,
        proEight3,
        proEight4,
        proEight5,
        proEight6,
        proEight7
      ],
      title: "It's Antique",
      desc:
        "I am a history buff, and our history doesn't go that far back, even if we can't own many of the things, just being able to see them is worth. Used React, Redux and Node.js along with Express to make the application. Used Strapi Headless CMS and Cloudinary for images and Stripe for payment gateway.",
      stack:
        "html, css, react, redux, javascript, node.js, mongodb, express.js, netlify, cloudinary, strapi,stripe",
      demoUrl: "https://its-antique.netlify.app/",
      githubUrl: "https://github.com/PriyangaV/it-s-antiques"
    },
    {
      id: 11,
      category: "angular",
      src: project11,
      screenshots: [proEleven1, proEleven2, proEleven3],
      title: "Quick Note",
      desc:
        " The purpose of this application is to learn Angular. It's a simple website displaying quick notes.",
      stack: "html, css, angular",
      demoUrl: "-",
      githubUrl: "https://github.com/PriyangaV/quick-note"
    }
  ];

  const [open, setOpen] = useState(true);

  useEffect(() => {
    function bodyScrollingToggle() {
      document.body.classList.toggle("hidden-scrolling");
    }
    // document.addEventListener("DOMContentLoaded", function () {
    const filterContainer = document.querySelector(".portfolio-filter"),
      portfolioItemsContainer = document.querySelector(".portfolio-items"),
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      popup = document.querySelector(".portfolio-popup"),
      prevBtn = popup.querySelector(".pp-prev"),
      nextBtn = popup.querySelector(".pp-next"),
      closeBtn = popup.querySelector(".pp-close"),
      projectDetailsContainer = popup.querySelector(".pp-details"),
      projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

    let itemIndex, slideIndex, screenshots;

    /* filter portfolio items */
    filterContainer.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")
      ) {
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const target = event.target.getAttribute("data-target");
        portfolioItems.forEach((item) => {
          if (
            target === item.getAttribute("data-category") ||
            target === "all"
          ) {
            item.classList.remove("hide");
            item.classList.add("show");
          } else {
            item.classList.remove("show");
            item.classList.add("hide");
          }
        });
      }
    });

    portfolioItemsContainer.addEventListener("click", (event) => {
      if (event.target.closest(".portfolio-item-inner")) {
        const portfolioItem = event.target.closest(".portfolio-item-inner")
          .parentElement;
        // get the portfolioItem index
        itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(
          portfolioItem
        );
        screenshots = portfolioItems[itemIndex]
          .querySelector(".portfolio-item-img img")
          .getAttribute("data-screenshots");
        // convert screenshots into an array
        screenshots = screenshots.split(",");
        if (screenshots.length === 1) {
          prevBtn.style.display = "none";
          nextBtn.style.display = "none";
        } else {
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
        }
        slideIndex = 0;
        popupToggle();
        popupSlideShow();
        popupDetails();
      }
    });

    closeBtn.addEventListener("click", () => {
      popupToggle();
      if (projectDetailsContainer.classList.contains("active")) {
        popupDetailsToggle();
      }
    });

    function popupToggle() {
      popup.classList.toggle("open");
      popupDetailsToggle();
      bodyScrollingToggle();
    }

    function popupSlideShow() {
      const imgSrc = screenshots[slideIndex];
      const popupImg = popup.querySelector(".pp-img");
      // activate the loader until the popupImg loaded
      popup.querySelector(".pp-loader").classList.add("active");
      popupImg.src = imgSrc;
      popupImg.onload = () => {
        // deactivate loader after the popupImg loaded
        popup.querySelector(".pp-loader").classList.remove("active");
      };
      popup.querySelector(".pp-counter").innerHTML =
        slideIndex + 1 + " of " + screenshots.length;
    }

    // next slide
    nextBtn.addEventListener("click", () => {
      if (slideIndex === screenshots.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      popupSlideShow();
    });

    // prev slide
    prevBtn.addEventListener("click", () => {
      if (slideIndex === 0) {
        slideIndex = screenshots.length - 1;
      } else {
        slideIndex--;
      }
      popupSlideShow();
    });

    function popupDetails() {
      // if portfolio-item-details not exists
      if (!portfolioItems[itemIndex].querySelector(".portfolio-item-details")) {
        projectDetailsBtn.style.display = "none";
        return; // end function execution
      }
      projectDetailsBtn.style.display = "block";
      //  get the project details, title and category
      const details = portfolioItems[itemIndex].querySelector(
        ".portfolio-item-details"
      ).innerHTML;
      const title = portfolioItems[itemIndex].querySelector(
        ".portfolio-item-title"
      ).innerHTML;
      const category = portfolioItems[itemIndex].getAttribute("data-category");

      // set the project details, title and category
      popup.querySelector(".pp-project-details").innerHTML = details;
      popup.querySelector(".pp-title h2").innerHTML = title;
      popup.querySelector(".pp-project-category").innerHTML = category
        .split("-")
        .join(", ");
    }

    projectDetailsBtn.addEventListener("click", () => {
      popupDetailsToggle();
    });

    function popupDetailsToggle() {
      if (projectDetailsContainer.classList.contains("active")) {
        setOpen(false);
        projectDetailsContainer.classList.remove("active");
        projectDetailsContainer.style.maxHeight = 0 + "px";
      } else {
        setOpen(true);
        projectDetailsContainer.classList.add("active");
        projectDetailsContainer.style.maxHeight = "700px";
      }
    }
    // });
  }, []);
  return (
    <>
      <section className='portfolio section' id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='section-title animate-top'>
              <h2 data-heading='portfolio'>Latest Works</h2>
              <div className='lines'>
                <div className='diamond'></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='portfolio-filter'>
              <span className='filter-item active' data-target='all'>
                all
              </span>
              <span className='filter-item' data-target='html-css-js'>
                Html, CSS & JS
              </span>
              <span className='filter-item' data-target='react'>
                React
              </span>
              <span className='filter-item' data-target='angular'>
                Angular
              </span>
              <span className='filter-item' data-target='vue'>
                Vue
              </span>
            </div>
          </div>
          <div className='row portfolio-items'>
            {portfolioArray.map((pp) => {
              return (
                <div
                  key={pp.id}
                  className='portfolio-item animate-top'
                  data-category={pp.category}
                >
                  <div className='portfolio-item-inner'>
                    <div className='portfolio-item-img'>
                      <img
                        src={pp.src}
                        alt={pp.title}
                        data-screenshots={pp.screenshots}
                      />
                      <span className='view-project'>Read More</span>
                    </div>
                    <p className='portfolio-item-title'>{pp.title}</p>
                    <div className='portfolio-item-details'>
                      <div className='row'>
                        <div className='description'>
                          <h3>About the Project:</h3>
                          <p>{pp.desc}</p>
                        </div>
                        <div className='info'>
                          <h3>Project Info</h3>
                          <ul>
                            <li>
                              Used Stack - <span>{pp.stack}</span>
                            </li>
                            <li>
                              Live Demo -{" "}
                              <span>
                                <a
                                  target='_blank'
                                  rel='noreferrer'
                                  href={pp.demoUrl}
                                >
                                  {pp.title}
                                </a>
                              </span>
                            </li>
                            <li>
                              Source Code -{" "}
                              <span>
                                <a
                                  target='_blank'
                                  rel='noreferrer'
                                  href={pp.githubUrl}
                                >
                                  Github
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* popup */}
      <div className='pp portfolio-popup'>
        <div className='pp-details-section-inner'>
          <div className='pp-heading'>
            <div className='pp-project-details-btn'>
              Project Details
              {open ? <FaMinus /> : <FaPlus />}
            </div>
            <div className='pp-close'>
              <FaTimes />
            </div>
          </div>
          <div className='pp-details'>
            <div className='pp-details-inner'>
              <div className='pp-title'>
                <h2>Personal Portfolio</h2>
                <p>
                  <span className='pp-project-category'>HTML, CSS & JS</span>
                </p>
              </div>
              <div className='pp-project-details'>
                <div className='row'>
                  <div className='description'>
                    <h3>About the Project:</h3>
                    <p>
                      Every beginner’s coding journey in frontend starts with
                      html and css and the best way to learn them is by
                      practice. I found this site on the internet and did
                      recreate using html, css and a little bit of javascript.
                    </p>
                  </div>
                  <div className='info'>
                    <h3>Project Info</h3>
                    <ul>
                      <li>
                        Used Stack - <span>xyz</span>
                      </li>
                      <li>
                        Source Code -
                        <span>
                          <button>Github</button>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='separator'></div> */}

        <div className='pp-main'>
          <div className='pp-main-inner'>
            <img src='' alt='pp' className='pp-img' />
            <div className='pp-counter'>1 of 1</div>
          </div>
          <div className='pp-loader'>
            <div></div>
          </div>
          <div className='pp-prev'>
            <FaPlay />
          </div>
          <div className='pp-next'>
            <FaPlay />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
