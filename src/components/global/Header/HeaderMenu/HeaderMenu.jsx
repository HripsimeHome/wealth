import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

import { headerMenu } from "../../../../constants/menuItems";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";
import Svg from "../../../layout/Svg/Svg";

import { logoImage, logoWebpImage } from "../../../../assets/images";
import { burgerIcon, crossIcon } from "../../../../assets/svg";
import { homePagePath } from "../../../../router/path";

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.headerMenu}>
      {/* Бургер-кнопка (видна только на мобилке) */}
      <button
        className={styles.headerMenu__btnBurger}
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        <Svg id={burgerIcon} className={styles.headerMenu__iconBurger} />
      </button>

      <nav
        className={`${styles.headerMenu__nav} ${
          isMenuOpen ? styles.headerMenu__nav_open : ""
        }`}
      >
        {isMenuOpen && (
          <>
            <button className={styles.headerMenu__btnClose} onClick={closeMenu}>
              <Svg id={crossIcon} className={styles.headerMenu__iconCross} />
            </button>
            {/* <Link to={homePagePath}>
              <ImageWebp
                src={logoImage}
                srcSet={logoWebpImage}
                alt="Wealth Bento"
                className={styles.headerMenu__logo}
              />
            </Link> */}
          </>
        )}

        <ul className={styles.headerMenu__list}>
          {headerMenu.map(({ text, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.headerMenu__link}
                   ${isActive ? styles.headerMenu__link_active : ""}`
                }
                onClick={closeMenu}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay для моб. меню */}
      {isMenuOpen && (
        <div className={styles.headerMenu__overlay} onClick={closeMenu} />
      )}
    </div>
  );
};

export default HeaderMenu;
