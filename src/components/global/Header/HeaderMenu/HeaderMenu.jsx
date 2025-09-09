import styles from "./HeaderMenu.module.scss";
//import { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerMenu } from "../../../../constants/menuItems";

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <nav>
        <ul className={styles.headerMenu__list}>
          {headerMenu.map(({ text, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.headerMenu__link}
                   ${isActive ? styles.headerMenu__link_active : ""}
                 `
                }
              >
                {/* className={({ isActive }) =>
                  isActive
                    ? `${styles["headerMenu__link"]} ${styles["headerMenu__link--active"]}`
                    : styles["headerMenu__link"]
                } */}
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
