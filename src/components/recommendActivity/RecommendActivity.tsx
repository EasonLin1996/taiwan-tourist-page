import React from 'react';
import { Link } from "react-router-dom";
import { debounce } from 'throttle-debounce';
import { Typography, Row, Col } from 'antd';
import imgActivity00 from '../../assets/images/homepage/activity-img 4-4.png';
import imgActivity01 from '../../assets/images/homepage/activity-img 4-3.png';
import imgActivity02 from '../../assets/images/homepage/activity-img 4.png';
import imgActivity03 from '../../assets/images/homepage/activity-img 4-1.png';
import imgActivity04 from '../../assets/images/homepage/activity-img 4-2.png';
import styles from './RecommendActivity.module.scss'

const activityList = [
  {
    name: "一年一度精采盛事",
    imgUrl: imgActivity01,
    link: "/",
  },
  {
    name: "追逐自由單車旅程",
    imgUrl: imgActivity02,
    link: "/",
  },
  {
    name: "親自踏上山海之旅",
    imgUrl: imgActivity03,
    link: "/",
  },
  {
    name: "體驗台灣文化慶典",
    imgUrl: imgActivity04,
    link: "/",
  }
]

export const RecommendActivity: React.FC = () => {
  const [currentImgUrl, setcurrentImgUrl] = React.useState(imgActivity00);

  const debounceMouseEnter = debounce(500, false, (e) => {
    setcurrentImgUrl(e.target.getAttribute("data-img"));
  });
  return (
    <>
      <Row justify="space-between" className={styles.row}>
        <Col span={13}>
          <img className={styles['showImg']} src={currentImgUrl} alt="" />
        </Col>
        <Col span={10}>
          <h2 className="homepage-subtitle txt-green">Participate</h2>
          <h1 className="homepage-title">體驗當地風情人文</h1>
          <p className="homepage-descirbe">台灣擁有豐富文俗風情，因地貌多變延伸出豐富的主題活動，邀請你體驗文化的精彩。</p>
          <ul className={styles['list']}>
            {
              activityList.map((item) => (
                <li key={item.name} className={styles['list-item']}>
                  <a
                    onMouseEnter={(e) => debounceMouseEnter(e)}
                    className={styles['item-link']}
                    data-img={item.imgUrl}
                    href={item.link}
                  >
                    {item.name}
                    <span  className={styles['item-dot']}></span>
                  </a>
                </li>
              ))
            }
          </ul>
        </Col>
      </Row>
    </>
  )
}
