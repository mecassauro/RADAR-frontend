import React, { InputHTMLAttributes } from 'react'

import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface InputProps extends  InputHTMLAttributes<HTMLInputElement> {

  name?: string;
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon,...rest}) =>{

return(
  <Container>
    {  Icon && <Icon color="#AAAAAA" margin-right="100"/>  }
    <input {...rest} />
  </Container>
)

}

export default Input
