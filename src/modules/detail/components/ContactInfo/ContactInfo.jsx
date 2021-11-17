import React from 'react';
import { Card } from 'antd';

export default function ContactInfo({ city, phoneNumber, address }) {
  return (
    <Card title="Contact" style={{ width: '100%' }}>
      <ul>
        <li>
          <strong>City: </strong>
          {city}
        </li>
        <li>
          <strong>Address: </strong>
          {address}
        </li>
        <li>
          <strong>Number: </strong>
          {phoneNumber}
        </li>
      </ul>
    </Card>
  );
}
