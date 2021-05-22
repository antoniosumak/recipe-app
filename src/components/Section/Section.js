import React from "react";
import "./Section.scss";

const Section = ({ children, title }) => {
  return (
    <section className={"Section"}>
      {title && <h1 className={"Section-Title"}>{title}</h1>}
      {children}
    </section>
  );
};

export default Section;
