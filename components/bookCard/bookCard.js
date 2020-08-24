import styles from './bookCard.module.css'

export default ({book = {}}) => {
  return(
    <a href={book.link} target="_blank" rel="noopener">
      <div className={styles.bookCard}>
        <img className={styles.img} src={book.image} alt={`${book.name} cover image`} />
        <div>
          <p className={styles.name}>{book.name}</p>
          <p className={styles.author}>{book.author}</p>
        </div>
      </div>
    </a>
  )
};
