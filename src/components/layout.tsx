import * as React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../utils/custom-hooks/useMetadata";

const Layout: React.FC<{ pageTitle?: string; children?: React.ReactNode }> = ({
  pageTitle,
  children,
}): React.ReactElement => {
  const { title } = useSiteMetadata();

  return (
    <div>
      <header>{<title></title>}</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
