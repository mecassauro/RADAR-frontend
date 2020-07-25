import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  height: 100vh;

  > img {
    width: 100%;
    max-width: 40vw;
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
  background-color: #069e15;

  img {
    width: 30vh;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;

    margin-bottom: 20px;

    div + div {
      margin-top: 8px;
    }

    button {
      margin: 16px 0px;
    }
  }
`;
export const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;

  svg {
    margin-right: 8px;
  }
`;
