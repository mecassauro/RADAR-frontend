import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background: #E5E5E5;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
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
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 500px;
  height: 500px;
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
      background-color: #E91E63;

      font-style: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: center;

      color: #FFFFFF;
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
