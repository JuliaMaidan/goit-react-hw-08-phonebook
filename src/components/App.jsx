import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.box}>
      <div className={styles.box_forForm}>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div className={styles.box_forForm}>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
};
