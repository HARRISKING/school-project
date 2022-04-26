import React from 'react';

import styles from './index.less';

interface IHeaderProps {
  dataSource: any;
}
const Header: React.FC<IHeaderProps> = ({ dataSource }) => {
  const { background_color, title_list, content, background_image } =
    dataSource?.top_screen;
  return (
    <div className={styles.headerBox} style={{ background: background_color }}>
      <div className={styles.titleBox}>
        {(title_list || []).map((item: string) => (
          <div className={styles.headerTitle}>{item}</div>
        ))}
      </div>
      <ul className={styles.directory}>
        {(dataSource?.module_List || []).map((item: any) => (
          <li>
            <a href={`#${item.key}`} className={styles.directoryItem}>
              {item?.title}
            </a>
          </li>
        ))}
        <img className={styles.backgroundImage} src={background_image} alt="" />
      </ul>
      <div className={styles.contentsBox}>
        <div className={styles.verifyText}>
          ABOUT<span style={{ color: '#f24034' }}>US</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
