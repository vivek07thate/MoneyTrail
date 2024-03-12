import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
// Insight
const Insight = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Gathering Insights <br className="sm:block hidden" /> and Historical Analysis
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      

      Reviewing the money trail reveals a consistent and transparent flow of funds,
       reflecting sound financial management and strategic fiscal decisions.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Insight;
