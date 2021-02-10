import React from "react";
import "./slideroption.css";
function Slideroption({ link, showDropDown, heading = false }) {
  return (
    <div className={`${heading?'sliderOption':'sliderOptionFlex'}`}>
      <a href="/">{link}</a>
      <div
        className={`${
          heading
            ? "sliderOption__dropDownContainer"
            : "sliderOption__dropDownContainerFlex"
        }`}
      >
        {heading
          ? showDropDown.map((item) => (
              <div
                style={{ marginTop: `${item.top}` }}
                className="sliderOption__dropDownContent"
              >
                <h4>{item.heading}</h4>
                {item.content.map((e) => (
                  <a href={e.url}>{e.link}</a>
                ))}
              </div>
            ))
          : showDropDown?.map((option) => (
              <div key={option.link} className="sliderOption__dropDownContent">
                <a style={{padding:"0px"}} href={option.url}>
                  {option.link} 
                 
                </a>
              
              </div>
            ))}
      </div>
    </div>
  );
}

export default Slideroption;
