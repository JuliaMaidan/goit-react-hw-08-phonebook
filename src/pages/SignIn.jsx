import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import styles from '../components/App.module.scss';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className={styles.box}>
        <div className={styles.box_forForm}>
          <h2 className={styles.title}>Enter your contact information</h2>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
