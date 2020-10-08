import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  /* background-color: ${theme.color.primary}; */
  background-color: #0669B7;
  div {
    display: flex;
    flex-direction: row;
  }

  div ~ div {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    margin-right: 33px;
  }

  img {
    width: 80px;
    margin: 0 20px;
  }

  h1 {
    font-size: 36px;
    font-family: Roboto Slab;
    font-style: bold;
  }
`;
