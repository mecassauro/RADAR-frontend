import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 3px solid transparent;
  border-radius: 5px;
  padding: 0px 10px;
  svg {
    margin-right: 8px;
  }


  ${props => props.isErrored && css`
    border: 3px solid #c53030;
  ` }

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
