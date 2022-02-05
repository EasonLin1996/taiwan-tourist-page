import React from 'react';
import { Row, Col, Input, Form } from 'antd';
import subscribeImg01 from '../../assets/images/homepage/subscribe-img.png';
import iconSubmit from '../../assets/images/homepage/Vector.svg';
import styles from './Subscribe.module.scss';

export const Subscribe = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <Row gutter={24}>
        <Col span={12}>
          <img src={subscribeImg01} className={styles['subscribe-img']} alt="subscribeImg01" />
        </Col>
        <Col span={12}>
          <h2 className="homepage-subtitle txt-yellow">Subscribe</h2>
          <h1 className="homepage-title txt-white">每個月來場放鬆旅行</h1>
          <p className="homepage-descirbe txt-white" style={{ margin: "16 0" }}>如果你願意收到每月旅遊資訊，一起感受台灣旅行的美好。</p>
          <Form>
            <Form.Item
              hasFeedback
              name="email"
            >
              <Input
                id="warning"
                className='subscribe-input'
                placeholder="youremail@example.com"
                suffix={
                  <div className={styles['subscribe-suffix']}>
                    <img src={iconSubmit} alt="submit" />
                  </div>
                }
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
