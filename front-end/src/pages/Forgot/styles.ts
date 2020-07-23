import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
`

export const Background = styled.div`

  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items:center;
  flex:1;
  height: 100vh;
  img{
    height: 500px;
  }


`
export const Content = styled.div`
background-color: #069E15;
display: flex;
justify-content: center;
align-items: center;
width: 55%;
flex-direction: column;

  img {
    margin-top:0px;
  }

 form {

  h1{
    margin-bottom: 24px;
  }

  font-family: 'Roboto';
  color: #FFFFFF;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
 }

 form + a {
   margin-top: 10px;
 }

 a {
  font-family: Roboto;
  font-size: 18px;
  color: #FFFFFF;
  text-decoration:none;
 }

 a + a {
   margin-top: 20px;
   font-weight: bold;
 }

`