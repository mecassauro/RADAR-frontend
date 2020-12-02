import styled from 'styled-components';

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