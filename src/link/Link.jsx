import React from "react";

import "./Link.css";

const Link = ({ url, target, title }) => {
  return (
    <a className="link" href={url} target={target}>
      {title}
    </a>
  );
};

export default Link;
