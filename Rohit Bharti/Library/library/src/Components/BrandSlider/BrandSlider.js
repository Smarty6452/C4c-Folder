import React, { Component } from "react";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import brand from "../../assets/img/brand.png";
import ronjone from "../../assets/img/RONJONES.png";
import goldengrid from "../../assets/img/goldengrid.png";
import golden from "../../assets/img/golden.png";
import climb from "../../assets/img/climb.png";
import ButtonBase from "@mui/material/ButtonBase";

export class BrandSlider extends Component {
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <ButtonBase
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          <GrPrevious />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <GrNext />
        </ButtonBase>
      </div>
    );
  };
  render() {
    return (
      <div className="slider">
        <div className="App m-auto">
          <div style={{ position: "relative", marginTop: "4rem" }}>
            {this.renderArrows()}
            <Slider
              ref={(c) => (this.slider = c)}
              dots={false}
              arrows={true}
              centerMode={true}
              slidesToShow={4}
            >
              <div className="b-link">
                <a href="/react/porto/demo17/shop/?brands=david">
                  <img src={brand} alt="cat" />
                </a>
              </div>
              <div className="b-link">
                <a href="/react/porto/demo17/shop/?brands=david">
                  <img src={ronjone} alt="cat" />
                </a>
              </div>
              <div className="b-link">
                <a href="/react/porto/demo17/shop/?brands=david">
                  <img src={goldengrid} alt="cat" />
                </a>
              </div>
              <div className="b-link">
                <a href="/react/porto/demo17/shop/?brands=david">
                  <img src={golden} alt="cat" />
                </a>
              </div>

              <div className="b-link">
                <a href="/react/porto/demo17/shop/?brands=david">
                  <img src={climb} alt="cat" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandSlider;
