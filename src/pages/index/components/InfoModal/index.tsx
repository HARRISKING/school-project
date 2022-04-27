import { CloseSquareOutlined } from '@ant-design/icons';
import { Col, Modal, Row } from 'antd';
import React, { useState } from 'react';

import styles from './index.less';

interface IInfoModalProps {
  infoData: any;
}
const InfoModal: React.FC<IInfoModalProps> = ({ infoData }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selInfo, setSelInfo] = useState<any>({});
  console.log('sectionData>>>>', infoData);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const selectCard = (data: any) => {
    setSelInfo(data);
    showModal();
  };
  return (
    <div className={styles.infoModal}>
      <Row gutter={[24, 24]}>
        {(infoData || []).map((item: any, index: number) => (
          <Col
            className="gutter-row"
            span={6}
            key={index}
            onClick={() => selectCard(item)}
          >
            <div className={styles.cardItem}>
              <img className={styles.headIcon} src={item?.head_icon} alt="" />
              <div className={styles.name}>{item?.name}</div>
              <div className={styles.brief}>{item?.brief}</div>
            </div>
          </Col>
        ))}
      </Row>
      <div className={styles.aa}>
        <Modal
          closable={false}
          visible={isModalVisible}
          onOk={handleOk}
          footer={null}
          onCancel={handleCancel}
          width={'70vw'}
        >
          <div className={styles.modalBox}>
            <CloseSquareOutlined
              className={styles.icon}
              onClick={handleCancel}
            />

            <div className={styles.innerBox}>
              <div className={styles.leftBox}>
                <img
                  className={styles.headPic}
                  src={selInfo?.head_icon}
                  alt={selInfo?.name}
                />
                <div className={styles.dot} />
              </div>

              <div className={styles.rightBox}>
                <div className={styles.titleBox}>
                  <div className={styles.title}>{selInfo?.name}</div>
                  <div className={styles.brief}>{selInfo?.brief}</div>
                </div>
                <div className={styles.contentBoxs}>
                  {(selInfo?.attributes || []).map((ele: any, idx: number) => (
                    <div key={idx} className={styles.contentBox}>
                      <div className={styles.title}>{ele?.title}</div>
                      <div className={styles.body}>{ele?.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default InfoModal;
