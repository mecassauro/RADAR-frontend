import styled from 'styled-components';
import theme from '../../styles/theme';

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

export const Background = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;

  height: 100vh;

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

export const Borda = styled.div`

  border: 1px solid #CDCDCD;
  margin-bottom: 40px

`;

export const Texto1 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 20px;
  line-height: 23px;

  color: #494949;
`;

export const SubCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const Sub = styled.div`

link {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #0364D7;
  margin-left: 25px;
  margin-right: 25px;
}
`;
