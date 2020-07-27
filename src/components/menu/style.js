import styled from 'styled-components'

const MenuStyle = styled.nav`
  float: right;
  height: 72px;
`

export const MenuItem = styled.a`
  float: left;
  padding: 8px 16px;
  height: 40px;
  font-size: 18px;
  color: white;
  font-family: sans-serif;
  text-decoration: none;
  border-top-right-radius: 24px;
  cursor: pointer;
  ${props => props.cta && 'background-color: #51b5cb;'}
  ${props => props.cta && 'border: 3px solid white;'}
`

export default MenuStyle
