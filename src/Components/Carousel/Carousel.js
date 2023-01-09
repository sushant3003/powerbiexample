import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={require("../../Resources/images/1.jpeg")} />
    </div>
    <div>
      <img alt="" src={require("../../Resources/images/2.jpeg")} />
    </div>
    <div>
      <img alt="" src={require("../../Resources/images/3.jpeg")} />
    </div>
    <div>
      <img alt="" src={require("../../Resources/images/4.jpeg")} />
    </div>
    <div>
      <img alt="" src={require("../../Resources/images/5.jpeg")} />
    </div>
    <div>
      <img alt="" src={require("../../Resources/images/6.jpeg")} />
    </div>  
    <div>
      <img alt="" src={require("../../Resources/images/7.jpeg")} />
    </div>  
  </Carousel>
);
