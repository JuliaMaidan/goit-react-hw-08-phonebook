import styles from '../components/App.module.scss';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.homeTitle}>Create your own phone book</h1>
      <div className={styles.homeBox}></div>
    </div>
  );
};

export default Home;
