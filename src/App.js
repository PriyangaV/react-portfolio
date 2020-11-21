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
          document.querySelector(".nav-links li.home .active") &&
            document
              .querySelector(".nav-links li.home .active")
              .classList.remove("active");
          if (`#${elemId}` !== history.location.hash) {
            history.replace(`#${elemId}`);
          }
        }

        // home selected
        if (windowTop === 0) {
          if ("#home" !== history.location.hash) {
            history.replace("#home");
          }
        }

        // contact selected
        if (
          (element.documentElement && element.documentElement.scrollHeight) -
            (element.documentElement && element.documentElement.scrollTop) ===
          (element.documentElement && element.documentElement.clientHeight)
        ) {
          if ("#contact" !== history.location.hash) {
            history.replace("#contact");
          }
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
