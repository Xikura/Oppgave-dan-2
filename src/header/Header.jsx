import React from "react";

import Button from "../button/Button";
import IconButton from "../iconButton/IconButton";
import Link from "../link/Link";

import "./Header.css";
import logo from "../resources/waffle-house-logo.png";
import searchIcon from "../resources/search-icon.svg";
import hamburgerMenuIcon from "../resources/hamburger-menu-icon.svg";

const dummyData = [
  { title: "Tjenester", url: "#", target: "_self" },
  { title: "Tilbud", url: "#", target: "_self" },
  { title: "Kontakt oss", url: "#", target: "_self" },
];

const Header = () => {
  const handleOnClick = (event) => {
    event.preventDefault();
    console.log("Clicked!");
  };

  return (
    <div className="header">
      <img src={logo} className="logo" alt="waffle house logo" />
      <div className="links">
        {dummyData.map((link, index) => {
            const {target, url, title} = link
          return (
            <Link url={url} target={target} title={title} key={`${title} ${index}`}/>
          );
        })}
      </div>
      <div className="buttons">
        <Button 
        buttonText="Bli medlem"
        onClickHandler={handleOnClick}
        />  
        <IconButton
        buttonText="Søk"
        altText="seach icon"
        src={searchIcon}
        onClickHandler={handleOnClick}
        />
        <IconButton
        buttonText="Meny"
        altText="hambuger menu icon"
        src={hamburgerMenuIcon}
        onClickHandler={handleOnClick}
        />
      </div>
    </div>
  );
};

export default Header;
