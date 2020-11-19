import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      // preloader
      document.querySelector(".preloader").classList.add("fade-out");
      setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
      }, 1000);
    });
  }, []);
  return (
    <div className='preloader'>
      <div className='box'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
