import styles from './bookCard.module.css'

export default ({book = {}}) => {
  return(
    <div className={styles.bookCard}>
      <img className={styles.img} src={book.image} />
      <div>
        <p className={styles.name}>{book.name}</p>
        <p className={styles.author}>{book.author}</p>
      </div>
    </div>
  )
};