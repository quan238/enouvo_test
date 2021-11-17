/* eslint-disable react/function-component-definition */
import { Col, Row } from 'antd';
import React from 'react';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import GeneralInfo from '../components/General/GeneralInfo';
import VehicleTable from '../components/VehicleTable/VehicleTable';

export default function DetailContainer() {
  return (
    <div style={{ padding: '55px' }}>
      <Row>
        <Col span={6}>
          <Row>
            <GeneralInfo />
          </Row>
          <Row style={{ paddingTop: '25px' }}>
            <ContactInfo />
          </Row>
        </Col>
        <Col span={18} style={{ padding: '0 25px' }}>
          <VehicleTable />
        </Col>
      </Row>
    </div>
  );
}
