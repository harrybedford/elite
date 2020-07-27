import React, { Fragment } from 'react'
import { node } from 'prop-types'
import {
  Header,
  Footer,
} from '../../components'

const GlobalLayout = ({ children }) => (
  <Fragment>
    <Header />
    { children }
    <Footer />
  </Fragment>
)

GlobalLayout.propTypes = {
  children: node.isRequired,
}

export default GlobalLayout
