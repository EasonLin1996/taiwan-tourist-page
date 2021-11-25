import React from 'react';
import Slider from "react-slick";
import styles from './AutoPlaySilder.module.scss';
import banner01 from '../../assets/images/banner-01.png';

export const AutoPlaySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    nextArrow: false,
    prevArrow: false
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        <div>
          <img src={banner01} />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}
