import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

// query receives a slug, passed in gatsby-node.js context for this template.
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

/*
GRAPHQL STRUCTURE:
{
    allMarkdownRemark {
     edges {
      node {
        fields {
          slug
        },
        frontmatter {
          title
          date
        },
        html
      }
    }
    }
  }
*/
