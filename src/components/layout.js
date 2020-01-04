/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import styled, { createGlobalStyle } from 'styled-components'

import 'reset-css'

const GlobalStyle = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

  body {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }
`

const LayoutBase = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${prop => prop.background};
`

const Layout = ({ children, backgroundColor }) => {
  return (
    <LayoutBase background={backgroundColor}>
      <GlobalStyle />
      {children}
    </LayoutBase>
  )
}

Layout.defaultProps = {
  backgroundColor: '#413C69',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
}

export default Layout
