import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link5Text: "Profile",
  searchIcon:"true",
  CartIconElement:"cart",
  profileIcon:"true",
  searchIconUrl: "/search",
  cartIconUrl:"/cart",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link5Url: "/login",
  profileIconUrl: "/login",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-end",
  nav4justifyContent: "flex-end",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  searchIconMargin:"0",
  profileIconMargin:"0",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  searchIconTransition:"0.5",
  cartIconTransition:"0.5",
  profileIconTransition:"0.5",
  searchIconAnimationTime:"2",
  cartIconAnimationTime:"searchIconAnimationTime + 0.5",
  profileIconAnimationTime:"cartIconAnimationTime + 0.5",

};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
