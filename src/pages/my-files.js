import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      {data.allFile.edges.map(({ node }) => (
        <div>
          <Link to={node.relativePath}>{node.relativePath}</Link>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
