import styles from "./hero.module.scss";

export default function Hero() {
  // const trending = ["Tesla", "NVIDIA", "Palantir", "Apple"];

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.image_container}>
          <div className={styles.gradient}></div>
          <img src="./mountain-background.jpg" alt="" />
        </div>
        <div className={styles.container}>
          <h1>Lead the Market with Trendhunt</h1>
          <p>Invest Smartly with Our Stock Scoring System</p>

          <div className={styles.search}>
            {/* <MagnifyingGlassIcon /> */}
            <input
              type="search"
              name="search"
              placeholder="Search Stock, Index, Crypto and MF"
            />
          </div>

          <div className={styles.trending_container}>
            <p className={styles.label}>What's Trending:</p>
            <p>Tesla</p>
            <p>NVIDIA</p>
            <p>Palantir</p>
            <p>Apple</p>
          </div>
        </div>
      </div>
    </>
  );
}
