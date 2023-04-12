import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';
import styles from '../App.module.scss';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={({ isActive }) => isActive && styles.active}
        to="/home"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => isActive && styles.active}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
