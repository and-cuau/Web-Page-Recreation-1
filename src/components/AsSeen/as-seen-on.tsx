import styles from "./as-seen-on.module.scss";

export default function AsSeen() {
  return (
    <div className={styles.as_seen}>
      <h2>As seen on</h2>
      <div className={styles.logos}>
        <div className={styles.top}>
          <div>
            <img
              src="https://www.pngmart.com/files/23/Bbc-Logo-PNG-Photo.png"
              alt="bbc"
            />
            <img
              src="https://th.bing.com/th/id/OIP.5ICTHHtyPiB45dDHc3OONAHaEY?w=293&h=180&c=7&r=0&o=5&pid=1.7"
              alt="nbc"
            />
            <img
              src="https://th.bing.com/th/id/OIP.QswhFSAGj2rLHx-aDJO84wHaEB?w=272&h=180&c=7&r=0&o=5&pid=1.7"
              alt="wsj"
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.5ICTHHtyPiB45dDHc3OONAHaEY?w=293&h=180&c=7&r=0&o=5&pid=1.7"
              alt="nbc"
            />
            <img
              src="https://th.bing.com/th/id/OIP.QswhFSAGj2rLHx-aDJO84wHaEB?w=272&h=180&c=7&r=0&o=5&pid=1.7"
              alt="wsj"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
