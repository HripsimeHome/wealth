import styles from "./AboutHeader.module.scss";
import PageHeadingBig from "../../global/PageHeadingWrapper/PageHeadingBig/PageHeadingBig";
import MainBtn from "../../layout/MainBtn/MainBtn";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";

import { companyIcon } from "../../../assets/svg";

const AboutHeader = ({ scrollToStatistic }) => {
  const { ref: headingBigRef, inView: isHeadingBigInView } = useAnimationInView(
    {
      threshold: 0,
    }
  );
  const { ref: buttonRef, inView: isButtonInView } = useAnimationInView({
    threshold: 0,
  });

  return (
    <section className={styles.aboutHeader}>
      <div ref={headingBigRef}>
        <TransitionProvider
          inProp={isHeadingBigInView}
          delay={100}
          style={TransitionStyleTypes.zoomIn}
        >
          <PageHeadingBig
            icon={companyIcon}
            sectionTitle="wealth bento"
            title="about us"
            subtitle="we are a research site that manages a portfolio in real-time."
          />
        </TransitionProvider>
      </div>

      <div ref={buttonRef}>
        <TransitionProvider
          inProp={isButtonInView}
          delay={100}
          style={TransitionStyleTypes.top}
        >
          <MainBtn btnSecondaryBg onClick={scrollToStatistic}>
            explore
          </MainBtn>
        </TransitionProvider>
      </div>
    </section>
  );
};

export default AboutHeader;
