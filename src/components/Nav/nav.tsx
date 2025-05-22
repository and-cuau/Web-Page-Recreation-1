import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <h3>Trendhunt</h3>
        <div className={styles.pages}>
          <a>Markets</a>
          <a>Portfolio</a>
          <a>Plan</a>
        </div>
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a>Log In</a>
      </nav>
    </>
  );
}
