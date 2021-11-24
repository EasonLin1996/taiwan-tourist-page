import React from 'react';
import styles from './Header.module.scss';
import imgLogo from '../../assets/images/logo-1.png';
import iconPerson from '../../assets/icons/personIcon.png';
import iconSearch from '../../assets/icons/searchIcon.png';

const headerList = [
  { name: "活動新訊", link: "activity" },
  { name: "景點", link: "attraction" },
  { name: "美食", link: "food" },
  { name: "住宿", link: "housing" },
  { name: "交通", link: "transport" },
];
interface PropsType {
  isShowLogo: true | false;
}

export const Header: React.FC<PropsType> = ({ isShowLogo }) => {
  return (
    <header className={`${isShowLogo ? styles.logoHeader : styles.noLogoHeader}`}>
      <div className="container flexBetween">
        <div style={{ width: 70 }} >
          {isShowLogo && (
            <img src={imgLogo} alt="Logo" style={{ width: "100%" }} />
          )}
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {
              headerList.map((item) => (
                <li className={styles['list-item']} key={item.link}>{item.name}</li>
              ))
            }
          </ul>
          <div className={styles['icon-box']}>
            <div>
              <img src={iconSearch} alt="search" />
            </div>
            <div className="white-back-icon">
              <img src={iconPerson} alt="person" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
