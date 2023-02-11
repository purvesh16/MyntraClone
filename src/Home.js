import React from "react";
import Carousal from "./componets/Carousal";
import { homedata } from "./data/HomeData";
import Swiperr from "./componets/Swiperr";
import Heading from "./componets/Heading";
import styled from "styled-components";

// import required modules

const Home = () => {
  return (
    <div>
      <Carousal />
      <Heading heading="Budget Deals" />
      <Swiperr arr={homedata} />
    </div>
  );
};

export default Home;
