import React, { useEffect, useState } from "react";
import { FaCogs, FaMoon, FaSun } from "react-icons/fa";

const Themes = () => {
  const themesArray = [
    {
      id: 1,
      className: "color-1"
    },
    {
      id: 2,
      className: "color-2"
    },
    {
      id: 3,
      className: "color-3"
    },
    {
      id: 4,
      className: "color-4"
    },
    {
      id: 5,
      className: "color-5"
    },
    {
      id: 6,
      className: "color-6"
    }
  ];

  const [darkMode, setDarkMode] = useState(false);

  /*---------------------- Theme colors -----------------------*/
  const alternateStyles = document.querySelectorAll(".alternate-styles");
  const setActiveStyle = (color) => {
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
        if (
          document.querySelector(".theme-chooser").classList.contains("open")
        ) {
          document.querySelector(".theme-chooser").classList.remove("open");
        }
      } else {
        style.setAttribute("disabled", true);
      }
    });
  };

  useEffect(() => {
    /*---------------------- Toggle theme chooser -----------------------*/

    const styleToggler = document.querySelector(".style-toggler");
    styleToggler.addEventListener("click", () => {
      document.querySelector(".theme-chooser").classList.toggle("open");
    });

    // hide theme chooser on scroll
    window.addEventListener("scroll", () => {
      if (document.querySelector(".theme-chooser").classList.contains("open")) {
        document.querySelector(".theme-chooser").classList.remove("open");
      }
    });

    /*---------------------- Light and dark mode -----------------------*/

    let darkMode = localStorage.getItem("darkMode");
    const dayNight = document.querySelector(".day-night");

    const enableDarkMode = () => {
      document.body.classList.toggle("dark");
      setDarkMode(true);
      localStorage.setItem("darkMode", "enabled");
    };
    const disableDarkMode = () => {
      document.body.classList.remove("dark");
      setDarkMode(false);
      localStorage.setItem("darkMode", null);
    };

    if (darkMode === "enabled") {
      enableDarkMode();
    }

    dayNight.addEventListener("click", () => {
      darkMode = localStorage.getItem("darkMode");
      darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
    });

    window.addEventListener("load", () => {
      if (document.body.classList.contains("dark")) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    });
  }, []);
  return (
    <>
      <div className='theme-chooser'>
        <h4>Theme Colors</h4>
        <div className='colors'>
          {themesArray.map((theme) => {
            return (
              <span
                key={theme.id}
                className={theme.className}
                onClick={() => setActiveStyle(theme.className)}
              ></span>
            );
          })}
        </div>
        <div className='style-toggler s-icon'>
          <FaCogs />
        </div>
        <div className='day-night s-icon'>
          {darkMode}
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </>
  );
};

export default Themes;
