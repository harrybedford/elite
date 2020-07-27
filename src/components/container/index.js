import styled from 'styled-components'
import { respondTo, breakpoints } from '../../utils/style'

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: block;
  margin: 0 auto;
  padding: 90px 0 16px;
  ${respondTo.medium`
    max-width: ${breakpoints.medium};
  `}
  ${respondTo.large`
    max-width: ${breakpoints.large};
    padding: 112px 0 16px;
  `}
  ${respondTo.xlarge`
    max-width: ${breakpoints.xlarge};
  `}
  ${respondTo.xxlarge`
    max-width: ${breakpoints.xxlarge};
  `}
`

export default Container
