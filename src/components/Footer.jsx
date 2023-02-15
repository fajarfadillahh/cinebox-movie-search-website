import React from "react";
import { Link } from "react-router-dom";
import {
  RiYoutubeFill,
  RiTwitterFill,
  RiInstagramFill,
  RiGithubFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-8">
      <div className="container grid justify-items-center gap-8">
        <div className="flex items-center gap-6 md:gap-8">
          {[
            [<RiYoutubeFill />, "/"],
            [<RiTwitterFill />, "/"],
            [<RiInstagramFill />, "/"],
            [<RiGithubFill />, "/"],
          ].map(([title, url, index]) => {
            return (
              <Link
                key={index}
                to={url}
                className="inline-flex text-[1.8rem] font-medium text-gray-900 hover:text-blue-600"
              >
                {title}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          {[
            ["Conditions of Use", "/"],
            ["Privacy & Policy", "/"],
            ["Press Room of Use", "/"],
          ].map(([title, url, index]) => {
            return (
              <Link
                key={index}
                to={url}
                className="font-medium text-gray-900 hover:text-blue-600 hover:underline"
              >
                {title}
              </Link>
            );
          })}
        </div>

        <p className="section-text">&copy; Cinebox. | by Fajar Fadillah A</p>
      </div>
    </footer>
  );
};

export default Footer;
