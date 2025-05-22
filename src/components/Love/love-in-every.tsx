// src/components/HelloWorld.jsx
import styles from "./love.module.scss";

export default function LoveInEvery() {
  return (
    <div className={styles.container}>
      <h2>Love in every #Trendhunt</h2>
      <p>
        TrendHunt is a trusted investment engine used by regular investors as
        well as analysts and brokerages nationwide. It tracks the quality of
        stocks through its automated system and provides screeners, strategies,
        and tools that can potentially maximize your returns.
      </p>
      <a href="/home">About us</a>

      <div className={styles.column}>
        <div className={styles.achievements}>
          <div>
            <p className={styles.ac}>10M+</p>
            <p>Traders & Investors</p>
          </div>
          <div>
            <p className={styles.ac}>$2B+</p>
            <p>Assets Managed</p>
          </div>
          <div>
            <p className={styles.ac}>600K+</p>
            <p>Paid</p>
          </div>
          <div>
            <p className={styles.ac}>2.5M+</p>
            <p>Mobile Reviews</p>
          </div>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.H5260CaW3OIBoN8e3nypUAAAAA?rs=1&pid=ImgDetMain"
          alt="guyatdesk"
        />
      </div>
    </div>
  );
}
