import React from 'react'
import ButtonStyle from './style'

const Button = (
  type,
  onClick,
  colour,
  loading,
  children,
) => (
  <ButtonStyle
    type={type || 'button'}
    onClick={onClick}
    colour={colour}
  >
    { loading ? 'Loading...' : children }
  </ButtonStyle>
)

export default Button
