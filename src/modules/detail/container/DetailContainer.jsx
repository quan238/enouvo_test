/* eslint-disable react/function-component-definition */
import { Col, Row } from 'antd';
import { useRouter } from 'hooks/useRouter';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listDetailAction from '../actions/detailActions';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import GeneralInfo from '../components/General/GeneralInfo';
import VehicleTable from '../components/VehicleTable/VehicleTable';

export default function DetailContainer() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query;

  const {
    detail: { name, description, city, phoneNumber, address, isFetching, vehicles, id: idStore }
  } = useSelector((state) => state.detail);

  const onDispatchFetchDetailStore = () => {
    dispatch({ type: listDetailAction.FETCH_STORE_DETAIL, payload: { id } });
  };

  useEffect(() => {
    onDispatchFetchDetailStore();
  }, []);

  return (
    <div style={{ padding: '55px' }}>
      <Row>
        <Col span={6}>
          <Row>
            <GeneralInfo name={name} description={description} loading={isFetching} />
          </Row>
          <Row style={{ paddingTop: '25px' }}>
            <ContactInfo
              city={city}
              phoneNumber={phoneNumber}
              address={address}
              loading={isFetching}
            />
          </Row>
        </Col>
        <Col span={18} style={{ padding: '0 25px' }}>
          <VehicleTable storeId={id} data={vehicles} loading={isFetching} />
        </Col>
      </Row>
    </div>
  );
}
