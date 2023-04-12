import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import styles from './userMenu.module.scss';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>Welcome, {user.email}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
};
