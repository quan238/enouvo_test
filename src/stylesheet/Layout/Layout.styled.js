import styled from 'styled-components';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export const LayoutStyled = styled(Layout)`
  height: 100%;
`;
export const ContentStyled = styled(Content)`
  padding: 100px 55px;
`;
export const HeaderStyled = styled(Header)`
  background: #fff;
  box-shadow: 0 4px 8px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 24%);
  display: flex;
  justify-content: space-between;
  height: 55px;
  padding-left: 55px;
  padding-right: 25px !important;

  .iconHeader {
    font-size: 20px;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;
export const FooterStyled = styled(Footer)``;
