import React from 'react';
import { Typography, Row, Col } from 'antd';
import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={`container ${styles.footer}`}>
      <Row justify="space-between">
        <Col span={3} className="flexBetween">
          <p>Follow us</p>
          <p>f</p>
          <p>i</p>
          <p>y</p>
        </Col>
        <Col span={16} className="flexBetween">
          <p>Copyright © 2021 TRAVEL. All rights reserved. Design by Lola , Front Developed by Rick.</p>
        </Col>
        <Col span={2} className="flexBetween">
          <p>CN</p>
          <p>EN</p>
          <p>JP</p>
        </Col>
      </Row>
    </div >
  )
}
