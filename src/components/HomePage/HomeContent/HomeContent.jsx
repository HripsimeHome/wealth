import styles from "./HomeContent.module.scss";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import StatusCounter from "../StatusCounter/StatusCounter";
import BlogHeader from "../../global/Blog/BlogHeader/BlogHeader";
import BlogCard from "../../global/Blog/BlogCard/BlogCard";
import MainBtn from "../../layout/MainBtn/MainBtn";
import ArrowRotation from "../../layout/ArrowRotation/ArrowRotation";
import { aboutPagePath, servicesPagePath } from "../../../router/path";
import { exitIcon, timeBlackIcon } from "../../../assets/svg";

const HomeContent = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.homeContent}>
      <SectionTitle icon={exitIcon} title="experts" />
      our team of experienced analysts.
      <MainBtn onClick={() => navigate(aboutPagePath)}>explore</MainBtn>
      <SectionTitle icon={timeBlackIcon} title="real-time" />
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
