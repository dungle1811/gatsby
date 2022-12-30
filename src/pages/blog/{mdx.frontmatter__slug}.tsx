import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Seo from "../../components/seo";
import Layout from "../../components/layout";

const BlogPost: React.FC<PageProps> = ({ data, children }) => {
  return (
    <Layout pageTitle={(data as any).mdx.frontmatter.title}>
      <p>{(data as any).mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title={"Super Cool Blog Posts"} />;

export default BlogPost;
