import React from "react";
import "./slider.css";
import Slideroption from "../Slideroption/Slideroption";
import {
  GraphicsAndLogo,
  DigitalMarketing,
  WritingAndTranslation,
  MusicAndAudio,
} from "../../utils/dropDownOption";
function Slider() {
  return (
    <div className="slider  animate__animated animate__flipInX">
      <Slideroption
        heading={true}
        showDropDown={GraphicsAndLogo}
        link="Graphic & design"
      />

      <Slideroption showDropDown={DigitalMarketing} link="Digital Marketing" />
      <Slideroption
        showDropDown={WritingAndTranslation}
        link="Writting & Translation"
      />
      <Slideroption showDropDown={MusicAndAudio} link="Video & Animation" />
      <Slideroption showDropDown={MusicAndAudio} link="Music & Video" />
      <Slideroption showDropDown={MusicAndAudio} link="Programming & Tech" />
      <Slideroption showDropDown={MusicAndAudio} link="Business" />
      <Slideroption showDropDown={MusicAndAudio} link="Lifestyle" />
      <Slideroption
        heading={true}
        showDropDown={GraphicsAndLogo}
        link="Industries"
      />
    </div>
  );
}

export default Slider;
