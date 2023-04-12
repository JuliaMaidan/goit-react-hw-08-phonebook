import styles from '../ContactForm/ContactForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ToastContainer } from 'react-toastify';
import { selectIsLoading } from 'redux/auth/selectors';
import Spinner from '../Loader/Loader';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Email</label>
        <input className={styles.field} type="email" name="email" />

        <label className={styles.label}>Password </label>
        <input className={styles.field} type="password" name="password" />

        <button className={styles.btn} type="submit">
          Sign in
        </button>
      </form>
      <ToastContainer />
      {isLoading && <Spinner />}
    </>
  );
};
