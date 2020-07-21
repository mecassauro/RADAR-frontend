import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 flex-direction: column;

`


export const Header = styled.div`
  height: 80px;
  width: 100%;
  padding: 0px 40px;
  background-color: #03B515;

  display: flex;

  align-items: center;
  justify-content: space-between;

  div{
    display: flex;
    align-content: center;
    align-items: center;

    > h1 {
      margin-left: 10px;
    }

  }

 div + div {

  padding: 5px 5px;
  padding-right: 20px;
  border-radius: 50px;
  background-color: #ffffff;

   > h1{
    color: #03B515;
    font-size: 20px;
   }

   > div {

    background-color: #B2F3B9;
    padding: 5px;
    border-radius: 50px;

    >svg {
    margin: 5px;
    color:#03B515;

    }
   }

 }


  img {

    width: 70px;
  }

  h1 {
    font-family: Roboto;
    font-size: 25px;
    font-weight: bold;
    color: #FFFFFF;
  }


`

export const MapContainer = styled.div`

Map{

    margin-top:7px;
    margin-left:50px;
    height: 65px;
    z-index: 1;
  }
  h1 {
    font-family: Roboto;
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
    margin-top:7px;
    margin-left:100px;
  }
`

export const Map = styled.div`
  z-index: 1;
`

export const TimeLine = styled.div`
  z-index: 2;
`



