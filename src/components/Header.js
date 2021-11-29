import React from "react";
import { Link } from "react-router-dom";
import style from "../pages/PublicPages/Styles/Homepage.module.css";
import logo from "../Assets/logo.png";
import { useScrollSection } from "react-scroll-section";

export default function Header() {
  const homeSection = useScrollSection("home");
  const howSection = useScrollSection("how");
  const aboutSection = useScrollSection("about");
  return (
    <>
      <header className={`${style.header} bg-white shadow`}>
        <input type="checkbox" id={style.checkbox} />
        <div className={`${style.logo} flex gap-2`}>
          <img src={logo} alt="" className="w-auto h-10" />
          <span>
            trust<span className="text-yellow-500">pay</span>
          </span>
        </div>
        <label htmlFor={style.checkbox} className={style.menuicon}>
          <span className={style.navicon}></span>
        </label>
        <ul className={style.menu}>
          <div className={style.menulists}>
            <li onClick={homeSection.onClick} selected={homeSection.selected}>
              <Link to="/">HOME</Link>
            </li>
            <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
              <Link to="/#about">ABOUT</Link>
            </li>
            <li>
              <Link to="/Pricing">PRICING</Link>
            </li>
            <li onClick={howSection.onClick} selected={howSection.selected}>
              <Link to="/#howitworks">HOW IT WORKS</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">
            <Link to="/login">
              <button className="px-14 py-3 border mb-3 border-white text-white md:text-purple-700 font-extrabold ">
                Login
              </button>
            </Link>
            {/* <Link to="/register">
              <button className="px-8 py-3 border mb-3 border-white md:bg-purple-700 md:text-white rounded-md">
                Signup
              </button>
            </Link> */}
          </div>
        </ul>
      </header>
    </>
  );
}
