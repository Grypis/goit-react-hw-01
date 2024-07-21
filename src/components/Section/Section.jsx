import PropTypes from "prop-types";
import css from "./Section.module.css";
const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};
Section.prototype = {
  title: PropTypes.string,
};
export default Section;
