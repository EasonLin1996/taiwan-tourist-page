import React from 'react';
import Slider from "react-slick";
import styles from './AutoPlaySilder.module.scss';
import banner01 from '../../assets/images/background/banner-01.png';
import banner02 from '../../assets/images/background/banner-2.png';
import banner03 from '../../assets/images/background/banner-3.png';
import banner04 from '../../assets/images/background/banner-4.png';
import banner05 from '../../assets/images/background/banner-5.png';
import banner06 from '../../assets/images/background/pexels-tsang-chung-yee-669963.jpg';

const imgUrlAry = [
  {
    imgUrl: banner01
  }, {
    imgUrl: banner02
  }, {
    imgUrl: banner03
  }, {
    imgUrl: banner04
  }, {
    imgUrl: banner05
  }, {
    imgUrl: banner06
  }
]

interface SliderPropsType {
  imgUrl: string;
}

const CustomSlide = (props: SliderPropsType) => {
  const { imgUrl, ...args } = props;
  return (
    <div className={styles.sliderImgBox}>
      <img src={imgUrl} alt={`banner`} />
    </div>
  );
}

export const AutoPlaySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          bottom: 0,
          color: "#fff",
        }}
      >
        <ul style={{ margin: "0px", color: "#fff" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      {
        imgUrlAry.map((item, index) => (
          <CustomSlide key={item.imgUrl} imgUrl={item.imgUrl} />
        ))
      }
    </Slider>
  )
}
