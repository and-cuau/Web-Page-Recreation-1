import styles from "./join.module.scss";

export default function Join() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.join}>
        <div className={styles.skewed}>
          <div className={styles.caption}>
            <h1 className={styles.h1}>
              Join Trendhunt today and take control of your investments.
            </h1>
            <a>Join for Free Today</a>
          </div>
        </div>
      </div>
    </div>
  );
}
