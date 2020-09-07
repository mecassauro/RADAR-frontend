import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.button`
  border: 0;
  width: 100%;
  height: 50px;

  background: #fff;

  font-size: 24px;
  font-weight: bold;
  color: ${theme.color.primary};
  border-radius: 5px;
`;
