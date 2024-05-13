import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ options }) => {
  return (
    <nav data-testid="nav" className="navbar">
      <ul data-testid="ul" className="navbar-ul">
        {options &&
          options.map((option, index) => (
            <li key={index} data-testid={`li${index}`}>
              <a data-testid={`a${index}`} className="link" href={option.path}>
                {option.label}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
