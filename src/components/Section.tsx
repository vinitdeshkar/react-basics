import React from "react";

const Section = ({ title, children, ...props }) => {
  return (
    <section id="examples" {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
