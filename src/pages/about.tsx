import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"About Me"}>
      <Link to="/">Back to Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title={"About Me"} />;

export default AboutPage;
