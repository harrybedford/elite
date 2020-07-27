import styled from 'styled-components'

const Section = styled.section`
  width: ${props => props.width || '100%'};
  height: auto;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  float: left;
`

export default Section
