import styles from "./HomeContent.module.scss";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
import StatusCounter from "../StatusCounter/StatusCounter";
import BlogHeader from "../../global/Blog/BlogHeader/BlogHeader";
import BlogCard from "../../global/Blog/BlogCard/BlogCard";
import MainBtn from "../../layout/MainBtn/MainBtn";
import ArrowRotation from "../../layout/ArrowRotation/ArrowRotation";
import { aboutPagePath, servicesPagePath } from "../../../router/path";

import {
  analystsImage,
  analystsWebpImage,
  tradeImage,
  tradeWebpImage,
} from "../../../assets/images";

import { exitIcon, timeBlackIcon } from "../../../assets/svg";

const HomeContent = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.homeContent}>
      <TwoColumnSection
        image={analystsImage}
        webpImage={analystsWebpImage}
        sectionTitle={<SectionTitle icon={exitIcon} title="experts" />}
        title="our team of experienced"
        titleThin="analysts"
        description="Leverage cutting-edge technology and in-depth market knowledge to identify potential trading opportunities"
        button={
          <MainBtn onClick={() => navigate(aboutPagePath)}>explore</MainBtn>
        }
      />

      <TwoColumnSection
        image={tradeImage}
        webpImage={tradeWebpImage}
        sectionTitle={<SectionTitle icon={timeBlackIcon} title="real-time" />}
        title="quality trade alerts with"
        titleThin="wealth bento"
        description="Never miss a chance to capitalize on market movements and make informed decisions."
        reverse
      />

      <ArrowRotation
        to={servicesPagePath}
        circleClass={styles.homeContent__circle}
        arrowClass={styles.homeContent__arrow}
      />

      <div className="containerBlack">
        <StatusCounter />
        <BlogHeader />
        <BlogCard limit={3} />
      </div>
    </section>
  );
};

export default HomeContent;
