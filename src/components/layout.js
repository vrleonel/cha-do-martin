/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import useKonamiCode from '../hooks/use-konami-code';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useKonamiCode(() => {
    window.location = 'https://vrleonel.dev/tetris/';
  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 0.25rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}. Feito por Vitor &amp; Tati com carinho para o Martin <span role="img" aria-label="heart">❤️</span>
          {` `}
          <a href="https://vrleoenl.dev">vrleone.dev</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
