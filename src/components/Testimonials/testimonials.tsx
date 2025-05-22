import styles from "./testimonials.module.scss";

export default function Testimonials() {
  return (
    <>
      <h2>What customers say</h2>
      <div className={styles.testimonials}>
        <div className={styles.row}>
          <div className={styles.testimonial}>
            <div className={styles.caption}>
              <p>
                I recently saw another demonstration of graphic design's
                ubiquity. Someoene had taken a series of photographs of busy
                streets.
              </p>
              <p>Johnny Ive . Love from</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.caption}>
              <p>
                I recently saw another demonstration of graphic design's
                ubiquity. Someoene had taken a series of photographs of busy
                streets.
              </p>
              <p>Johnny Ive . Love from</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.caption}>
              <p>
                I recently saw another demonstration of graphic design's
                ubiquity. Someoene had taken a series of photographs of busy
                streets.
              </p>
              <p>Johnny Ive . Love from</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
