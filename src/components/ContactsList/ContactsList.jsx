import styles from './ContactsList.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import {
  // selectAllContacts,
  selectLoading,
  selectFilteredContacts,
  // selectError,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const filtered = useSelector(selectFilteredContacts);
  // const contacts = useSelector(selectAllContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {isLoading && <b>Loading contacts...</b>}
      {/* {error && <b>{error}</b>} */}
      {filtered.map(contact => (
        <li className={styles.item} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={styles.btn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
