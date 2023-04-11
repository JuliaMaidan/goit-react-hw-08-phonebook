import styles from './filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => {
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
