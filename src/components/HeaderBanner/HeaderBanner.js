import React from "react";
import "./banner.css";
import { Button } from "@material-ui/core";
import Search from "../SearchBar/Search";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <h3>
          Find the perfect <i>freelance</i>
          <br />
          services for your business
        </h3>
      <Search placeholder='Try "Building mobile app"'/>
        <div className="banner__bottomOption">
          Popular:
          <Button variant="outlined">Web and Mobile Design</Button>
          <Button variant="outlined">Wordpress</Button>
          <Button variant="outlined">Logo Design</Button>
          <Button variant="outlined">Dropshipping</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;



