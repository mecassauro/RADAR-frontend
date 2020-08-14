import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.primary};
  border-radius: 0 0 50px 0;

  img {
    width: 80px;
    margin: 0 20px;
  }

  h1 {
    margin-right: 30px;
    font-size: 26px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5vw;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 30px;
  }
`;

export const TimeLine = styled.div`
  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 1;
  height: 80px;
  width: 100vw;
  max-width: 80vw;
  margin-bottom: 40px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Controlls = styled.div`
  width: 100px;
  margin: 0px 30px;
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;

export const LineContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
`;

export const UBSInfo = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 380px;
  height: 370px;
  background-color: #fff;
  position: fixed;
  z-index: 2;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  right: 20px ;
  top: 100px;

  > svg {

    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;

  }

  >h1{
    color: #808080;
    margin: 20px 0px;

  }

   table{
    color: #808080;
    border: 1px solid #ECECEC;
    width: 80%;
    border-collapse: collapse;


    > tr td {
      padding: 5px;
    }

    & tr:nth-child(even) {
      background-color: #fff;

    }
    & tr:nth-child(odd) {
      background-color: #eee;
    }
   }

`;

export const Line = withStyles({
  root: {
    color: theme.color.primary,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
