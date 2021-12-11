import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, List, Divider, Select } from 'antd';
import { isEmpty } from 'lodash';
import styles from './SearchSideBar.module.scss';

const { Option } = Select;

const searchCategory = [
  {
    name: "景點",
    key: "attraction"
  },
  {
    name: "美食",
    key: "food",
  },
  {
    name: "活動",
    key: "activity"
  }
];

const areaOptions = [
  {
    label: "台北",
    value: "台北",
  },
  {
    label: "台中",
    value: "台中" ,
  }
];

export const SearchSideBar: React.FC = () => {
  const handleChange = (e: any) => {

  };
  return (
    <>
      <List
        style={{padding: "25px 15px"}}
        header={<h1 className={styles.title}>Search Category</h1>}
        split={false}
        dataSource={searchCategory}
        renderItem={item => (
          <List.Item>
            <Link to={`/searchpage?search=${item.key}`} className={styles.link}>{item.name}</Link>
          </List.Item>
        )}
      />
      <Divider className={styles.divider}/>
      <div style={{ padding: "0 15px" }}>
        <h1 className={styles.title} style={{marginBottom: 30}}>Advance Search</h1>
        <div style={{margin: "30px 0"}}>
          <p style={{marginBottom: 15}}>地理區域</p>
          <Select
            className="areaSelector"
            onChange={(e) => handleChange(e)}
            placeholder="縣市地區"
            allowClear
            options={areaOptions}
          />
        </div>
        <div style={{margin: "30px 0"}}>
          <p style={{marginBottom: 15}}>景點主題</p>
          <Select
            className="areaSelector"
            onChange={(e) => handleChange(e)}
            placeholder="縣市地區"
            allowClear
            options={areaOptions}
          />
        </div>
      </div>
      
    </>
  )
}
