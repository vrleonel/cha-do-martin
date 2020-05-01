import { useStaticQuery, graphql } from "gatsby";

export const useTipTopImage = () => {
  const { staticImage } = useStaticQuery(graphql`
    query {
      staticImage: file(relativePath: { eq: "tip-top.png" }) {
        childImageSharp {
          fixed(width: 200) {
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