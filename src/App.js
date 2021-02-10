import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/HeaderBanner/HeaderBanner";
import Multinational from "./components/MultiNationalCompanyLogo/Multinational";
import { Hero } from "./utils/Hero";
import Slider from "./components/Slider/Slider";
import CardSwiper from "./components/CardSwiper/CardSwiper";
import JumboTron from "./components/jumbotron/JumboTron";
import Explore from "./components/Explore/Explore";
import Business from "./components/Business/Business";
import Review from "./components/Review/Review";
import Inspired from "./components/Inspired/Inspired";
import Started from "./components/Started/Started";
import Footer from "./components/Footer/Footer";
import Bottom from "./components/Bottom/Bottom";

function App() {
  const [hero, setHero] = useState(Hero[0]);
  const [show, setShow] = useState(false);

  const showSlider = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    setInterval(() => {
      setHero(Hero[Math.floor(Math.random() * Hero.length)]);
    }, 20000);
  }, []);
  window.addEventListener("scroll", showSlider);

  return (
    <div className="app">
      <div
        className="app__top"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundColor: `${hero.color}`,
        }}
      >
        <Header />
        {show ? <Slider /> : null}
        <Banner />
        <div className="app__topName">
          <h3>{hero.name}</h3> ,<small>{hero.proffession}</small>
        </div>
      </div>
      <Multinational />
      <CardSwiper />
      <JumboTron />
      <Explore />
      <Business />
      <Review />
      <Inspired />
      <Started />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
