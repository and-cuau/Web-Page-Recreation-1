import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a>Markets</a>
          <a>Portfolio</a>
          <a>Plan</a>
          <a>News</a>
          <div className={styles.imgs}>
            <img
              className={styles.appstore}
              src="https://th.bing.com/th/id/OIP._cFfCZtm5NL7ol_GTl3LJwHaCj?w=324&h=120&c=7&r=0&o=5&pid=1.7"
              alt="appstore"
            />
            <img
              className={styles.appstore}
              src="https://th.bing.com/th/id/OIP.mxhbVrKj-KJlvUlg8UvtqgHaCQ?w=286&h=106&c=7&r=0&o=5&pid=1.7"
              alt="appstore"
            />
          </div>
        </nav>
        <div className={styles.copyright}>
          <p>© 2025 Trendhunt Inc. All Rights Reserved.</p>
          <div className={styles.info}>
            <p>Privacy policy</p>
            <p>●</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
}
