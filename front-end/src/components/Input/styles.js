import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 0px 10px;
  svg {
    margin-right: 8px;
  }

  input {
    width: 100%;
    height: 50px;
    border: 0;
    color: #666360;
    &::placeholder {
      color: #666360;

      font-size: 16px;
    }
  }
`;
