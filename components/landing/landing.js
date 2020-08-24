import styles from './landing.module.css';
import BookCard from '../bookCard/bookCard';
import { SOCIAL_MEDIA_LINKS, CONTACT_MAIL } from '../../lib/index.constants';

export default ({books = []}) => {
  return (
    <div className={styles.landing}>
      <div>
        <p className={styles.name}>Pablo Egido</p>
        <p className={styles.title}>Frontend Engineer</p>
        <p className={styles.text}>Focused on UI and performance, I create blazing fast and enjoyable UI web interfaces. Keeping the code-base neat and maintainable is also another area where I try to excell. I consider myself a disciplined, well-organized and straight-to-the-point person and a pragmatic developer, following “the right tool for the right job” principle.</p>
        <div className={styles.contact}>
          <div className={styles.contactSection}>
            <p className={styles.contactSectionTitle}>Checkout my work</p>
            <div className={styles.iconsContainer}>
              {/* BEHANCE */}
              <div className={styles.icon}>
                <a aria-label="behance" href={SOCIAL_MEDIA_LINKS.behance} target="_blank" rel="noopener">
                  <svg width="32" height="21" xmlns="http://www.w3.org/2000/svg"><g fill="#444" fillRule="evenodd"><path d="M10.061 16.319h-5.51v-5.304h5.776s2.092-.027 2.092 2.726c0 2.295-1.53 2.555-2.358 2.578zM4.551 3.528H10.327s1.404 0 1.404 2.064c0 2.065-.826 2.364-1.762 2.364H4.551V3.528zm8.364 5.533s3.028-.225 3.028-3.776C15.943 1.733 13.466 0 10.327 0H0v19.846h10.327s6.304.199 6.304-5.857c0 0 .276-4.928-3.716-4.928zM28.143 11.015h-6.518s.427-3.059 3.491-3.059c3.067 0 3.027 3.06 3.027 3.06M25.04 5.05c-7.632 0-7.625 7.625-7.625 7.625s-.524 7.585 7.625 7.585c0 0 6.791.388 6.791-5.277h-3.492s.116 2.134-3.183 2.134c0 0-3.492.235-3.492-3.453h10.284S33.072 5.05 25.04 5.05M28.957 1.133H20.77v2h8.189z"/></g></svg>
                </a> 
              </div>
              {/* GITHUB */}
              <div className={styles.icon}>
                <a aria-label="github" href={SOCIAL_MEDIA_LINKS.github} target="_blank" rel="noopener">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M15.999 0C7.164 0 0 7.163 0 16.001c0 7.068 4.584 13.065 10.943 15.181.8.147 1.092-.347 1.092-.771 0-.38-.014-1.386-.022-2.721-4.451.967-5.39-2.145-5.39-2.145-.727-1.848-1.776-2.34-1.776-2.34-1.453-.993.11-.973.11-.973 1.605.113 2.45 1.649 2.45 1.649 1.428 2.445 3.745 1.739 4.657 1.329.145-1.034.559-1.739 1.016-2.139-3.553-.404-7.288-1.776-7.288-7.907 0-1.747.623-3.175 1.647-4.294-.165-.405-.714-2.031.156-4.234 0 0 1.344-.43 4.4 1.64a15.36 15.36 0 014.006-.539c1.359.007 2.728.184 4.006.539 3.054-2.07 4.395-1.64 4.395-1.64.873 2.203.324 3.829.159 4.234 1.026 1.119 1.645 2.547 1.645 4.294 0 6.146-3.741 7.499-7.305 7.895.574.494 1.086 1.47 1.086 2.963 0 2.139-.02 3.864-.02 4.389 0 .428.288.926 1.1.769C27.42 29.06 32 23.067 32 16.001 32 7.163 24.836 0 15.999 0" fill="#444" fillRule="evenodd"/></svg>
                </a>
              </div>
            </div>
          </div>
  
          <div className={styles.contactSection}>
            <p className={styles.contactSectionTitle}>Contact</p>
            <div className={styles.iconsContainer}>
              {/* MAIL */}
              <div className={styles.icon}>
                <a aria-label="email" href={`mailto:${CONTACT_MAIL}`}>
                  <svg width="30" height="23" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><path fill="#ECEFF1" d="M3.822 0H26.37v22.548H3.822z"/><path fill="#CFD8DC" d="M14.904 13.643l11.274 8.905V4.968z"/><path d="M27.188 0h-.938L15 8.903 3.75 0h-.938A2.817 2.817 0 000 2.818V19.73a2.817 2.817 0 002.813 2.819h.937V4.972L15 13.643 26.25 4.97v17.578h.938A2.817 2.817 0 0030 19.729V2.82A2.817 2.817 0 0027.187 0z" fill="#444"/></g></svg>
                </a>
              </div>
  
              {/* LINKEDIN */}
              <div className={styles.icon}>
                <a aria-label="linkedin" href={SOCIAL_MEDIA_LINKS.linkedin} target="_blank" rel="noopener">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.269 27.267h-4.746v-7.426c0-1.771-.03-4.049-2.466-4.049-2.469 0-2.846 1.93-2.846 3.922v7.553H12.47V11.996h4.55v2.088h.065c.633-1.201 2.181-2.467 4.49-2.467 4.806 0 5.694 3.162 5.694 7.275v8.375zM7.119 9.91a2.751 2.751 0 01-2.754-2.753A2.753 2.753 0 117.119 9.91zm2.374 17.357H4.742V11.996h4.751v15.271zM30.667 0H1.334C.597 0 0 .597 0 1.333v29.333C0 31.403.597 32 1.334 32h29.333c.736 0 1.333-.597 1.333-1.334V1.333C32 .597 31.403 0 30.667 0z" fill="#444" fillRule="evenodd"/></svg>
                </a>
              </div>
  
              {/* TWITTER */}
              <div className={styles.icon}>
                <a aria-label="twitter" href={SOCIAL_MEDIA_LINKS.twitter} target="_blank" rel="noopener">
                  <svg width="32" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M32 3.078a13.14 13.14 0 01-3.771 1.034A6.584 6.584 0 0031.116.48a13.166 13.166 0 01-4.169 1.593A6.557 6.557 0 0022.155 0a6.565 6.565 0 00-6.565 6.565c0 .514.058 1.015.17 1.496a18.639 18.639 0 01-13.532-6.86 6.539 6.539 0 00-.889 3.301 6.563 6.563 0 002.92 5.464 6.532 6.532 0 01-2.973-.821l-.001.083a6.568 6.568 0 005.267 6.437 6.578 6.578 0 01-2.965.113 6.571 6.571 0 006.133 4.559 13.172 13.172 0 01-8.154 2.81c-.53 0-1.052-.031-1.566-.091a18.587 18.587 0 0010.064 2.949c12.076 0 18.679-10.004 18.679-18.679 0-.285-.006-.568-.019-.85A13.315 13.315 0 0032 3.078" fill="#444" fillRule="evenodd"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.currentlyReadingTitle}>Currently Reading</p>
  
        {books.map((book, index) => <BookCard key={index} book={book} />) }
      </div>
    </div>    
  );
}
