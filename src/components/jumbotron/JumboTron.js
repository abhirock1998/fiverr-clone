import React from "react";
import "./jumbotron.css";
import { JumboTronContent } from "../../utils/jumboContent";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
function JumboTron() {
  return (
    <div className="jumboTron">
      <div className="jumboTron__left">
        <h2>A Whole world of freelance talent at your fingertips</h2>
        {JumboTronContent.map((e) => (
          <div key={e.heading} className="jumboTron__leftHeading">
       
            <h6>
              <CheckCircleOutlineIcon />
             {e.heading}
            </h6>
            <p>{e.small}</p>
          </div>
        ))}
      </div>
      <div className="jumboTron__right">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
          alt="jumbotron"
        />
      </div>
    </div>
  );
}

export default JumboTron;
