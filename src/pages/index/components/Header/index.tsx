import React from 'react';

import styles from './index.less';

interface IHeaderProps {
  dataSource: any;
}
const Header: React.FC<IHeaderProps> = ({ dataSource }) => {
  const { background_color, title_list, content, background_image } =
    dataSource?.top_screen;
  return (
    <div className={styles.headerBox}>
      <div
        className={styles.bannerBox}
        style={{ background: background_color }}
      >
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
          <img
            className={styles.backgroundImage}
            src={background_image}
            alt=""
          />
        </ul>
      </div>
      <div className={styles.contentsBox}>
        <div className={styles.leftBox}>
          <div className={styles.verifyText}>
            ABOUT<span style={{ color: '#f24034' }}>US</span>
            <div className={styles.line} />
          </div>
          <div className={styles.dot} />
        </div>

        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};
export default Header;
