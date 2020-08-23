import styles from './landing.module.css';
import BookCard from '../bookCard/bookCard';

export default ({books = []}) => (
  <div className={styles.landing}>
    <div>
      <p className={styles.name}>Pablo Egido</p>
      <p className={styles.title}>Frontend Engineer</p>
      <p className={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
    <div>
      <p className={styles.currentlyReadingTitle}>Currently Reading</p>

      {books.map((book, index) => <BookCard key={index} book={book} />) }
    </div>
  </div>    
);
