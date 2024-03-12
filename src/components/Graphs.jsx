import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
// Graphs
const Graphs = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Graphs Unveiled <br className="sm:block hidden" /> 
      Illuminating Connections
       in Data
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "Unlocking Insights through Graphs: In this visually compelling representation,
       graphs emerge as powerful tools for data visualization. Nodes and edges elegantly
        convey complex relationships, transforming raw data into meaningful connections.
      </p>

    </div>
  </section>
);

export default Graphs;
