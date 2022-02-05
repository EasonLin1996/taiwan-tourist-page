import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { IconHover } from '../../components';
import styles from './Header.module.scss';
import imgLogo from '../../assets/images/header-logo.png';
import initCampingIcon from '../../assets/images/headers/items=camping, hover=no.svg';
import hoverCampingIcon from '../../assets/images/headers/items=camping, hover=yes.svg';
import initCelebrationIcon from '../../assets/images/headers/items=celebration, hover=no.svg';
import hoverCelebrationIcon from '../../assets/images/headers/items=celebration, hover=yes.svg';
import initCentralIcon from '../../assets/images/headers/items=central, hover=no.svg';
import hoverCentralIcon from '../../assets/images/headers/items=central, hover=yes.svg';
import initDrinkIcon from '../../assets/images/headers/items=drink, hover=no.svg';
import hoverDrinkIcon from '../../assets/images/headers/items=drink, hover=yes.svg';
import initEastIcon from '../../assets/images/headers/items=east, hover=no.svg';
import hoverEastIcon from '../../assets/images/headers/items=east, hover=yes.svg';
import initExhitionIcon from '../../assets/images/headers/items=exhition, hover=no.svg';
import hoverExhitionIcon from '../../assets/images/headers/items=exhition, hover=yes.svg';
import initFamilyIcon from '../../assets/images/headers/items=family, hover=no.svg';
import hoverFamilyIcon from '../../assets/images/headers/items=family, hover=yes.svg';
import initFlowerIcon from '../../assets/images/headers/items=flower, hover=no.svg';
import hoverFlowerIcon from '../../assets/images/headers/items=flower, hover=yes.svg';
import initHistoryIcon from '../../assets/images/headers/items=history, hover=no.svg';
import hoverHistoryIcon from '../../assets/images/headers/items=history, hover=yes.svg';
import initHotSpringIcon from '../../assets/images/headers/items=hot-spring, hover=no.svg';
import hoverHotSpringIcon from '../../assets/images/headers/items=hot-spring, hover=yes.svg';
import initIsladnsIcon from '../../assets/images/headers/items=islands, hover=no.svg';
import hoverIsladnsIcon from '../../assets/images/headers/items=islands, hover=yes.svg';
import initMealIcon from '../../assets/images/headers/items=meal, hover=no.svg';
import hoverMealIcon from '../../assets/images/headers/items=meal, hover=yes.svg';
import initNorthIcon from '../../assets/images/headers/items=north, hover=no.svg';
import hoverNorthIcon from '../../assets/images/headers/items=north, hover=yes.svg';
import initOutdoorIcon from '../../assets/images/headers/items=outdoor, hover=no.svg';
import hoverOutdoorIcon from '../../assets/images/headers/items=outdoor, hover=yes.svg';
import initSnackIcon from '../../assets/images/headers/items=snack, hover=no.svg';
import hoverSnackIcon from '../../assets/images/headers/items=snack, hover=yes.svg';
import initSouthIcon from '../../assets/images/headers/items=south, hover=no.svg';
import hoverSouthIcon from '../../assets/images/headers/items=south, hover=yes.svg';
import initSouvenirIcon from '../../assets/images/headers/items=souvenir, hover=no.svg';
import hoverSouvenirIcon from '../../assets/images/headers/items=souvenir, hover=yes.svg';

import iconPerson from '../../assets/icons/personIcon.png';
import iconSearch from '../../assets/icons/searchIcon.png';

const { SubMenu } = Menu;

const headerList = [
  {
    name1: "找景點",
    name2: "ATTRACTION",
    link: "ScenicSpot",
    subMenu: [
      { name: "北台灣", initUrl: initNorthIcon, hoverUrl: hoverNorthIcon, link: "attraction" },
      { name: "中台灣", initUrl: initCentralIcon, hoverUrl: hoverCentralIcon, link: "attraction" },
      { name: "南台灣", initUrl: initSouthIcon, hoverUrl: hoverSouthIcon, link: "attraction" },
      { name: "東台灣", initUrl: initEastIcon, hoverUrl: hoverEastIcon, link: "attraction" },
      { name: "離島地區", initUrl: initIsladnsIcon, hoverUrl: hoverIsladnsIcon, link: "attraction" },
    ]
  },
  {
    name1: "找美食",
    name2: "DELICACY",
    link: "Restaurant",
    subMenu: [
      { name: "飽餐一頓", initUrl: initMealIcon, hoverUrl: hoverMealIcon, link: "food" },
      { name: "清涼消暑", initUrl: initDrinkIcon, hoverUrl: hoverDrinkIcon, link: "food" },
      { name: "在地美味", initUrl: initSnackIcon, hoverUrl: hoverSnackIcon, link: "food" },
      { name: "特色名產", initUrl: initSouvenirIcon, hoverUrl: hoverSouvenirIcon, link: "food" },
    ]
  },
  {
    name1: "找活動",
    name2: "ACTIVITY",
    link: "Activity",
    subMenu: [
      { name: "藝文展演", initUrl: initExhitionIcon, hoverUrl: hoverExhitionIcon, link: "activity" },
      { name: "戶外露營", initUrl: initCampingIcon, hoverUrl: hoverCampingIcon, link: "activity" },
      { name: "親近山海", initUrl: initOutdoorIcon, hoverUrl: hoverOutdoorIcon, link: "activity" },
      { name: "年度慶典", initUrl: initCelebrationIcon, hoverUrl: hoverCelebrationIcon, link: "activity" },
    ]
  },
  {
    name1: "住宿",
    name2: "HOTEL",
    link: "Hotel",
    subMenu: [
      { name: "親子同遊", initUrl: initFamilyIcon, hoverUrl: hoverFamilyIcon, link: "more" },
      { name: "溫泉之旅", initUrl: initHotSpringIcon, hoverUrl: hoverHotSpringIcon, link: "more" },
      { name: "花花世界", initUrl: initFlowerIcon, hoverUrl: hoverFlowerIcon, link: "more" },
      { name: "文化歷史", initUrl: initHistoryIcon, hoverUrl: hoverHistoryIcon, link: "more" },
    ]
  }
];

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container flexBetween pos-rel">
        <Link to="/">
          <img src={imgLogo} alt="Logo" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {
              headerList.map((item) => (
                <li className={styles['menu-item']} key={item.link}>
                  <Link to={`/searchPage?category=${item.link}`} className="link-box">
                    <span className={styles.dot}></span>
                    <div className={styles['text-box']}>
                      <p>{item.name1}</p>
                      <p className={styles['sub-text']}>{item.name2}</p>
                    </div>
                  </Link>
                  <ul className={styles.subMenu}>
                    {
                      item.subMenu.map((subItem) => (
                        <li className={styles['subMenu-item']} key={subItem.initUrl}>
                          <IconHover className={styles.imgBox} init={subItem.initUrl} hover={subItem.hoverUrl} />
                          <p>{subItem.name}</p>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className={styles['icon-box']}>
          <div>
            <img src={iconSearch} alt="search" />
          </div>
          <div className="white-back-icon">
            <img src={iconPerson} alt="person" />
          </div>
        </div>
      </div>
    </header>
  );
}
