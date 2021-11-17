/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { HeaderStyled } from 'stylesheet/Layout/Layout.styled';
import { Input, AutoComplete, PageHeader, Row } from 'antd';
import { SearchingStyle } from 'stylesheet/Input/Input.styled';

import { LogoutOutlined } from '@ant-design/icons';
import { LOGOUT_USER } from 'modules/auth/actions/loginAction';
import { history } from 'App/App';
import { useDispatch } from 'react-redux';
import { useRouter } from 'hooks/useRouter';
import ROUTE_PATH from 'routes/routesPath';

export default function Header() {
  const dispatch = useDispatch();

  const {
    pathname,
    match: { path }
  } = useRouter();

  const pathArray = pathname.split('/').map((item, index) => {
    if (item !== '' || index !== 0) {
      return {
        path: item,
        breadcrumbName: item
      };
    }
    return {
      path: '/',
      breadcrumbName: 'Home'
    };
  });

  const route = ROUTE_PATH.filter((item) => item.path === path);

  const gotoLogin = () => {
    history.push('/login');
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER, payload: gotoLogin });
  };

  return (
    <HeaderStyled>
      <Row>
        <PageHeader
          onBack={pathname !== '/' ? () => history.goBack() : null}
          className="site-page-header"
          title={route[0].title}
          breadcrumb={{ routes: pathArray }}
          subTitle={route[0].subTitle}
        />
      </Row>

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
