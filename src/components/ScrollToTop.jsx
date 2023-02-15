import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    });
  }, []);

  const visibleScrollHandle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-6 z-50 inline-flex cursor-pointer bg-blue-600 p-3 text-[1.2rem] text-white transition-all duration-400 hover:bg-blue-700 ${
        scrollVisible ? "bottom-12" : "-bottom-full"
      }`}
      onClick={visibleScrollHandle}
    >
      <RiArrowUpLine />
    </div>
  );
};

export default ScrollToTop;
