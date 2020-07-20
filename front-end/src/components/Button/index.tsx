import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({...rest}) => {

    return(
        <Container>
          <button {...rest}/>
        </Container>
    )
}

export default Button
