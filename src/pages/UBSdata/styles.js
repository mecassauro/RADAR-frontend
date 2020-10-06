import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: block;
  background: #f6f6f6;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  overflow-y: auto;
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 15px 10px;
`;

export const DataContainer = styled.div`
  margin: 0 19px 0px 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #f6f6f6;

  > div {
    color: black;
    display: flex;
  }
`;

export const Pdf = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #545454;
  width: 160px;
  border-radius: 8px;
  border: 0;
  background-color: #fff;

  & ~ & {
    margin-left: 11px;
  }

  &:hover {
    background-color: ${darken(0.1, '#fff')};
  }

  &:active {
    background-color: ${darken(0.2, '#fff')};
  }
  span {
    margin-right: 16px;
  }

  cursor: pointer;
`;

export const Content = styled.div`
  margin: 10px 20px 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f6f6f6;

  /* height: 160px; */

  border-radius: 8px;
`;

export const MiniContainer = styled.div`
  padding: 15px 0 15px 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 395px;
  /* width: 336px; */
  /* height: 160px; */

  margin-right: 12px;
  & + div + div + div {
    margin-right: 0px;
  }

  h1,
  strong {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  h1 {
    font-size: 40px;
  }

  strong {
    font-size: 18px;
    margin-bottom: 10px;
  }

  border-radius: 8px;
  color: #4f4f4f;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    margin-right: 40px;
    margin-left: 20px;
    color: #01579b;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #959595;
    font-size: 15px;

    small {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;

      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 14px;
    }

    img,
    svg {
      margin-right: 5px;
      margin-left: 0;
    }
  }
`;

export const Content2 = styled.div`
  margin: 14px 20px 0px 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 8px;
  /* height: 615px; */

  strong {
    font-size: 20px;
  }
`;

export const Content3 = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f6f6f6;

  border-radius: 8px;

  height: 520px;
  width: 70%;

  margin-right: 15px;
`;

export const Comorbidities = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  border-radius: 8px;

  height: 529px;
  width: 30%;

  h2 {
    margin: 10px 0 0 12px;
    color: #4f4f4f;

    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 22px;
  }

  h2 ~ h2 {
    margin-top: 50px;
  }
`;

export const Cases = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: #fff;

  border-radius: 8px;
  min-height: 310px;
  /* min-height: 350px; */

  /* width: 963px; */
  padding: 10px 0;
  margin-bottom: 14px;

  img {
    margin-top: 10px;
    margin-right: 30px;
  }

  span {
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: #4f4f4f;

    margin-left: 40px;
    /* float: left; */
  }
`;

export const Content4 = styled.div`
  display: flex;
  flex-direction: row;

  background-color: #fff;

  border-radius: 8px;
  height: 205px;

  background-color: #f6f6f6;
`;

export const Deaths = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  width: 62%;
  /* width: 630px */

  background-color: #fff;

  margin-right: 15px;
  padding-top: 10px;
  img {
    margin-top: 10px;
    margin-right: 30px;
  }
  span {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;

    div {
      display: flex;
      font-size: 14px;
      margin-right: 50px;
      justify-content: center;
    }
    svg {
      margin-right: 5px;
    }
    svg ~ svg {
      margin-left: 10px;
    }
    color: #4f4f4f;

    margin-left: 40px;
  }
`;

export const Sexes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  width: 38%;
  /* width: 380px */

  background-color: #fff;

  div ~ div {
    margin-top: 10px;
  }

  font-family: 'Roboto', sans-serif;
  div {
    font-weight: bold;

    display: flex;
    align-items: center;

    margin-top: 25px;
    color: #4f4f4f;

    img ~ img {
      margin-left: 70px;
    }
    h1 {
      font-weight: bold;
      font-size: 36px;
    }

    h1 ~ h1 {
      margin-left: 55px;
    }

    h4 ~ h4 {
      margin-left: 55px;
    }

    h4 {
      display: flex;
      flex-direction: row;
      align-items: center;

      /* font-family: 'Roboto', sans-serif; */
      font-weight: bold;
      font-size: 14px;

      margin-top: 40px;

      svg {
        margin-right: 5px;
      }
    }
  }
`;
