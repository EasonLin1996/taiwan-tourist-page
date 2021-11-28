import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Row, Col } from 'antd';
import imgActivity01 from '../../assets/images/homepage/activity-img 4-3.png';
import imgActivity02 from '../../assets/images/homepage/activity-img 4.png';
import imgActivity03 from '../../assets/images/homepage/activity-img 4-1.png';
import imgActivity04 from '../../assets/images/homepage/activity-img 4-2.png';
import styles from './RecommendActivity.module.scss'

export const RecommendActivity = () => {
  return (
    <>
      <Row justify="space-between" className={styles.row}>
        <Col span={13}>

        </Col>
        <Col span={10}>
          <h2 className="homepage-subtitle">Participate</h2>
          <h1 className="homepage-title">體驗當地風情人文</h1>
          <p className="homepage-descirbe">台灣擁有豐富文俗風情，因地貌多變延伸出豐富的主題活動，邀請你體驗文化的精彩。</p>
          <ul>
            <li>
              <a href="/">link</a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col>
      </Row>
    </>
  )
}
