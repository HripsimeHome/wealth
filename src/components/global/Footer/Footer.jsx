import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";

import SocialIcons from "../../layout/SocialIcons/SocialIcons";
// import ImageWebp from "../../layout/ImageWebp/ImageWebp";

// import {
//   privacyPolicyPagePath,
//   cookiePolicyPagePath,
// } from "../../../router/path";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        Footerl logo
        <br />
        <SocialIcons />
        <div className={styles.footer__footerBottom}>
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
