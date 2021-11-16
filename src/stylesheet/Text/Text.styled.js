import styled, { css } from 'styled-components';

export const TextSpan = styled.span`
  font-size: 0.75rem;

  ${(props) =>
    props.error &&
    css`
      color: #f85359;
    `}
`;
