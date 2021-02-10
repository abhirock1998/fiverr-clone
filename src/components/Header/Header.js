import { Button } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LanguageIcon from "@material-ui/icons/Language";
import "./header.css";
import HeaderOption from "../HeaderOption/HeaderOption";
import Search from "../SearchBar/Search";
function Header() {
  const [slide, setSlide] = useState(false);

  const change = () => {
    if (window.scrollY > 80) {
      setSlide(true);
    } else {
      setSlide(false);
    }
  };
  window.addEventListener("scroll", change);

  return slide ? (
    <div className="header--scroll">
      <MenuIcon  fontSize='large' className='header--scrollMenu'  />
      <div className="header__logo--scroll">
        <img src="/images/fiverr.png" alt="fiverr-logo" />
      </div>
    
     <Search placeholder='Find Services' border={true} />
   
      <div className="header__options">
      <HeaderOption white={true} title="Fiverr Business" />
  <HeaderOption white={true} title="Explore" />
<HeaderOption
          white={true}
          title="English"
          show={true}
          Icon={LanguageIcon}
        />
        <HeaderOption
          white={true}
          title="Inr"
          show={true}
          Icon={AttachMoneyIcon}
        />
        <HeaderOption white={true} title="Become a seller" />
        <HeaderOption white={true} title="Sign in" />
      

        <Button className="header__optionsButton--scroll" variant="outlined">
          Join
        </Button>
      </div>
    </div>
  ) : (
    <div className="header">
       <MenuIcon fontSize='large' className='header--scrollMenu'  />
      <div className="header__logo">
        <img src="/images/fiverr.png" alt="fiverr-logo" />
      </div>
      <div className="header__options">
    
       <HeaderOption  title="Fiverr Business" />
        <HeaderOption title="Explore" />
        <HeaderOption  title="English" show={true} Icon={LanguageIcon} />
        <HeaderOption  title="Inr" show={true} Icon={AttachMoneyIcon} />
        <HeaderOption title="Become a seller" />
        <HeaderOption title="Sign in" />
        
       

        <Button className="header__optionsButton" variant="outlined">
          Join
        </Button>
      </div>
    </div>
  );
}

export default Header;
