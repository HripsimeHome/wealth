import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import { homePagePath } from "../../../router/path";
import { logoImage, logoWebpImage } from "../../../assets/images";

// import {
//   privacyPolicyPagePath,
//   cookiePolicyPagePath,
// } from "../../../router/path";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__container}>
          <div className={styles.footer__companyBlock}>
            <Link to={homePagePath}>
              <ImageWebp
                src={logoImage}
                srcSet={logoWebpImage}
                alt="Wealth Bento"
                className={styles.footer__logo}
              />
            </Link>

            <SocialIcons />

            <spn className={styles.footer__companyInfo}>
              Navigate the Markets, Secure Your Future.
            </spn>
          </div>

          <div>Menu</div>
        </div>

        <div className={styles.footer__bottomContainer}>
          <p className={styles.footer__copyright}>
            Copyright &copy; {new Date().getFullYear()}. Wealth Bento. All
            Rights Reserved.
          </p>
          <p>Powered By Webflow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
