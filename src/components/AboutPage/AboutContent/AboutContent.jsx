// AboutContent.jsx
import styles from "./AboutContent.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import {
  JaneImage,
  JaneWebpImage,
  JacobImage,
  JacobWebpImage,
} from "../../../assets/images";

import {
  hardworkIcon,
  researchIcon,
  innovationIcon,
  veteransIcon,
  JaneRightBottomIcon,
} from "../../../assets/svg";

const cardData = [
  {
    icon: hardworkIcon,
    title: "hardwork",
    subtitle: "Lorem ipsum dolor sit amet.",
    bgColor: "orange",
  },
  {
    icon: researchIcon,
    title: "research",
    subtitle: "Duis aute irure dolor in reprehenderit.",
    bgColor: "blue",
  },
  {
    icon: innovationIcon,
    title: "innovation",
    subtitle: "Excepteur sint occaecat cupidatat non proident.",
    bgColor: "gray",
  },
  {
    icon: veteransIcon,
    title: "veterans",
    subtitle: "Ut enim ad minim veniam.",
    bgColor: "red",
  },
];

const AboutContent = () => {
  return (
    <section className={`${styles.aboutContent} paddingYLg`}>
      <div
        className={`${styles.aboutContent__container} container containerBlack`}
      >
        <div className={styles.aboutContent__statisticsContainer}>
          <span className={styles.aboutContent__statisticsCount}>114%</span>
          <span className={styles.aboutContent__statisticsText}>
            Cumulative Returns Since Inception - The Bento Wealth's cumulative
            return outperforms the Nasdaq-100's return during the same period
          </span>
        </div>

        <div className={`${styles.aboutContent__cardsContainer} paddingYLg`}>
          {cardData.map((card, i) => (
            <div
              key={i}
              className={`${styles.aboutContent__card} ${styles[card.bgColor]}`}
            >
              <Svg id={card.icon} className={styles.aboutContent__cardIcon} />
              <h4 className={styles.aboutContent__cardTitle}>{card.title}</h4>
              <h5 className={styles.aboutContent__cardSubtitle}>
                {card.subtitle}
              </h5>
            </div>
          ))}
        </div>

        <div className={styles.aboutContent__staffContainer}>
          <div className={styles.aboutContent__staffImgContainer}>
            <ImageWebp
              src={JaneImage}
              srcSet={JaneWebpImage}
              alt="Jane Doe"
              className={styles.aboutContent__staffImg}
            />
            <div className={styles.aboutContent__staff1RightBottom}>
              <Svg id={JaneRightBottomIcon} />
            </div>
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
      </div>
    </section>
  );
};

export default AboutContent;
