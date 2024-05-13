import "./Footer.css";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid={"footer"} className={"footer"}>
      <ul>
        {links.map((link, i) => (
          <li key={i} data-testid={`footerLink${i}`}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <p data-testid="footerContent">© {year}</p>
    </footer>
  );
};

Footer.propTypes = {
  // finish me
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

Footer.defaultProps = {
  // finish me
  links: [],
};

export default Footer;
