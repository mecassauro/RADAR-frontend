import styled from 'styled-components';

export const Container = styled.div`

    display: block;
    background: #F6F6F6;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;

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

    button {g
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

export const Edge = styled.div`

    border: 1px solid #CDCDCD;
    margin-bottom: 5px;

    box-sizing: border-box;
    border-radius: 5px;

`;

export const Card = styled.div`

    margin-top: 50px;
    display:flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 500px;
    padding: 50px;

    background: #FFFFFF;
    border: 1px solid #CDCDCD;
    box-sizing: border-box;
    border-radius: 20px;

    img {
    }

`;

export const Text = styled.div`

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    margin-top: 25px;
    margin-bottom: 20px;
    line-height: 23px;

    color: #494949;
`;
