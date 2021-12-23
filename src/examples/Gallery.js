import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 200
            height: 200
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage image={pathToImage} className="gallery-img" />
            <p>{image}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default Gallery

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`
