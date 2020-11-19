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
          document.querySelector("nav ul li a.active") &&
            document
              .querySelector("nav ul li a.active")
              .classList.remove("active");
          document.querySelector("nav ul li a[href='/" + elemId + "']") &&
            document
              .querySelector("nav ul li a[href='/" + elemId + "']")
              .classList.add("active");
          history.push(`/${elemId}`);
        }

        // home active
        if (windowTop === 0) {
          document.querySelector("nav ul li a.active") &&
            document
              .querySelector("nav ul li a.active")
              .classList.remove("active");
          document.querySelector("nav ul li a[href='/home']") &&
            document
              .querySelector("nav ul li a[href='/home']")
              .classList.add("active");
          history.push("/home");
        }

        // contact active
        if (
          (element.documentElement && element.documentElement.scrollHeight) -
            (element.documentElement && element.documentElement.scrollTop) ===
          (element.documentElement && element.documentElement.clientHeight)
        ) {
          document.querySelector("nav ul li a.active") &&
            document
              .querySelector("nav ul li a.active")
              .classList.remove("active");
          document.querySelector("nav ul li a[href='/contact']") &&
            document
              .querySelector("nav ul li a[href='/contact']")
              .classList.add("active");
          history.push("/contact");
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
