import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.button`
  border: 0;
  width: 100%;
  height: 48px;

  background: ${theme.color.primary};

  font-size: 24px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
`;
