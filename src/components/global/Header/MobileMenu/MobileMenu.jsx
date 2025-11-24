import styles from "./MobileMenu.module.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerMenu } from "../../../../constants/menuItems";
import { burgerIcon, crossIcon } from "../../../../assets/svg";
import Svg from "../../../layout/Svg/Svg";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.mobileMenu}>
      <nav className={styles.mobileMenu__nav}>
        <ul className={styles.mobileMenu__list}>
          {headerMenu.map(({ text, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.mobileMenu__link}
                  ${
                    isActive ? styles.mobileMenu__link_active : ""
                  }                  
                 `
                }
                onClick={closeMenu}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {isMenuOpen && (
        <div className={styles.mbileMenu__overlay} onClick={closeMenu} />
      )}
    </div>
  );
};

export default MobileMenu;
