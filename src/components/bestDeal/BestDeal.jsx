// import "./BestDeal.css";
import { GrFormSchedule } from "react-icons/gr";
import styles from "./BestDeal.module.css";

const BestDeal = () => {
  console.log(styles);

  return (
    <div className={styles.bestDeal}>
      <div className={styles.container}>
        <div>
          <div className={styles.header}>
            <div>
              <h6>BEST DEAL</h6>
              <h1>Find Your Best Deal Right Now!</h1>
            </div>
            <div>
              <button>Appartment</button>
              <button>Villa House</button>
              <button>penthouse</button>
            </div>
          </div>
          <div className={styles.midlle}>
            <div className={styles.card}>
              <div>
                <p>Total Flat Space</p>
                <span>185 m2</span>
              </div>
              <div>
                <p>Floor number</p>
                <span>26th</span>
              </div>
              <div>
                <p>Number of rooms</p>
                <span>4</span>
              </div>
              <div>
                <p>Parking available</p>
                <span>Yes</span>
              </div>
              <div>
                <p>Payment process</p>
                <span>Bank</span>
              </div>
            </div>
            <img src="/images/deal-01.jpg" alt="deal..." />
            <div className={styles.description}>
              <h4>Extra Info About Property</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                numquam, voluptates est laboriosam provident reiciendis mollitia
                placeat illo deleniti eius molestias error vel maiores corrupti.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                numquam, voluptates est laboriosam provident reiciendis mollitia
                placeat illo deleniti eius molestias error vel maiores corrupti.
              </p>
              <div>
                <div>
                  Schedule a visit
                  <GrFormSchedule className={styles.grIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
