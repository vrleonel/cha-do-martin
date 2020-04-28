import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTemplate from "../templates/blog-template";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <BlogTemplate key="markdown-pages/test.md" path={"markdown-pages/test.md"} />
  </Layout>
)

export default SecondPage
