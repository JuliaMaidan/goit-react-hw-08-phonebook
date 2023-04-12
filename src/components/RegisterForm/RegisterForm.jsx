import styles from '../ContactForm/ContactForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';
import { register } from 'redux/auth/operations';
import { ToastContainer } from 'react-toastify';
import Spinner from '../Loader/Loader';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>User name</label>
        <input className={styles.field} type="text" name="name" />

        <label className={styles.label}>Email</label>
        <input className={styles.field} type="email" name="email" />

        <label className={styles.label}>Password</label>
        <input className={styles.field} type="password" name="password" />

        <button className={styles.btn} type="submit">
          Sign up
        </button>
      </form>
      {isLoading && <Spinner />}
      <ToastContainer />
    </>
  );
};
