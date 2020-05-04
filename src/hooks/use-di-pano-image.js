import { useStaticQuery, graphql } from "gatsby";

export const useDiPanoImage = () => {
  const { staticImage } = useStaticQuery(graphql`
    query {
      staticImage: file(relativePath: { eq: "logo-dipano.png" }) {
        childImageSharp {
          fixed(width: 180) {
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