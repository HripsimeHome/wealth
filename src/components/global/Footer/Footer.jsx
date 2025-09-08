import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { footerMenu } from "../../../constants/menuItems";

import { homePagePath } from "../../../router/path";
import { logoImage, logoWebpImage } from "../../../assets/images";

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
          {/* companyBlock */}

          {/* Footer Menu */}
          <div className={styles.footer__menuContainer}>
            {footerMenu.map(({ title, list }) => (
              <div key={title}>
                <h3 className={styles.footer__menuTitle}>{title}</h3>
                <ul className={styles.footer__menu}>
                  {list.map(({ text, path }) => (
                    <li key={text}>
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `${styles.footer__menuLink} 
                           ${isActive ? styles.footer__menuLink_active : ""}`
                        }
                      >
                        {text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Menu */}
        </div>
        {/* container */}

        <div className={styles.footer__bottomContainer}>
          <p className={styles.footer__copyright}>
            Copyright &copy; {new Date().getFullYear()}. Wealth Bento. All
            Rights Reserved.
          </p>
          <p>Powered by Webflow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
