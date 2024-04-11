import React from "react";
import logo from "@/app/images/fairy.png";
import "@/app/styles/navbar.css";
import LinkText from "./LinkText";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-pink-600 p-6 sticky top-0 z-50">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight ml-5 font-mono">
            Finance Fairy
          </span>
          <img className="h-10 w-10 ml-5" src={logo.src}></img>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow lg:flex justify-center">
            <LinkText href="#">Home</LinkText>
            <LinkText href="#list">List</LinkText>
            <LinkText href="#categories">Categories</LinkText>
          </div>
          <div>
            <a
              href="#"
              className="font-mono inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
