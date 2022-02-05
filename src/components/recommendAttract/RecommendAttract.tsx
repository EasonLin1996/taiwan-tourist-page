import React from 'react';
import { Typography, Row, Col } from 'antd';
import { isEmpty } from 'lodash';
import cardImg01 from '../../assets/images/homepage/Rectangle 38.png';
import cardImg02 from '../../assets/images/homepage/Rectangle 38-1.png';
import cardImg03 from '../../assets/images/homepage/Rectangle 38-2.png';
import cardImg04 from '../../assets/images/homepage/Rectangle 38-3.png';
import cardImg05 from '../../assets/images/homepage/Rectangle 38-4.png';
import cardImg06 from '../../assets/images/homepage/Rectangle 38-5.png';
import cardImg07 from '../../assets/images/homepage/Rectangle 38-6.png';
import iconArrow from '../../assets/images/homepage/arrow.svg';
import styles from './RecommendAttract.module.scss';

const { Title } = Typography;

const topImg = [
  {
    name: "台東金剛大道", imgUrl: cardImg01, link: "/searchPage/detailPage?cate=ScenicSpot&id=C1_315080500H_000236"
  },
  {
    name: "南投日月潭文武廟", imgUrl: cardImg02, link: "/searchPage/detailPage?cate=ScenicSpot&id=C1_315081100H_000110"
  },
  {
    name: "", imgUrl: cardImg03, link: "/searchPage/detailPage?cate=ScenicSpot&id=C1_379000000A_001538"
  }
]

const bottomImg = [
  {
    name: "南投合歡山", imgUrl: cardImg04, link: "/searchPage/detailPage?cate=ScenicSpot&id=C1_376480000A_000451"
  },
  {
    name: "北投圖書館", imgUrl: cardImg05, link: "/searchPage/detailPage?cate=ScenicSpot&id=C1_379000000A_000212"
  },
  {
    name: "樹林青龍嶺步道", imgUrl: cardImg06, link: "/searchPage/detailPage?cate=ScenicSpot&id=C1_382000000A_109828"
  },
  {
    name: "水里車埕車站", imgUrl: cardImg07, link: "/searchPage/detailPage?cate=Restaurant&id=C3_315081100H_000430"
  }
]

export const RecommendAttract: React.FC = () => {
  return (
    <>
      <Row justify="space-between" className={styles["top-field"]}>
        <Col span={10}>
          <h2 className="homepage-subtitle txt-green">Explore</h2>
          <h1 className="homepage-title txt-gray">探索台灣每個角落</h1>
          <p className="homepage-descirbe">台灣擁有高山峽谷及四面環海地理特性，因此擁有各種自然景致等待人們發現，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文的深度旅行，都可以在台灣這片土地上踏尋不同的風采。</p>
          <a href="/searchPage?category=ScenicSpot" className="homepage-link">
            探索更多景色
            <img src={iconArrow} alt="linkIcon" />
          </a>
        </Col>
        {
          topImg.map((item) => (
            <Col key={item.name} span={!isEmpty(item.name) ? 5 : 3} className={styles['card-box']}>
              <a href={item.link} className={styles['card-imgBox']} style={isEmpty(item.name) ? { borderRadius: "5px 0 0 5px" } : {}}>
                <img className={styles['card-img']} src={item.imgUrl} alt={item.name} />
              </a>
              {
                !isEmpty(item.name) && (
                  <h4 className={styles['card-txt']}>{item.name}</h4>
                )
              }
            </Col>
          ))
        }
      </Row>
      <Row justify="space-between" className={styles["bottom-field"]}>
        {
          bottomImg.map((item) => (
            <Col style={{ paddingRight: 16 }} key={item.name} span={6} className={`gutter-row ${styles['card-box']}`}>
              <a href={item.link} className={styles['card-imgBox']}>
                <img className={styles['card-img']} src={item.imgUrl} alt={item.name} />
              </a>
              {
                !isEmpty(item.name) && (
                  <h4 className={styles['card-txt']}>{item.name}</h4>
                )
              }
            </Col>
          ))
        }
      </Row>
    </>
  )
}
