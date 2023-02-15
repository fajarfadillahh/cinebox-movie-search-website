import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 mx-auto w-full max-w-[1440px]">
      <div className="container flex h-24 items-center justify-center border-b-2 border-gray-300">
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
