import React from 'react';

import Header from './components/Header/index';
import Section from './components/Section';
import styles from './index.less';

const dataSource = require('/public/config.json');

const Index: React.FC = () => {
  console.log('dataSource>>>>', dataSource);
  return (
    <div className={styles.indexBox}>
      <div
        className={styles.logoBox}
        style={{ background: dataSource?.top_screen?.background_color }}
      >
        <img src={dataSource.logo} alt="" />
      </div>
      <Header dataSource={dataSource} />
      {(dataSource?.module_List || []).map((item: any, index: number) => (
        <Section sectionData={item} key={index} />
      ))}
      <div className={styles.footer}>
        <div>{dataSource?.footer}</div>
      </div>
    </div>
  );
};

export default Index;
