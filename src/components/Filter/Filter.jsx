import styles from './filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <label className={styles.label}>Find contacts by name or number</label>
      <input
        className={styles.filter}
        value={filter}
        name="filter"
        onChange={handleFilter}
        type="text"
      />
    </>
  );
};
