import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import {useFoxImage} from "../hooks/use-fox-image";



const bgWidth = 140;

const Header = ({ siteTitle }) => {
  const { fixed } = useFoxImage();

  return (
    <header
      style={{
        background: `#229700 url("${fixed.src}") no-repeat local 0% 0%`,
        backgroundSize: `${bgWidth}px`,
        marginBottom: `1.45rem`,
        textAlign: "center",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{  margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textShadow: "1px 2px 5px rgba(0,0,0,0.5)",
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
