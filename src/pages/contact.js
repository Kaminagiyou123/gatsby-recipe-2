import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
const Contacts = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <setion className="contact-page">
          <article className="contact-info">
            <h3>Want to get in Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.{" "}
            </p>

            <p>
              Cardigan prism bicycle rights put a bird on it deep v. Hashtag
              swag health goth air plant, raclett
            </p>
            <p>
              e listicle fingerstache cold-pressed fanny pack bicycle rights
              cardigan poke.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xvolozzd"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textara name="message" id="namessageme" />
              </div>
              <button type="submit" className="btn block">
                submit{" "}
              </button>
            </form>
          </article>
        </setion>
        <section className="featured-recipes">
          <h5>Look at this Awesome source</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export default Contacts

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        cookTime
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        id
        title
      }
    }
  }
`
