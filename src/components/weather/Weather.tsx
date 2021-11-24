import React from 'react';
import Slider from "react-slick";
import styles from './Weather.module.scss';
import cloudy from '../../assets/images/cloudy.png';
import { Typography } from 'antd';

interface PropsType {
  weatherInfos: any[];
}

const ArrowPrev = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const ArrowNext = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

export const Weather: React.FC<PropsType> = ({ weatherInfos }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />
  };
  return (
    <div className={styles.slider}>
      <div className="container">
        <Slider {...settings}>
          {
            weatherInfos.map((item) => (
              <div key={item.name} className={styles.sliderBox}>
                <Typography.Title level={5}>{item.name}</Typography.Title>
                <div className={styles.sliderImgBox}>
                  <img src={cloudy} alt="cloudy" />
                </div>
                <div className={styles.tempBox}>
                  <h5 className={styles.tempText}>{item.temp}</h5>
                  <p className={styles.tempUnit}>C</p>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}
