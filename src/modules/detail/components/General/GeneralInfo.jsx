/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function GeneralInfo() {
  return (
    <Card
      style={{ width: '100%' }}
      title="General"
      extra={<a href="#">More</a>}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}>
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Tran Hong Quan"
        description="This is the description"
      />
    </Card>
  );
}
