import { useEffect } from "react";

import Header from "./pages/header";
import Navbar from "./pages/navbar";
import About from "./pages/about";
import Services from "./pages/services";
import Journey from "./pages/journey";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Themes from "./pages/themes";
import Loader from "./pages/loader";
import { useHistory } from "react-router-dom";

const App = () => {
  let history = useHistory();
  useEffect(() => {
    const addClassOnScroll = function (event) {
      const windowTop = window.scrollY;
      const element = event.target;
      document.querySelectorAll("section[id]").forEach(function (elem) {
        let offsetTop = elem.offsetTop;
        let outerHeight = elem.offsetHeight;
        if (windowTop > offsetTop - 62 && windowTop < offsetTop + outerHeight) {
          let elemId = elem.getAttribute("id");
          document.querySelector("nav ul li a.selected") &&
            document
              .querySelector("nav ul li a.selected")
              .classList.remove("selected");
          document.querySelector("nav ul li a[href='#/" + elemId + "']") &&
            document
              .querySelector("nav ul li a[href='#/" + elemId + "']")
              .classList.add("selected");
          history.replace(`${elemId}`);
        }

        // home selected
        if (windowTop === 0) {
          document.querySelector("nav ul li a.selected") &&
            document
              .querySelector("nav ul li a.selected")
              .classList.remove("selected");
          document.querySelector("nav ul li a[href='#/home']") &&
            document
              .querySelector("nav ul li a[href='#/home']")
              .classList.add("selected");
          history.replace("home");
        }

        // contact selected
        if (
          (element.documentElement && element.documentElement.scrollHeight) -
            (element.documentElement && element.documentElement.scrollTop) ===
          (element.documentElement && element.documentElement.clientHeight)
        ) {
          document.querySelector("nav ul li a.selected") &&
            document
              .querySelector("nav ul li a.selected")
              .classList.remove("selected");
          document.querySelector("nav ul li a[href='#/contact']") &&
            document
              .querySelector("nav ul li a[href='#/contact']")
              .classList.add("selected");
          history.replace("contact");
        }
      });
    };
    document.addEventListener("scroll", function (event) {
      addClassOnScroll(event);
    });
  }, [history]);
  return (
    <>
      <Loader />
      <Header />
      <Navbar />
      <About />
      <Services />
      <Journey />
      <Portfolio />
      <Contact />
      <Themes />
    </>
  );
};

export default App;
