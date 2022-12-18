import * as React from "react";
import { useSiteMetadata } from "../utils/custom-hooks/useMetadata";

const Seo: React.FC<{ title?: string }> = (props): React.ReactElement => {
  const { title } = useSiteMetadata();
  return (
    <title>
      {props.title} | {title}
    </title>
  );
};

export default Seo;
