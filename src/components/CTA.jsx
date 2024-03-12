import styles from "../style";
import Buttonm from "./Button1";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Trust Our Model </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to do ,
        Upload Your Bank Statemant In Any Format And Wait For the Results.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-30 ml-0 sm:mt-2 mt-10`}>
      <Buttonm />
    </div>
  </section>
);

export default CTA;
