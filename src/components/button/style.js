import styled from 'styled-components'

const ButtonStyle = styled.button`
  width: 300px;
  height: 40px;
  padding: 8px;
  font-size: 18px;
  line-height: 24px;
  color: white;
  background-color: #061b22;
  box-shadow: 0 0.5625em 0 -0.3125em;
  border: 1px solid #061b22;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.5em 0 -0.3125em;
    transform: translateY(0.0625em);
  }
`

export default ButtonStyle
