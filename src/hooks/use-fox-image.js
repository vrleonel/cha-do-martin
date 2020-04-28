import { useStaticQuery, graphql } from "gatsby"

export const useFoxImage = (src) => {
  const { staticImage } = useStaticQuery(graphql`
    query {
      staticImage: file(relativePath: { eq: "raposinha.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`
  );
  return staticImage.childImageSharp
}
