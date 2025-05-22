// src/components/HelloWorld.jsx
import styles from "./lead.module.scss";

export default function LeadTheMarket() {
  return (
    <>
      <h2 className={styles.h2}>Lead the market with Trendhunt</h2>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.common} ${styles.div25}`}>
            {/* <PinIcon /> */}
            <h3>Stock X-Ray with Trend Score</h3>
            <p>
              Trend scoretracks a stock's health in real time. Find strengths
              and weaknesses across 100+ parameters
            </p>
          </div>
          <div className={`${styles.common} ${styles.div75}`}>
            {/* <DollarMGIcon /> */}
            <h3>Find high-return investments with Trendhunt</h3>
            <p>
              Screeners with 5000+ parameters, across financials, technicals,
              shareholding and more. Also create your own screeners and custom
              parameters
            </p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.common} ${styles.div100}`}>
            {/* <HexagonIcon /> */}
            <div className={styles.text}>
              <h3>Make confident trades with AI-powered Chart Patterns</h3>
              <p>
                Spot trends, identify breakouts, and make confident trades with
                real-time AI insights. No guesswork--just clear, data-driven
                signals to help you trade smarter and faster.
              </p>
              <ul>
                <li className={styles.point}>100+ Trading Ideas every month</li>
                <li className={styles.point}>
                  Real-time alerts on pattern breakouts
                </li>
                <li className={styles.point}>Proven back-tested paterns</li>
              </ul>
            </div>

            <img
              className={styles.img}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC3AHMDASIAAhEBAxEB/8QAGwABAQEBAAMBAAAAAAAAAAAAAAcFBgECBAP/xABIEAABAgMCCAoFCQYHAAAAAAAAAQIDBAUGEQchMTVydLKzEhMzNFFVdpPC0xQWFzJBFSIjRWFxgZGhJHOSsbTRQlRiY4PB8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCqrfep6RY0GAxYkaKyHDRbuFEcjUVbr7k6V+w9JqYhSkCYmYyrxcFivciXcJy5Ea2/Feq3In3kfqk3aK1tTSmyPCiR5iGsVsNsV8KVk5JVT6aYe3Hc7ErU6FS9HPfdDClTFrbMSz1ZEqELhJlThQ2Kn4RXtX9D8PXayXWELvZbzTj4OCeYRjeOtCkOJciubK09FhtXoRz4zXL/AAoJrBjNSspOzEG0c1FiS8tHjw4SSTW8a+HDV6MvSOq47rsi5QOw9drJdYQu9l/NHrtZLrCF3kv5pAmz0/cipNR0vRFxPX4nulQqaZJyZT/kcBevXayXWEPvJfzR67WS6wh95L+aQX5Tq/wnZvvF/ueflOsf52b71f7gXn12sl1hD7yX80eu1kusIfeS/mkHSoVd/CVJ6Z+a3hLfGVMV6JivX/34HotQqa5ZyZ7xwF79drJdYQu9l/NPKW0sm5URKhCx/wC7L+aS+yNmKjaqFU476zMycKTiwILFSDx/GviMc92N0RqJwUu6fe/PpXYKoypjtPMLpSDFT8ljgUGUqlMnuD6LNQ4iuS9jb1a5yIl68FHXX/hefZjItUbLV+xy/KHpCTNMV8NsackmvhulnqqI181KcLgq2/Fejr+hzVuVaNZauRKrLRIEyv7ZKpc9eEjuMYio1V4WK+69q33Y2vY7K9UQOjxgADnLYxHNpTYDXKizUzxbkRbr2pDfd+Sq1fwMXBuyDFg2rqCNTjo9bdK39ECWhMWGxPsThKa1sb/RqbjVLpxV+/3MSmTgvzRX+0M3uIAHejHeABw8/gysnOzUaZhxKhJcc90R0CSiwUgI5y3qsNsaE5UT7EW7oRMh8vsnsx1jWu8k/IKEAJ77J7MdY1rvJPyB7J7MdY1rvJPyChACe+yezHWNa7yT8geyey/xqNbu+P0smn68QUIAfBSaRTKJJQqfToPFS7HOet7lfEiRH3cKJFeuNXLi/JES5EuT7wAPwnJaDOyk7Jx2o6DNS0eXitX4siQ1apLMH8y/0mjuVy/SwmS8T/UnBm5fH3cD+FCtLkdov2VI3YFL41BW9UumUXF8b48wmMCyAADlbZOdxdJbf81Y8Zyp9qOgon81MzBfmiv9oZvcQDVti1FgUx3+JJl7U+5yw1X+SGVgvzRX+0M3uIAHegAAAAAAAAAAAAC5HaL9lSN2A5Wh6w3fzBZFyO0X7KkbsBytD1hu/mALIAAOUtkq8CktvW5Y0dVT4KqOgIi/qpm4L80V/tDN7iAaVsvdpH72Y2oBm4L80V/tDN7iAB3oAAAAAAAAAAAAAuR2i/ZUjdgVRIlDVVRE9JYl6rdjWYjoiFkXI7RfsqRaxH1Jrsp/XRALSAAOWtk5qQaW1U+csxFci9CNWEip+qGXgvzRX+0M3uIBpWy92kfvZjagGbgvzRX+0M3uIAHegAAAAAAAAAAAAC5HaL9lSLWI+pNdlP66IWlcjtF+ypF7DoqrRERFVfTJVbk6EnYqqBaAABy1sW3wqW+/3ZiK27p4Swl/6MvBfmiv9oZvcQDWtjzana27wGTgvzRX+0M3uIAHegAAAAAAAAAAAAC5HaL9lSN2A5Wh6wzfzBZFyO0X7KkbsBytD1hm/mALIAAOYtjzana27wGTgvzRX+0M3uIBrWx5tTtbd4DJwX5or/aGb3EADvQAAAAAAAAAAAABcjtF+ypG7AcrQ9YZv5gsi5HaL9lSN2A5Wh6wzfzAFkAAHMWx5tTtbd4DJwX5or/aGb3EA1rY82p2tu8Bk4L80V/tDN7iAB3oAAAAAAAAAAAAAuR2i/ZUjdgOVoesM38wWRcjtF+ypG7AcrQ9YZv5gCyAADmLY82p2tu8Bk4L80V/tDN7iAa1sebU7W3eAycF+aK/2hm9xAA70AAAAAAAAAAAAAXI7RfsqRuwHK0PWGb+YLIuR2i/ZUjdgOVoesM38wBZAABzFsebU7W3eAycF+aK/wBoZvcQDWtjzana27wGTgvzRX+0M3uIAHegAAAAAAAAAAAAC5HaL9lSN2A5Wh6wzfzBZFyO0X7KkbsBytD1hm/mALIAAOYtjzana27wGTgvzRX+0M3uIBrWx5tTtbd4DJwX5or/AGhm9xAA70AAAAAAAAAAAAAXI7RfsqRuwHK0PWG7+YLIuR2i/ZUjdgOVoesN38wBZAABzFsebU7W3eAycF+aK/2hm9xAAA70AAAAAAAAAAAAAXI7RfsqRuwHK0PWG7+YAAsgAA//2Q=="
              alt="iphone"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.common} ${styles.div50}`}>
            {/* <ClipboardIcon /> */}
            <h3>Analyst views on stocks with research reports</h3>
            <p>
              The largest research report database in the market, tracking
              analyst buys and sells, updates and downgrades, Full reports are
              available.
            </p>
          </div>
          <div className={`${styles.common} ${styles.div50}`}>
            {/* <ArrowsIcon /> */}
            <h3>Sync/Improt Portfolio</h3>
            <p>
              Easily connect accounts, track investments, and stay updated--
              seamlessly and securely
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
