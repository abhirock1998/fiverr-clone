import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./inspired.css";
import { inspiredContent } from "../../utils/inspiredContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function Inspired() {
  const [inspires, setInspire] = useState([]);

  useEffect(() => {
    setInspire(inspiredContent.map((e) => e));
  }, []);
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="inspired">
      <h2>
        Get inspired with projects made by our freelancers{" "}
        <a
          href="https://www.irctc.co.in/nget/error"
          className="inspired__seeMore"
        >
          See More Projects <ArrowForwardIosIcon fontSize="small" />
        </a>
      </h2>
      <div className="inspired__container">
        <Slider {...settings}>
          {inspires.map((e) => (
            <div key={e.id} className="inspired__containerCard">
              <img src={e.image} alt={e.a1} />
              <div className="inspired__containercardText">
                <Avatar src={e.Avatar} />
                <div className="inspired__containerCardTextName">
                  <b>
                    <a href="https://www.irctc.co.in/nget/error">{e.a1}</a>
                  </b>
                  <br />
                  <a href="https://www.irctc.co.in/nget/error">{e.a2}</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Inspired;
//
