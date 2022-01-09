import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.prototypes = {
  title: PropTypes.string,
};
