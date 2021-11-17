/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function GeneralInfo({ name, description, loading }) {
  return (
    <Card
      loading={loading}
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
        title={name}
        description={description || 'This is description'}
      />
    </Card>
  );
}
