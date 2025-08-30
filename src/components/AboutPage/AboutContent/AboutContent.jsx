// AboutContent.jsx
import styles from "./AboutContent.module.scss";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
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
  JaneLeftTopIcon,
  JaneRightBottomIcon,
  JacobRightTopIcon,
  JacobLeftBottomIcon,
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

        <TwoColumnSection
          image={JaneImage}
          webpImage={JaneWebpImage}
          alt="Staff"
          imgLeftTopCorner={JaneLeftTopIcon}
          imgRightBottomCorner={JaneRightBottomIcon}
          title="Jane Doe"
          description={
            <>
              <p>
                {" "}
                With over 15 years of experience as a stock analyst on Wall
                Street, Jane has solidified her reputation as a seasoned
                professional.
              </p>
              <p>
                Her insights, honed during the post-financial crisis, have
                consistently garnered attention and respect.
              </p>
              <p>
                Since 2015, Jane has been a prominent figure at stock
                conferences and in the media, sharing her bold predictions and
                in-depth analyses.
              </p>
            </>
          }
          textWhite
        />

        <TwoColumnSection
          image={JacobImage}
          webpImage={JacobWebpImage}
          alt="Staff"
          imgRightTopCorner={JacobRightTopIcon}
          imgLeftBottomCorner={JacobLeftBottomIcon}
          title={"Jacob Smith"}
          //description="Never miss a chance to capitalize on market movements and make informed decisions."
          textWhite
          reverse
        />
      </div>
    </section>
  );
};

export default AboutContent;
