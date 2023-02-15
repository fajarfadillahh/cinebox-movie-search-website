import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    });
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 mx-auto w-full max-w-[1440px] transition ${
        stickyHeader
          ? "bg-white/80 backdrop-blur-md"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="container flex h-24 items-center justify-center">
        <Link to="/" className="section-title text-[24px]">
          Cinebox<span className="text-blue-600">.</span>
        </Link>

        <div className="absolute right-[10%] cursor-pointer">
          <span className="inline-flex text-[1.5rem]">🌙</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
