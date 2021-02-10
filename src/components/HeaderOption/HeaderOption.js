import React from "react";
import "./headeroption.css";
function HeaderOption({ title, Icon, show,white}) {
  return (
    <div style={{color:`${white?'#62646a':'#fff'}`}}  className="headerOption">
      {show && <Icon className="hedaerOption__icons" />}
      <a   style={{color:`${white?'#62646a':'#fff'}`}}  href="/">
        {title}
      </a>
    </div>
  );
}

export default HeaderOption;
