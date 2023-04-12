import { NavLink } from 'react-router-dom';
import styles from './authNav.module.scss';

export const AuthNav = () => {
  return (
    <div className={styles.linkWrapper}>
      <NavLink className={styles.link} to="/register">
        SignUp
      </NavLink>
      <NavLink className={styles.link} to="/login">
        SignIn
      </NavLink>
    </div>
  );
};
