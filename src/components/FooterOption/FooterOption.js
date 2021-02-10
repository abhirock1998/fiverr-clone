import React, { useState } from "react";
import "./footeroption.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";

function FooterOption({ option }) {
  const [show, setShow] = useState(false);
  const toggle = () => {

    setShow(!show);
 
  };
  return (
    <div className="footerOption">
      {option?.map((e) => (
        <div key={e.heading} className="footerOption__content">
          <div onClick={ toggle} className="footerOption__contentHeading">
      
            <h6>{e.heading}</h6>
            <IconButton >
              <ExpandMoreIcon style={{transform:`${show?'rotate(180deg)':'rotate(0deg)'}`}}/>
            </IconButton>
          </div>
          {e.content.map((e) => (
            <a key={e.link} className="footerOption__contentAnchor" href={e.url}>
              {e.link}
            </a>
          ))}
          {show &&
            e.content.map((e) => (
              <a  key={e.link} className="footerOption__contentAnchorSmall" href={e.url}>
                {e.link}
              </a>
            ))}
        </div>
      ))}
    </div>
  );
}

export default FooterOption;
