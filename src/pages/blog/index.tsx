import * as React from "react";
import { graphql, HeadFC, PageProps, Link } from "gatsby";
import Seo from "../../components/seo";
import Layout from "../../components/layout";

const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout pageTitle={"Blog"}>
      <ul>
        {/*@ts-ignore*/}
        {data.allMdx?.nodes.map((node, index) => {
          return (
            <article key={index}>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title={"Blog"} />;

export default BlogPage;
