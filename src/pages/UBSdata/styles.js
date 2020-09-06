import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background: #F6F6F6;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export const Content = styled.div`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 500px;
  height: 480px;
  padding: 45px;

  background: #FFFFFF;
  border: 1px solid #CDCDCD;
  box-sizing: border-box;
  border-radius: 20px;

  > img {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;

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

    input{

      margin-left: auto;
      margin-right: auto;
      width: 350px;
      height: 40px;

    }

    button {
      margin-left: auto;
      margin-right: auto;
      margin-top: 25px;
      width: 200px;
      height: 40px;
      background-color: #8257E5;

      font-style: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: center;

      color: #FFFFFF;
    }
  }
`;

