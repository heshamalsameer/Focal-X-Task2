import { Card } from "./Card";
import styles from "./Properties.module.css";
import { arry } from "../../utils";

const Properties = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          <h6>PROPERTIES</h6>
          <h1>We Provide The Best Property You Like</h1>
        </div>
      </div>
      <div className={styles.grid}>
        {arry.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Properties;
