import { Col, Row } from 'antd';
import React from 'react';

import styles from './index.less';

interface IInfoModalProps {
  infoData: any;
}
const InfoModal: React.FC<IInfoModalProps> = ({ infoData }) => {
  console.log('sectionData>>>>', infoData);
  return (
    <div className={styles.infoModal}>
      <Row gutter={[24, 24]}>
        {(infoData || []).map((item: any, index: number) => (
          <Col className="gutter-row" span={6} key={index}>
            <div className={styles.cardItem}>
              <img className={styles.headIcon} src={item?.head_icon} alt="" />
              <div className={styles.name}>{item?.name}</div>
              <div className={styles.brief}>{item?.brief}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InfoModal;
