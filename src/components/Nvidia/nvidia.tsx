import { useState } from "react";

import styles from "./Nvidia.module.scss";

export default function Nvidia() {
  const [bgColors, setBgColors] = useState(Array(11).fill("white"));
  const [colors, setColors] = useState(Array(11).fill("black"));

  const changeColor = (i: number) => {
    const newBgColors = Array(11).fill("white");
    const newColors = Array(11).fill("black");

    newBgColors[i] = "black";
    newColors[i] = "white";

    setBgColors(newBgColors);
    setColors(newColors);
  };

  const buttonLabels = [
    "Dashboard",
    "Price",
    "Quality",
    "Valuation",
    "Fintrend",
    "Technicals",
    "Returns",
    "Financials",
    "Shareholding",
    "CompanyCV",
    "Compare",
  ];

  return (
    <div className={styles.nvidia}>
      <h4></h4>
      <p className={styles.categories}>
        markets | sector:hardware technology & equipment | industry :
        semiconductors | nvidia corp
      </p>

      <div className={styles.container}>
        <img
          className={styles.container__img}
          src="./nvidia-logo.jpg"
          alt="NVIDIA"
        />
        <div>
          <p className={styles.name}>NVIDIA Corp.</p>
          <p className={styles.price}>115.25</p>
        </div>
        <div className={styles.icon}></div>
      </div>

      <div className={styles.buttons}>
        {buttonLabels.map((label, index) => (
          <a
            key={index}
            href={`#${label.toLowerCase()}`}
            className={styles.tag}
            style={{ backgroundColor: bgColors[index], color: colors[index] }}
            onClick={(e) => {
              e.preventDefault();
              changeColor(index);
            }}
          >
            {label}
          </a>
        ))}
      </div>

      <div className={styles.port}>
        <div className={styles.column}>
          <div className={styles.strong}>
            <p className={styles.strong_p}>WHY IT'S A STRONG BUY</p>
            <ol>
              <li className={styles.num}>
                Strong long term fundamental strength with an average ROE of
                49.67%
                <ul>
                  <li className={styles.point}>
                    Healthy long term growth as Net Sales has grown by an annual
                    rate of 64.24% and Operating profit at 95.58%
                  </li>
                  <li className={styles.point}>
                    Company has a low debt to equity ratio avg at -0.43 times
                  </li>
                </ul>
              </li>
              <li className={styles.num}>
                With a growth in net profit of 14.41 the company declared
                outstanding results in oct 24
                <ul>
                  <li className={styles.point}>
                    declared outstanding results in oct 24
                  </li>
                  <li className={styles.point}>
                    Operating cash flow(y) highest at USD 58959 MM
                  </li>
                  <li className={styles.point}>
                    Interest coverage ratio highest at 36634.43
                  </li>
                  <li className={styles.point}>ROCE(HY) Highest at 127.21%</li>
                </ul>
              </li>
              <li className={styles.num}>
                Stock is technically in a mildly bullish range
                <ul>
                  <li className={styles.point}>
                    The technical trend has detriorated from bullish on
                    28-Feb-25
                  </li>
                  <li className={styles.point}>
                    The stocks MACD(Monthly) and Bollinger Band(Monthly)
                    technical factors are also bullish
                  </li>
                </ul>
              </li>
              <li className={styles.num}>
                With ROE of 91.01%, it has a fair valuation with a 38.4 price to
                book value
                <ul>
                  <li className={styles.point}>
                    The stock is trading at a premium compared to its average
                    historical valuations
                  </li>
                  <li className={styles.point}>
                    Over the past year, while the stock has generated a return
                    of -86.14%, its profits have risen by 142.34%
                  </li>
                </ul>
              </li>
              <li className={styles.num}>
                Company is among the highest 1% of all rated companies in the
                country
                <ul>
                  <li className={styles.point}>
                    It is ranked 1 across all 41 across the entire market
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <div className={styles.two}>
            <div className={styles.score}>
              <p>Trendhunt Score</p>
            </div>
            <div className={styles.more}>
              <p>You have 4 more dashboard views remaining</p>
              <div className={styles.views}>
                <div className={styles.view}>
                  <p className={styles.view_p}>Detailed Call on This Stock</p>
                </div>
                <div className={styles.view}>
                  <p className={styles.view_p}>Is NVIDIA CORP for you?</p>
                </div>
                <div className={styles.view}>
                  <p className={styles.view_p}>How much should you buy?</p>
                </div>
                <div className={styles.view}>
                  <p className={styles.view_p}>Returns Summary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
