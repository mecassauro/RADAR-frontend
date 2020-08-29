import styled from 'styled-components';

export const Container2 = styled.div`
  display: block;
  background: #F6F6F6;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export const Idade = styled.div`
	height: 235px;
	width: 380px;
	background: #FAFAFA;
	border: 1px solid #CDCDCD;
	margin-top: 25px;
  	margin-left: 10px;
  	margin-right: 10px;
  	margin-bottom: 10px;

`;

export const Casos = styled.div`
	height: 430px;
	width: 820px;
	background: #FAFAFA;
	border: 1px solid #CDCDCD;
	margin-top: 25px;
  	margin-left: 10px;
  	margin-right: 10px;
  	margin-bottom: 10px;

`;

export const Comorbidades = styled.div`
	height: 340px;
	width: 380px;
	background: #FAFAFA;
	border: 1px solid #CDCDCD;
	margin-top: 25px;
  	margin-left: 10px;
  	margin-right: 10px;
  	margin-bottom: 10px;
`;

export const Profissao = styled.div`
	height: 340px;
	width: 380px;
	background: #FAFAFA;
	border: 1px solid #CDCDCD;
	margin-top: 25px;
  	margin-left: 10px;
  	margin-right: 10px;
  	margin-bottom: 10px;
`;

export const Sexes = styled.div`
	height: 235px;
	width: 380px;
	background: #FAFAFA;
	border: 1px solid #CDCDCD;
	
	margin-top: 25px;
  	margin-left: 10px;
  	margin-right: 10px;
  	margin-bottom: 10px;
`;


export const Content = styled.div`
  margin-top: 25px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: auto;
  align-items: center;
	display: flex;
  
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



