import styles from "./news.module.scss";

export default function News() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>News from our analysts</h2>
        <a>View more</a>
      </div>
      <div className={styles.column}>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.Ooxv6wpRUb8VoALtPOwdrQHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7"
            alt="stock"
          />
          <p className={styles.title}>
            Introducing the new Markets page – a comprehensive view of financial
            markets.
          </p>
          <p>Feb 26</p>
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.Ooxv6wpRUb8VoALtPOwdrQHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7"
            alt="money"
          />
          <p className={styles.title}>
            Expanding our crypto asset coverage -- now with 3,000+ new tokens
          </p>
          <p>Feb 20</p>
        </div>
      </div>
    </div>
  );
}
