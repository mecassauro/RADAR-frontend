import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  /* background-color: ${theme.color.primary}; */
  background-color: #0669B7;
  align-items: center;

  img {
    width: 100px;
    margin: 0 20px;
  }

  h1 {
    font-size: 36px;
    font-family: Roboto Slab;
    font-style: bold;
  }
`;
