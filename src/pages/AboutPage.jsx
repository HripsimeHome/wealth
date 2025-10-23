import { useRef } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";
import AboutHeader from "../components/AboutPage/AboutHeader/AboutHeader";
import AboutSlider from "../components/AboutPage/AboutSlider/AboutSlider";
import AboutContent from "../components/AboutPage/AboutContent/AboutContent";

const AboutPage = () => {
  const statisticSectionRef = useRef(null);
  const smoothScroll = useSmoothScroll();

  return (
    <>
      <AboutHeader
        scrollToStatistic={() => smoothScroll(statisticSectionRef.current, 50)}
      />
      <AboutSlider />
      <AboutContent ref={statisticSectionRef} />
    </>
  );
};

export default AboutPage;
