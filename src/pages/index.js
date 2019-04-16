import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"


const IndexPage = () => (
  <Layout >
    <SEO title="Home" description="Home Description" image="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>
    <h1>Inicio</h1>
    <Image filename="gatsby-icon.png" />
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/pokemon/">pokemon</Link>
  </Layout>
)

export default IndexPage
