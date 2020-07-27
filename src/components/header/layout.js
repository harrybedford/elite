import React, { Fragment } from 'react'
import { Logo } from './style'
import EliteLogo from '../../assets/logos/logo.jpg'
import Menu from '../menu'

const HeaderLayout = () => (
  <Fragment>
    <Logo
      alt="Elite Yacht Covers"
      src={EliteLogo}
    />
    <Menu />
  </Fragment>
)

export default HeaderLayout
