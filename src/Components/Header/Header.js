import React from 'react';
import { HeaderStyled } from 'stylesheet/Layout/Layout.styled';
import { Input, AutoComplete, Breadcrumb, Row } from 'antd';
import { SearchingStyle } from 'stylesheet/Input/Input.styled';

import { LogoutOutlined } from '@ant-design/icons';
import { LOGOUT_USER } from 'modules/auth/actions/loginAction';
import { history } from 'App/App';
import { useDispatch } from 'react-redux';

const styledIcon = {
  fontSize: '25px',
  padding: 'auto'
  // marginLeft: "20px"
};

export default function Header() {
  const dispatch = useDispatch();

  const gotoLogin = () => {
    history.push('/login');
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER, payload: gotoLogin });
  };

  return (
    <HeaderStyled>
      <div>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Detail</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <h1>Home</h1>
        </Row>
      </div>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          style={{
            width: 250,
            margin: 'auto 20px'
            // padding: "0 10px"
          }}
          // options={options}
        >
          <SearchingStyle>
            <Input.Search placeholder="input search text" allowClear style={{ width: 200 }} />
          </SearchingStyle>
        </AutoComplete>
        <LogoutOutlined className="iconHeader" style={{ color: '#f85359' }} onClick={logoutUser} />
      </Row>
    </HeaderStyled>
  );
}
