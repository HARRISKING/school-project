import React from 'react';

import Header from './components/Header/index';
import styles from './index.less';

const dataSource = require('/public/config.json');

const Index: React.FC = () => {
  console.log('dataSource>>>>', dataSource);
  return (
    <div className={styles.indexBox}>
      <Header dataSource={dataSource} />
      {(dataSource?.module_List || []).map((item) => (
        <div className={styles.modulesItem}>123</div>
      ))}
    </div>
  );
};

export default Index;
