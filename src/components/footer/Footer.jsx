import "./footer.css";
import PropTypes from "prop-types";

export default function Footer({ togglePage, setFilterType }) {
  return (
    <div className={togglePage ? "footerDark" : "footerLight"}>
      <p className="footerBtn" onClick={() => setFilterType("all")}>
        All
      </p>
      <p className="footerBtn" onClick={() => setFilterType("active")}>
        Active
      </p>
      <p className="footerBtn" onClick={() => setFilterType("completed")}>
        Completed
      </p>
    </div>
  );
}

Footer.propTypes = {
  togglePage: PropTypes.bool.isRequired,
  setFilterType: PropTypes.func.isRequired,
};
