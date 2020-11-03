import styled from 'styled-components';

import theme from './theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${theme.color.background};
  height: 100vh;
  @media (max-width: 880px) {
    justify-content: center;
  }
`;

export const Title = styled.h2`
  color: ${theme.color.darkGrey};
  font-size: 36px;
  margin-top: 36px;
  margin-bottom: 36px;
  font-weight: bold;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Error = styled.span`
  width: 100%;
  color: ${theme.color.error};
  margin-bottom: 20px;
  font-size: 14px;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

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

export const VanishDiv = styled.div`
  @media (max-width: 880px) {
    display: none;
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
    min-width: 240px;
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

export const Extras = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
  font-weight: bold;

  svg {
    margin-right: 8px;
  }
`;

export const BoldText = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: ${theme.color.darkGrey};
`;
