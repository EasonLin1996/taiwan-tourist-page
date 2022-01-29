import React from 'react';
import { Typography, Row, Col } from 'antd';
import Slider from "react-slick";
import { isEmpty } from 'lodash';
import imgFood01 from '../../assets/images/homepage/food-01.png';
import imgFood02 from '../../assets/images/homepage/food-02.png';
import imgFood03 from '../../assets/images/homepage/food-03.png';
import imgFood04 from '../../assets/images/homepage/food-04.png';
import imgFood05 from '../../assets/images/homepage/food-05.png';
import imgFood06 from '../../assets/images/homepage/food-06.png';
import imgFood07 from '../../assets/images/homepage/food-07.png';
import iconArrow from '../../assets/images/homepage/arrow.svg';
import styles from './RecommendFood.module.scss';
import Item from 'antd/lib/list/Item';

const recommendFoodList = [
  {
    title: "祥發海產餐廳",
    descrip: "位面對東石舊漁港，堤防外有一長排竹蚵屋，是每日青蚵嫂集體剖蚵的好所在，所以在祥發用餐，不但可以品嚐美味，還可以欣賞當地人文風景及剝蚵的光景。",
    imgUrl: imgFood02,
    link: "/",
  }, {
    title: "鄭記香腸",
    descrip: "位於小琉球的老街上，最古早的鄭記琉球香腸老店創立於民國43年，已成為小琉球當地的名產之一。",
    imgUrl: imgFood01,
    link: "/",
  }, {
    title: "石碇一粒粽",
    descrip: "粽子主打不油膩、吃了不脹氣，且選用最優質的材料，其中又以桂花粽最為特別，將整朵桂花加入粽子做調味，品嘗粽子的同時也能嚐到桂花香。",
    imgUrl: imgFood03,
    link: "/",
  }, {
    title: "兩支北方麵食館",
    descrip: "專營北方麵食點心，從各式蒸餃、牛肉麵、酸辣麵等風味佳餚，堅持道地美味的執著，從醒麵、桿皮、包餡到成品，每一個環節都是對客戶的尊重與責任。",
    imgUrl: imgFood04,
    link: "/",
  }, {
    title: "阿妃健康廚房",
    descrip: "每顆水餃從肉餡、使用豐富的蔬菜、調味料的比例、水餃皮的手感與功夫，層層步驟讓水餃能兼具口感與高纖維，也讓營養價值更高。",
    imgUrl: imgFood05,
    link: "/",
  }, {
    title: "鶴岡紅茶舖",
    descrip: "店內販售花蓮瑞穗有機生態農場所種植的有機茶，坐下品嚐一杯香甜回甘的好茶，可以讓人暫時放掉煩惱，享受純淨的片刻。",
    imgUrl: imgFood06,
    link: "/",
  }, {
    title: "三家村陽春麵",
    descrip: "餐點上桌前，將佐料瑤舀進碗內，再加入一大早熬製的大骨高湯，最後放進麵條，保持麵體彈性口感不軟爛。",
    imgUrl: imgFood07,
    link: "/",
  },
]

interface SliderPropsType {
  imgUrl: string;
  title: string;
  descrip: string;
  link: string
}

const CustomSlide = (props: SliderPropsType) => {
  const { imgUrl, title, descrip, link, ...args } = props;
  return (
    <div style={{ padding: "0 8px" }}>
      <a href={link} className={`pos-rel ${styles.sliderImgBox}`}>
        <img src={imgUrl} alt={`banner`} />
        <div className={styles['sliderImgBox-txtbox']}>
          <h5>{title}</h5>
          <p>{descrip}</p>
        </div>
      </a>
    </div>
  );
}

export const RecommendFood: React.FC = () => {
  const settings = {
    className: styles.slider,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: false,
    centerMode: true,
    arrows: false,
    pauseOnHover: true,
    cssEase: "linear"
  };
  return (
    <>
      <div className="container">
        <Row className={styles['txt-box']}>
          <Col span={12}>
            <h2 className="homepage-subtitle txt-green">Explore</h2>
            <h1 className="homepage-title txt-gray">享受在地獨特風味</h1>
          </Col>
          <Col span={12} className={styles['desc-box']}>
            <p className="homepage-descirbe" style={{ margin: 0 }}>充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。</p>
            <a href="#" className="homepage-link">
              享用更多美食
              <img src={iconArrow} alt="linkIcon" />
            </a>
          </Col>
        </Row>
        <div>
        </div>
      </div>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {
            recommendFoodList.map((item) => (
              <div key={item.title}>
                <CustomSlide imgUrl={item.imgUrl} title={item.title} descrip={item.descrip} link={item.link} />
              </div>
            ))
          }
        </Slider>
      </div>
    </>
  )
}
