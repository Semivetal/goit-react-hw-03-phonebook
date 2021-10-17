import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <span className={styles.contactName}>{name}</span>
          <span className={styles.contactNumber}>{number}</span>
          <button
            className={styles.contactBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
