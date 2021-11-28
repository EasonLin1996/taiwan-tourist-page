import React from 'react';
import styles from './HomePage.module.scss';
import { Row, Col, Carousel } from 'antd';
import { Header, Footer, Weather, CardCategory, AutoPlaySlider, RecommendAttract, RecommendActivity } from '../../components';
import banner01 from '../../assets/images/banner-01.png';
import imgLogo from '../../assets/images/logo-1.png';
import cardAttraction from '../../assets/images/cardAttraction.png';
import cardFood from '../../assets/images/cardFood.png';
import cardTransport from '../../assets/images/cardTransport.png';
import cardHousing from '../../assets/images/cardHousing.png';

// const mockWeatherData = [{
//   name: "台北市",
//   temp: 25,
// }, {
//   name: "新北市",
//   temp: 25,
// }, {
//   name: "花蓮縣",
//   temp: 25,
// }, {
//   name: "澎湖市",
//   temp: 25,
// }, {
//   name: "基隆市",
//   temp: 25,
// }, {
//   name: "台中市",
//   temp: 25,
// }, {
//   name: "高雄市",
//   temp: 25,
// }, {
//   name: "桃園市",
//   temp: 25,
// }, {
//   name: "新竹市",
//   temp: 25,
// }, {
//   name: "台南市",
//   temp: 25,
// }, {
//   name: "南投市",
//   temp: 25,
// }, {
//   name: "宜蘭市",
//   temp: 25,
// }, {
//   name: "苗栗市",
//   temp: 25,
// }]

const cardData = [{
  title: "景點",
  imgUrl: cardAttraction,
}, {
  title: "美食",
  imgUrl: cardFood,
}, {
  title: "住宿",
  imgUrl: cardHousing,
}, {
  title: "交通",
  imgUrl: cardTransport,
}]

export const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <AutoPlaySlider />
      </div>
      <div className="page-content">
        <RecommendAttract />
      </div>
      <div className="page-content">
        <RecommendActivity />
      </div>
      <Footer />
    </>
  )
}
