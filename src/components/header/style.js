import styled from 'styled-components'

const HeaderStyled = styled.header`
  width: calc(100% - 32px);
  height: 56px;
  margin: 16px 16px 0;
  padding: 8px;
  background-color: #061b22;
  color: white;
  position: fixed;
  top: 0;
  border-top-right-radius: 32px;
`

export const Logo = styled.img`
  height: 80px
`

export default HeaderStyled
