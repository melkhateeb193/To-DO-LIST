import "./theTopContainer.css";
import PropTypes from "prop-types";

export default function TheTopContainer({handleTogglePage , togglePage}) {
  return (
    <div className="theTopContainer">
      <h1>TODO</h1>
      <img
        src={togglePage ? "/icon-sun.svg" : "/icon-moon.svg"}
        alt={togglePage ? "sun" : "moon"}
        onClick={handleTogglePage}
      />
    </div>
  );
}

TheTopContainer.propTypes = {
  handleTogglePage:PropTypes.func.isRequired,
  togglePage:PropTypes.bool.isRequired,
};