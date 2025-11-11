import styles from "./HomeBrands.module.scss";
import clsx from "clsx";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import ImageWebp from "./../../layout/ImageWebp/ImageWebp";

import {
  loadImage,
  loadWebpImage,
  chainImage,
  chainWebpImage,
  scaleImage,
  scaleWebpImage,
  traceImage,
  traceWebpImage,
} from "../../../assets/images";

const brandsLogos = [
  {
    img: loadImage,
    webImg: loadWebpImage,
    alt: "Load logo",
  },
  {
    img: chainImage,
    webImg: chainWebpImage,
    alt: "Chain logo",
  },
  {
    img: scaleImage,
    webImg: scaleWebpImage,
    alt: "Scale logo",
  },
  {
    img: traceImage,
    webImg: traceWebpImage,
    alt: "Trace logo",
  },
];
const HomeBrands = () => {
  const { ref: brandsRef, inView: isBrandsInView } = useAnimationInView({
    threshold: 0.5,
  });

  return (
    <section
      className={clsx(styles.homeBrands, "container", "paddingYLg")}
      ref={brandsRef}
    >
      {brandsLogos.map(({ img, webImg, alt }, index) => (
        <TransitionProvider
          key={index}
          inProp={isBrandsInView}
          delay={400}
          style={TransitionStyleTypes.bottom}
          className={styles.footer__topCcontainer}
        >
          <ImageWebp
            key={index}
            src={img}
            srcSet={webImg}
            alt={alt}
            className={styles.homeBrands__img}
          />
        </TransitionProvider>
      ))}
    </section>
  );
};

export default HomeBrands;
