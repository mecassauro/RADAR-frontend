import styled from 'styled-components';

import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${theme.color.background};
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  height: 100vh;

  > img {
    max-height: 30vw;
  }

  color: ${theme.color.darkGrey};

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 38.5714px;
    line-height: 45px;
  }

  h2 {
    margin-top: 7px;
    margin-bottom: 87px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
  }
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 28vw;

  min-width: 280px;

  background-color: #fff;
  border: 1px solid ${theme.color.lightGrey};
  border-radius: 8px;

  img {
    width: 100px;
  }

  h1 {
    margin-bottom: 0px;

    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 75px;
    color: ${theme.color.darkGrey};
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24vw;
    min-width: 260px;
    font-size: 14px;

    margin-bottom: 50px;

    div + div {
      margin-top: 8px;
    }

    button {
      margin: 16px 0px;
    }
  }
`;

export const CreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
  font-weight: bold;

  svg {
    margin-right: 8px;
  }
`;
