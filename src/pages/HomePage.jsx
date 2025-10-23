import { useRef } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";
import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import HomeBrands from "../components/HomePage/HomeBrands/HomeBrands";
import HomeCategories from "../components/HomePage/HomeCategories/HomeCategories";
import HomeContent from "../components/HomePage/HomeContent/HomeContent";

const HomePage = () => {
  const categoriesSectionRef = useRef(null);
  const contentSectionRef = useRef(null);
  const smoothScroll = useSmoothScroll();

  // Универсальная обёртка
  const scrollTo = (ref, offset) => () => smoothScroll(ref.current, offset);

  return (
    <>
      <HomeHeader
        scrollToCategories={scrollTo(categoriesSectionRef, 90)} //90- отступ сверху
        scrollToContent={scrollTo(contentSectionRef, 70)}
      />

      <HomeBrands />
      <HomeCategories ref={categoriesSectionRef} />
      <HomeContent ref={contentSectionRef} />
    </>
  );
};

export default HomePage;
