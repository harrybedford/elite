import React, { Fragment } from 'react'
import { node, shape } from 'prop-types'
import GlobalStyle from '../global/style'
import GlobalMeta from '../global/meta'
import GlobalLayout from '../global/layout'

function EliteApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalMeta />
      <GlobalStyle />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </Fragment>
  )
}

EliteApp.propTypes = {
  Component: node.isRequired,
  pageProps: shape(),
}

EliteApp.defaultProps = {
  pageProps: {},
}

export default EliteApp
