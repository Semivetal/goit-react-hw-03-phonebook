import PropTypes from "prop-types";
import styles from "./Filter.module.css";

function Filter({ onChange }) {
  return (
    <label className={styles.filter}>
      Find contacts by
      <input
        type="text"
        name="filter"
        onChange={onChange}
        className={styles.filterInput}
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
