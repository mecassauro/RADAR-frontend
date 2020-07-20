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
background-color: #0276AA;
display: flex;
justify-content: center;
align-items: center;
width: 50%;
flex-direction: column;

  img {

    margin-bottom:89px;

  }

  form + img{

    position: relative;
    bottom: 15px;
    right: -150px;

  }

 form {

  h1{
    margin: 24px;
  }

  font-family: 'Roboto';
  color: #FFFFFF;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
 }
`


