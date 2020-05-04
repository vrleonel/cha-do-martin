import { useStaticQuery, graphql } from "gatsby";

export const useNosDaviImage = () => {
  const { staticImage } = useStaticQuery(graphql`
    query {
      staticImage: file(relativePath: { eq: "nos-davi.png" }) {
        childImageSharp {
          fixed(width: 136) {
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