import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" description="PAge 2 description" image="https://circuit.com.pe/test-nextjs/static/test-seo.jpg" />
    <p>Page 2</p>
    <Image filename="gatsby-astronaut.png"/>
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <Link to="/pokemon/">pokemon</Link>
  </Layout>
)

export default SecondPage
