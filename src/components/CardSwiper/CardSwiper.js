import React, { useEffect, useState } from "react";
import "./cardswiper.css";
import { CardSwiperContent } from "../../utils/cardSwiperContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function CardSwiper() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(CardSwiperContent.map((e) => e));
  }, []);
  var settings = {
    infinite: true,
    speed: 500,

    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          speed: 500,

          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 968,
        settings: {
          infinite: true,
          speed: 500,

          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          speed: 500,
        
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          infinite: true,
          speed: 500,
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

 
  return (
    <div className="cardSwiper">
      <h2>Popular proffesional services</h2>
      <div className="cardswiper__cardContainer">
        <Slider {...settings}>
          {card?.map((e) => (
            <div key={e.small} className="cardSwiper__card">
              <img src={e.image} alt={e.small} />
              <div className="cardSwiper__cardText">
                <p>
                  <small>{e.small}</small>
                </p>
                <h4>{e.heading}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardSwiper;
