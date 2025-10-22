import { useRef } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";
import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import HomeBrands from "../components/HomePage/HomeBrands/HomeBrands";
import HomeCategories from "../components/HomePage/HomeCategories/HomeCategories";
import HomeContent from "../components/HomePage/HomeContent/HomeContent";

const HomePage = () => {
  const categoriesRef = useRef(null);
  const contentRef = useRef(null);
  const smoothScroll = useSmoothScroll();

  return (
    <>
      <HomeHeader
        scrollToCategories={() => smoothScroll(categoriesRef.current, 90)}
        scrollToContent={() => smoothScroll(contentRef.current, 90)} //90- отступ сверху
      />
      <HomeBrands />
      <HomeCategories ref={categoriesRef} />
      <HomeContent ref={contentRef} />
    </>
  );
};

export default HomePage;
