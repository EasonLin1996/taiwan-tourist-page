import React, { useState } from 'react';
import { useHistory, Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import { getRecommendProductCreator } from '../../redux/recommendProduct/recommendProductActions';
import { Row, Col, Breadcrumb, Input, Card, Spin, Pagination } from 'antd';
import { Header, SearchSideBar, Footer } from '../../components';
import iconSearch from '../../assets/images/search.svg';
import iconHeart from '../../assets/images/iconHeart.svg';
import iconSpot from '../../assets/images/iconSpot.svg';
import defaultActivityImg from '../../assets/images/searchpage/emptyActivity.jpg';
import defaultFoodImg from '../../assets/images/searchpage/emptyFood.jpg';
import defaultSpotImg from '../../assets/images/searchpage/emptySpot.jpg';
import styles from './SearchPage.module.scss';

const { Meta } = Card;

const categoryMap = {
  ScenicSpot: "景點",
  Restaurant: "餐廳",
  Activity: "活動",
  Hotel: "住宿",
}

interface searchParamsType {
  city: string | null;
  name: string | null;
  catrgory: string | null;
}

interface pageParamsType {
  pageSize: number;
  currentPage: number;
}

const IconSearch = () => <img src={iconSearch} alt="search" />
const IconHeart = ({ style }: any) => <img src={iconHeart} style={style} alt="search" />
const IconSpot = ({ style }: any) => <img src={iconSpot} style={style} alt="search" />

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useState<searchParamsType>({ catrgory: null, city: null, name: null });
  const [pageParams, setPageParams] = useState<pageParamsType>({ pageSize: 15, currentPage: 1 });
  const [searchTxt, setSearchTxt] = useState<string>("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.recommendProduct.isLoading);
  const error = useSelector((state) => state.recommendProduct.error);
  const productList = useSelector((state) => state.recommendProduct.productList);
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(history.location.search);
  const paramsCategory = params.get("category") || "";

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
    setSearchParams({
      ...searchParams,
      city: e
    })
  };

  const onPageChange = (page, pageSize) => {
    setPageParams({ ...pageParams, currentPage: page, pageSize });
  };

  React.useEffect(() => {
    if (searchParams && location) {
      setPageParams({ pageSize: 15, currentPage: 1 });
      dispatch(getRecommendProductCreator(paramsCategory, searchParams));
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
                    <Link to="/">首頁</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {categoryMap[paramsCategory]}
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
                    <>
                      <Row gutter={[24, 24]} style={{ marginTop: 30 }}>
                        {productList.slice((pageParams.currentPage - 1) * pageParams.pageSize, pageParams.currentPage * pageParams.pageSize).map((item) => (
                          <Col span={8} key={item.ID}>
                            <Card
                              loading={false}
                              className="searchCard"
                              cover={
                                <Link to={`searchPage/detailPage?cate=${params.get('category')}&id=${item.RestaurantID || item.ActivityID || item.ScenicSpotID || item.HotelID}`}>
                                  {
                                    (item.Picture && item.Picture.PictureUrl1) ? (
                                      <img alt={item.Name} src={item.Picture.PictureUrl1} />
                                    ) : (
                                      <img
                                        alt="defaultImg"
                                        src={paramsCategory === "Activity" ? defaultActivityImg : paramsCategory === "Restaurant" ? defaultFoodImg : defaultSpotImg}
                                      />
                                    )
                                  }
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
                                      {item?.HotelName?.length > 15 ? `${item.HotelName.slice(0, 15)}...` : item.HotelName}
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
                      <Pagination
                        style={{ margin: "30px 0", textAlign: "center" }}
                        current={pageParams.currentPage}
                        pageSize={pageParams.pageSize}
                        total={productList.length}
                        onChange={(page, pageSize) => onPageChange(page, pageSize)}
                      />
                    </>
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
