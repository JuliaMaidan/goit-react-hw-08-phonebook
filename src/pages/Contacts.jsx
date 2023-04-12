import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import styles from '../components/App.module.scss';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div className={styles.box}>
        <div className={styles.box_forForm}>
          <h2 className={styles.title}>Create new contact</h2>
          <ContactForm />
        </div>
        <div>{isLoading && 'Request in progress...'}</div>
        <div className={styles.box_forForm}>
          <h2 className={styles.title}>Your contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </div>
    </>
  );
}
