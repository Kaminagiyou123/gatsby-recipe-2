import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const index = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="egg"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff,just recipes</h4>
            </div>
          </div>
        </header>
      </main>
      <AllRecipes />
    </Layout>
  )
}

export default index
