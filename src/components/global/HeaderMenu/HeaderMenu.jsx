import styles from "./HeaderMenu.module.scss";
//import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import { headerMenu } from "../../../constants/menuItems";
import { logoImage, logoWebpImage } from "../../../assets/images";

import { homePagePath } from "../../../router/path";

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <Link to={homePagePath}>
        <ImageWebp
          src={logoImage}
          srcSet={logoWebpImage}
          alt="Wealth Bento"
          className={styles.headerMenu__logo}
        />
      </Link>

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
