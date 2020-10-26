import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${theme.color.lightGrey};
  border-radius: 8px;
  padding: 0px 10px;
  svg {
    margin-right: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border: 3px solid ${theme.color.error};
    `}

  input {
    width: 100%;
    height: 48px;
    border: 0;
    color: ${theme.color.grey};
    &::placeholder {
      color: ${theme.color.grey};

      font-size: 16px;
    }
  }
`;
