import styles from "./MobileMenu.module.scss";
import { NavLink } from "react-router-dom";
import { headerMenu } from "../../../../constants/menuItems";
import clsx from "clsx";

const MobileMenu = ({ closeMenu, isMenuOpen }) => {
  return (
    <>
      <nav
        className={clsx(
          styles.mobileMenu__nav,
          isMenuOpen && styles.mobileMenu__nav_open
        )}
      >
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
        <div className={styles.mobileMenu__overlay} onClick={closeMenu} />
      )}
    </>
  );
};

export default MobileMenu;
