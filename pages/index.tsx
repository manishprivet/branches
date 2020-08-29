import styles from '../styles/Home.module.css';
import List from '../components/List';

const Home: React.FC<unknown> = () => {
  return (
    <div className={styles.container}>
      <List />
    </div>
  );
};

export default Home;
