import React from 'react';
import styles from './HomePage.module.scss';
import { Header, Footer, Weather } from '../../components';
import Imgbackground01 from '../../assets/images/homePageBackground01.png';
import imgLogo from '../../assets/images/logo-1.png';

const mockWeatherData = [{
  name: "台北市",
  temp: 25,
}, {
  name: "新北市",
  temp: 25,
}, {
  name: "花蓮縣",
  temp: 25,
}, {
  name: "澎湖市",
  temp: 25,
}, {
  name: "基隆市",
  temp: 25,
}, {
  name: "台中市",
  temp: 25,
}, {
  name: "高雄市",
  temp: 25,
}, {
  name: "桃園市",
  temp: 25,
}, {
  name: "新竹市",
  temp: 25,
}, {
  name: "台南市",
  temp: 25,
}, {
  name: "南投市",
  temp: 25,
}, {
  name: "宜蘭市",
  temp: 25,
}, {
  name: "苗栗市",
  temp: 25,
}]

export const HomePage = () => {
  return (
    <>
      <Header isShowLogo={false} />
      <div>
        <div className={styles.banner}>
          <div style={{ width: 300 }}>
            <img src={imgLogo} alt="imgLogo" />
          </div>
        </div>
        <Weather weatherInfos={mockWeatherData} />
      </div>
      <Footer />
    </>
  )
}
