import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  height: 100vh;

  > img {
    width: 100%;
    max-height: 30vw;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 38.5714px;
    line-height: 45px;

    color: #808080
  }

  h2 {
    margin-top: 7px;
    margin-bottom: 87px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    color: #808080;
  }
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  height: 100vh;
  background-color: #E91E63;

  img {
    width: 30vh;
    margin-bottom: 28px;
  }

  h1 {
    margin-bottom: 60px;

    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    color: #FFFFFF;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;

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
