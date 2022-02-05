import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import { getDetailProductCreator } from '../../redux/detailProduct/detailProductActions';
import { Row, Col, Breadcrumb, Input, Card, Spin } from 'antd';
import iconSpot from '../../assets/images/iconSpot.svg';
import iconPhone from '../../assets/images/iconPhone.svg';
import defaultActivityImg from '../../assets/images/searchpage/emptyActivity.jpg';
import defaultFoodImg from '../../assets/images/searchpage/emptyFood.jpg';
import defaultSpotImg from '../../assets/images/searchpage/emptySpot.jpg';
import { Header, Footer } from '../../components';
import styles from './DetailPage.module.scss';

const IconSpot = ({ style }: any) => <img src={iconSpot} style={style} alt="search" />
const IconPhone = ({ style }: any) => <img src={iconPhone} style={style} alt="search" />

const categoryMap = {
  ScenicSpot: "景點",
  Restaurant: "餐廳",
  Activity: "活動",
  Hotel: "住宿",
}

export const DetailPage = () => {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const category = params.get('cate') || '';
  const id = params.get('id');
  const dispatch = useDispatch();
  const productOne = useSelector((state) => state.detailProduct.productOne[0]);
  const isLoading = useSelector((state) => state.detailProduct.isLoading);
  const error = useSelector((state) => state.detailProduct.error);

  React.useEffect(() => {
    dispatch(getDetailProductCreator({ category, id }));
  }, []);

  return (
    <>
      <Header />
      {
        isLoading ? (
          <Spin
            size="large"
            style={{
              margin: "250px auto",
              width: "100%"
            }}
          />
        ) : error ? (
          <div>網站出錯拉: {error.response.data.Message}</div>
        ) : (
          <>
            <div className="container">
              <Breadcrumb style={{ marginTop: 40 }}>
                <Breadcrumb.Item>
                  <Link to="/">首頁</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to={`/searchpage?category=${category}`}>{categoryMap[category]}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  {productOne[`${category}Name`]}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div style={{ margin: "40px 0" }}>
              <div className="container">
                <Row gutter={24}>
                  <Col span={11}>
                    <div className={styles.titleBox}>
                      <h1 className={styles['mainItem_title']}>{productOne[`${category}Name`]}</h1>
                      <div className="flexCenterY" style={{ margin: "15px 0" }}>
                        <IconSpot style={{ width: 25 }} />
                        <p style={{ margin: "0 8px" }}>{productOne.Address || '- -'}</p>
                        <a href={`https://www.google.com.tw/search?q=${productOne?.Position?.PositionLat}%2C+${productOne?.Position?.PositionLon}`} target="_blank" rel="noreferrer" className={styles.btn}>查看地圖</a>
                      </div>
                      <div className="flexCenterY">
                        <IconPhone style={{ width: 25 }} />
                        <p style={{ margin: "0 8px" }}>{productOne.Phone || '- -'}</p>
                        <a href="/" className={styles.btn}>點擊撥號</a>
                      </div>
                    </div>
                    <div>
                      <div className="flexCenterY">
                        <h3 className={styles['openTime_title']}>開放時間</h3>
                        <span className={styles['openTime_btn']}>開放中</span>
                      </div>
                      <ul>
                        <li className="flexCenterY">
                          <p>星期日</p>
                          <p>10:00~ 11:00</p>
                        </li>
                        <li className="flexCenterY">
                          <p>星期日</p>
                          <p>10:00~ 11:00</p>
                        </li>
                        <li className="flexCenterY">
                          <p>星期日</p>
                          <p>10:00~ 11:00</p>
                        </li>
                        <li className="flexCenterY">
                          <p>星期日</p>
                          <p>10:00~ 11:00</p>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col span={13}>
                    {
                      (productOne.Picture && productOne.Picture.PictureUrl1) ? (
                        <img alt={productOne.Name} src={productOne.Picture.PictureUrl1} />
                      ) : (
                        <img
                          alt="defaultImg"
                          src={category === "Activity" ? defaultActivityImg : category === "Restaurant" ? defaultFoodImg : defaultSpotImg}
                        />
                      )
                    }
                  </Col>
                </Row>
              </div>
            </div>
            <div className={styles.description}>
              <div className="container">
                <p>
                  {productOne.Description}
                </p>
              </div>
            </div>
            <div className={styles.supplyInfo}>
              <div className="container">
                <Row gutter={48}>
                  <Col span={8}>
                    <h3 className={styles['openTime_title']}>服務設施</h3>
                  </Col>
                  <Col span={8}>
                    <h3 className={styles['openTime_title']}>交通方式</h3>
                    <p>
                      {productOne.TravelInfo || '--'}
                    </p>
                  </Col>
                  <Col span={8}>
                    <h3 className={styles['openTime_title']}>相關連結</h3>
                  </Col>
                </Row>
              </div>
            </div>
          </>
        )
      }
      <Footer />
    </>
  )
}
