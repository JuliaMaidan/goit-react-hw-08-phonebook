import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import styles from '../components/App.module.scss';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className={styles.box}>
        <div className={styles.box_forForm}>
          <h2 className={styles.title}>Enter your contact information</h2>
          <RegisterForm />
        </div>
      </div>
      ;
    </>
  );
}
