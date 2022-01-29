import React, { useState } from 'react';
import { useHistory, Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import { getRecommendProductCreator } from '../../redux/recommendProduct/recommendProductActions';
import { Row, Col, Breadcrumb, Input, Card, Spin } from 'antd';
import { Header, SearchSideBar, Footer } from '../../components';
import iconSearch from '../../assets/images/search.svg';
import iconHeart from '../../assets/images/iconHeart.svg';
import iconSpot from '../../assets/images/iconSpot.svg';
import styles from './SearchPage.module.scss';

const { Meta } = Card;
interface searchParamsType {
  city: string | null;
  name: string | null;
  catrgory: string | null;
}

const IconSearch = () => <img src={iconSearch} alt="search" />
const IconHeart = ({ style }: any) => <img src={iconHeart} style={style} alt="search" />
const IconSpot = ({ style }: any) => <img src={iconSpot} style={style} alt="search" />

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useState<searchParamsType>({ catrgory: null, city: null, name: null });
  const [searchTxt, setSearchTxt] = useState<string>("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.recommendProduct.isLoading);
  const error = useSelector((state) => state.recommendProduct.error);
  const productList = useSelector((state) => state.recommendProduct.productList);
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(history.location.search);

  const handleInputChange = (e: any) => {
    setSearchTxt(e.target.value);
  }

  const searchBtnClick = () => {
    setSearchParams({
      ...searchParams,
      name: searchTxt
    });
  };

  const handleAreaChange = (e) => {
    console.log("handleAreaChange", e);
    setSearchParams({
      ...searchParams,
      city: e
    })
  };

  React.useEffect(() => {
    if (searchParams && location) {
      dispatch(getRecommendProductCreator(params.get("category"), searchParams));
    }
  }, [searchParams, location]);

  return (
    <>
      <Header />
      <>
        <div className="container ">
          <div style={{ marginTop: 30 }}>
            <Row gutter={36}>
              <Col span={5}>
                <Breadcrumb style={{ padding: "0 15px" }}>
                  <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link to="/searchpage">Search</Link>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <SearchSideBar handleAreaChange={handleAreaChange} />
              </Col>
              <Col span={19}>
                <Input
                  size="large"
                  className="searchPageInput"
                  placeholder="關鍵字搜尋"
                  value={searchTxt}
                  onChange={(e) => handleInputChange(e)}
                  onPressEnter={searchBtnClick}
                  prefix={<IconSearch />}
                  suffix={
                    <button type="button" onClick={searchBtnClick} className={styles.searchBtn}>
                      GO
                    </button>
                  }
                />
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
                    <Row gutter={[24, 24]} style={{ marginTop: 30 }}>
                      {productList.map((item) => (
                        <Col span={8} key={item.ID}>
                          <Card
                            loading={false}
                            className="searchCard"
                            cover={
                              <Link to={`searchPage/detailPage?cate=${params.get('category')}&id=${item.RestaurantID || item.ActivityID || item.ScenicSpotID}`}>
                                <img alt={item.Name} src={item.Picture.PictureUrl1} />
                              </Link>
                            }
                          >
                            <Meta
                              title={item.Name}
                              description={
                                <div>
                                  <p>
                                    {item?.ScenicSpotName?.length > 15 ? `${item.ScenicSpotName.slice(0, 15)}...` : item.ScenicSpotName}
                                    {item?.RestaurantName?.lehgth > 15 ? `${item.RestaurantName.slice(0, 15)}...` : item.RestaurantName}
                                    {item?.ActivityName?.length > 15 ? `${item.ActivityName.slice(0, 15)}...` : item.ActivityName}
                                  </p>
                                  <div className="flexBetween">
                                    <div className="flexCenterY">
                                      <IconSpot style={{ width: 25 }} />
                                      <p>
                                        {(item.Address && `${item.Address.slice(0, 10)}...`) || item.City}
                                      </p>
                                    </div>
                                    <IconHeart style={{ width: 25 }} />
                                  </div>
                                </div>
                              }
                            />
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  )
                }
              </Col>
            </Row>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}
