import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Seo from "../components/seo";
import { useSiteMetadata } from "../utils/custom-hooks/useMetadata";
import Layout from "../components/layout";

const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout pageTitle={"Blog"}>
      <ul>
        {/*@ts-ignore*/}
        {data.allFile.nodes.map((node, index) => {
          return <li key={index}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title={"Blog"} />;

export default BlogPage;
