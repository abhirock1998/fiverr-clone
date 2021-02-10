import React, { useEffect, useState } from "react";
import "./review.css";
import { ReviewContent } from "../../utils/reviewContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Review() {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    setReview(ReviewContent.map((e) => e));
  }, []);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review__box">
            <div className="review__left">
              <img src={review.img} alt="" />
            </div>
            <div className="review__right">
              <h5>
                {review.name}
                
                  {""}  | <img src={review.nameImage} alt="" />
                
              </h5>
              <blockquote>
                <i>{review.message}</i>
              </blockquote>
            </div>
          </div>
        ))}
      </Slider>
    
  );
}

export default Review;

// <div className="review">
//       <IconButton className="review__btn review__btn--left">
//         <ArrowBackIosIcon />
//       </IconButton>
//      {reviews.map(review =>  <div className="review__box">
//       <div className="review__left">
//           <img src={review.img} alt="review" />
//         </div>
//         <div className="review__right">
//           <h5>
//             {review.name}
//             <span>
//               | <img src={review.nameImage} alt="" />
//             </span>
//           </h5>
//           <blockquote>
//             <i>{review.message}</i>
//           </blockquote>
//         </div>
//       </div>)}
//       <IconButton className="review__btn review__btn--right">
//         <ArrowForwardIosIcon />
//       </IconButton>
//     </div>
