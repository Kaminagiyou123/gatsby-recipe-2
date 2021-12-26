import React from "react"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipesList"
import Layout from "../components/Layout"

const Tagtemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipeList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export default Tagtemplate
export const query = graphql`
  query GetRecipeTag($tag: String) {
    allContentfulRecipe(filter: { content: { tags: { eq: $tag } } }) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
