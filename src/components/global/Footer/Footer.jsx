import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import FooterMenu from "./FooterMenu/FooterMenu";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import { homePagePath } from "../../../router/path";
import { logoImage, logoWebpImage } from "../../../assets/images";

const Footer = () => {
  const { ref: topContainerRef, inView: isTopContainerInView } =
    useAnimationInView({
      threshold: 0.4,
      triggerOnce: false,
    });

  const { ref: bottomContainerRef, inView: isBottomContainerInView } =
    useAnimationInView({
      threshold: 0.2,
      // triggerOnce: false,
    });
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div ref={topContainerRef}>
          <TransitionProvider
            inProp={isTopContainerInView}
            delay={400}
            style={TransitionStyleTypes.bottom}
            className={styles.footer__topCcontainer}
          >
            <div className={styles.footer__companyBlock}>
              <Link to={homePagePath}>
                <ImageWebp
                  src={logoImage}
                  srcSet={logoWebpImage}
                  alt="Wealth Bento"
                  className={styles.footer__logoImg}
                />
              </Link>

              <SocialIcons />

              <span className={styles.footer__companyInfo}>
                Navigate the Markets, Secure Your Future.
              </span>
            </div>
            {/* companyBlock */}
            <FooterMenu />
          </TransitionProvider>
        </div>

        <div ref={bottomContainerRef}>
          <TransitionProvider
            inProp={isBottomContainerInView}
            delay={600}
            style={TransitionStyleTypes.bottom}
            className={styles.footer__bottomContainer}
          >
            <p className={styles.footer__copyright}>
              Copyright &copy; {new Date().getFullYear()}. Wealth Bento. All
              Rights Reserved.
            </p>
            <p>Powered by Webflow.</p>
          </TransitionProvider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
