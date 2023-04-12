import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectAllContacts } from 'redux/contacts/selectors';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.find(
        contact => contact.name === name || contact.number === number
      )
    ) {
      toast.error(`This contact is already exists!`);
      form.reset();
      return;
    }

    dispatch(addContact([name, number]));

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Name</label>
      <input
        className={styles.field}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={styles.label}>Number</label>
      <input
        className={styles.field}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.btn} type="submit">
        Add contact
      </button>
      <ToastContainer />
    </form>
  );
};
