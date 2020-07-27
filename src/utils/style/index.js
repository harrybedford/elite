/* eslint-disable no-param-reassign */
import { css } from 'styled-components'

export const breakpoints = {
  xsmall: '320px',
  small: '767px',
  medium: '1023px',
  large: '1279px',
  xlarge: '1439px',
  xxlarge: '1440px',
}

export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media screen and (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
