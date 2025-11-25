import styles from "./Header.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";
import { headerMenu } from "../../../constants/menuItems";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { logoImage, logoWebpImage } from "../../../assets/images";
import { homePagePath } from "../../../router/path";
import { burgerIcon, crossIcon } from "../../../assets/svg";
import Svg from "../../layout/Svg/Svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className={styles.header}>
      <div className={clsx(styles.header__headerContainer, "container")}>
        <Link to={homePagePath}>
          <ImageWebp
            src={logoImage}
            srcSet={logoWebpImage}
            alt="Wealth Bento Company"
            className={styles.header__logoImg}
          />
        </Link>

        <nav>
          {isMenuOpen && (
            <button className={styles.header__btnClose} onClick={closeMenu}>
              <Svg id={crossIcon} className={styles.header__iconCross} />
            </button>
          )}

          <ul className={styles.header__list}>
            {headerMenu.map(({ text, path }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${styles.header__link}
                       ${
                         isActive ? styles.header__link_active : ""
                       }                  
                      `
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.header__btnBurger}
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <Svg id={burgerIcon} className={styles.header__iconBurger} />
        </button>
        <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    </div>
  );
};

export default Header;
