import styles from "./AboutContent.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import {
  JaneImage,
  JaneWebpImage,
  JacobImage,
  JacobWebpImage,
} from "../../../assets/images";

const AboutContent = () => {
  return (
    <section className={`${styles.aboutContent} containerBlack`}>
      <div className={`${styles.aboutContent__container} container`}>
        <div className={styles.aboutContent__statistics}>
          <span className={styles.aboutContent__statisticsCount}>114%</span>
          <span className={styles.aboutContent__statisticsText}>
            Cumulative Returns Since Inception - The Bento Wealth's cumulative
            return outperforms the Nasdaq-100's return during the same period
          </span>
        </div>
        {/* statistics */}

        <div className={styles.aboutContent__staffContainer}>
          <div>
            <ImageWebp
              src={JaneImage}
              srcSet={JaneWebpImage}
              alt="Jane Doe"
              className={styles.aboutContent__staffImg}
            />
          </div>
          <div>
            <h2 className={styles.aboutContent__staffTitle}>Jane Doe</h2>
            <br />
            <span className={styles.aboutContent__staffText}>
              With over 15 years of experience as a stock analyst on Wall
              Street, Jane has solidified her reputation as a seasoned
              professional.
              <br />
              <br />
              Her insights, honed during the post-financial crisis, have
              consistently garnered attention and respect.
              <br />
              <br />
              Since 2015, Jane has been a prominent figure at stock conferences
              and in the media, sharing her bold predictions and in-depth
              analyses.
            </span>
          </div>
        </div>
        {/* staffContainer */}

        <div className={styles.aboutContent__staffContainer}>
          <div>
            <h2 className={styles.aboutContent__staffTitle}>Jacob Smith</h2>
            <br />
            <span className={styles.aboutContent__staffText}>
              Our seasoned Portfolio Manager, actively oversees the Bento Wealth
              Fund, delivering insights and actionable strategies. He manages
              our real-time trade alerts and stock positions.
              <br />
              <br />
              Jacob's proven track record of outperforming the market during
              volatile times underscores his expertise in navigating the dynamic
              world of investing.
            </span>
          </div>

          <div>
            <ImageWebp
              src={JacobImage}
              srcSet={JacobWebpImage}
              alt="Jane Doe"
              className={styles.aboutContent__staffImg}
            />
          </div>
        </div>
        {/* staffContainer */}
      </div>
    </section>
  );
};

export default AboutContent;
